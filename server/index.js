const express = require('express');
const router = express.Router();
// const url = require('url');
const path = require('path');
const Graph = require('node-dijkstra')
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const pg = require('pg');
const PORT = process.env.PORT || 5000;
const { Pool } = require('pg');
pg.defaults.ssl = true

const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      password: process.env.PASSWORD,
      // ssl: true,
  });

const pathNode = new Graph()
const navigateNode = new Map()

function onStart(){
  var sql = 'SELECT * FROM route LEFT JOIN object ON location = id ORDER BY id'
  pool.query(sql, function(err, results){
    if(err){
      console.error(err);
      pool.end();
      return;
    }
    if(results.rows.length === 0){
      console.log('Error 404, Data not found')
      pool.end();
    }
    for(var i =0; i < results.rows.length; i++){
        var North = results.rows[i].N
        var East = results.rows[i].E
        var South = results.rows[i].S
        var West = results.rows[i].W
        var Up = results.rows[i].up
        var Down = results.rows[i].down
        var Desc = results.rows[i].Description
        var cat = results.rows[i].category
        var dir = results.rows[i].direction
        var data = {};
        data[North] = 1;
        data[East] = 1;
        data[South] = 1;
        data[West] = 1;
        data[Up] = 1;
        data[Down] = 1;
        pathNode.addNode(results.rows[i].id, data);
        var dataNavigate = new Map();
        var category = new Map();
        if(North !== null) dataNavigate.set(North, 'North');
        if(East !== null) dataNavigate.set(East, 'East');
        if(South !== null) dataNavigate.set(South, 'South');
        if(West !== null) dataNavigate.set(West, 'West');
        if(Up !== null) dataNavigate.set(Up, 'Up');
        if(Down !== null) dataNavigate.set(Down, 'Down');
        dataNavigate.set('Description', Desc)
        var catarr = []
        if(navigateNode.get(results.rows[i].id) != null){
          // console.log('somethings here!')
          catarr = navigateNode.get(results.rows[i].id).get('Category');  
        }
        if(cat !== null && dir !== null) catarr.push([cat, dir])
        dataNavigate.set('Category', catarr)
        navigateNode.set(results.rows[i].id, dataNavigate);
        // console.log(results.rows[i].id, catarr)
    }
  })
}

function facingDirection(facing, newFacing){
  var compass = new Map();
  compass.set('North',0);
  compass.set('East',1);
  compass.set('South',2);
  compass.set('West',3);
  compass.set('N', 0);
  compass.set('E', 1);
  compass.set('W', 3);
  compass.set('S', 2);
  compass.set('Up', -1);
  compass.set('Down', -2);
  // compass.set(0,'North');
  // compass.set(1,'East');
  // compass.set(2,'South');
  // compass.set(3,'West');
  var compassnew = compass.get(newFacing);
  
  var compassnow = facing;
  if(compassnew === -1 || compassnew === -2){
    return compass.get((compassnow+2)%4);
  }
  if((compassnew - compassnow)%4 > 0){
    return 'right';
  }else if((compassnew - compassnow)%4 < 0){
    return 'left';
  }else if(compassnew === compassnow){
    return 'front';
  }else{
    console.log('wut',compassnew,newFacing,compassnow, facing)
  }
}

function navigate(req, res, next){
  var fromPath = req.params.from_id
  var toPath = req.params.to_id

  if(navigateNode.get(fromPath) === null || navigateNode.get(toPath) === null){
    res.json({'Error':'404', 'Detail':'Destination not exist'})
    next();
  }

  var pathResult = pathNode.path(fromPath, toPath)
  
  if(pathResult != null){
    var direction = [];
    for(var i =0;i < pathResult.length-1;i++){
      direction.push(navigateNode.get(pathResult[i]).get('Category'));
      direction.push(navigateNode.get(pathResult[i]).get(pathResult[i+1]));
    }
    // console.log(pathResult)
    var directionText = [];
    var compass = new Map();
    compass.set('North',0);
    compass.set('East',1);
    compass.set('South',2);
    compass.set('West',3);
    compass.set('N', 'North');
    compass.set('E', 'East');
    compass.set('W', 'West');
    compass.set('S', 'South');
    compass.set('Up', -1);
    compass.set('Down', -2);
    var compassnow = 0
    var stillStraight = false;
    var gotCompass = false;
    for(var i = 0; i < direction.length; i++){
      if(i%2===0){
        if(direction[i].length > 0){
            // console.log('Saw object', direction[i])
            stillStraight = false;
            var texttemp = 'You can see ';
            for(var j=0;j<direction[i].length;j++){
              if(j !== direction[i].length-1){
                  if(i===0){
                    texttemp += direction[i][j][0] + ' on the ' + compass.get(direction[i][j][1]) + ', ';
                  } else {
                    var facing = facingDirection(compassnow, direction[i][j][1]);
                    if(facing === 'front'){
                      texttemp += direction[i][j][0] + ' in front of you, '
                    }else if(facing === 'right'){
                      texttemp += direction[i][j][0] + ' on your right, '
                    }else if(facing === 'left'){
                      texttemp += direction[i][j][0] + ' on your left, '
                    }
                  }
                }else{
                  if(i===0){
                    texttemp += direction[i][j][0] + ' on the ' + compass.get(direction[i][j][1]);
                  } else {
                    var facing = facingDirection(compassnow, direction[i][j][1]);
                    if(facing === 'front'){
                      texttemp += direction[i][j][0] + ' in front of you'
                    }else if(facing === 'right'){
                      texttemp += direction[i][j][0] + ' on your right'
                    }else if(facing === 'left'){
                      texttemp += direction[i][j][0] + ' on your left'
                    }
                  }
                }
            }
            directionText.push(texttemp);
        }
      }
      else if(gotCompass === false){
        compassnow = compass.get(direction[i]);
        if(compassnow === -1 || compassnow === -2){
          directionText.push('Go ' + direction[i]);
        }else{
          gotCompass = true;
          directionText.push('Face ' + direction[i]);
        }
      }else {
        var compassnew = compass.get(direction[i]);
        var facing = facingDirection(compassnow, direction[i]);
        if(navigateNode.get(pathResult[Math.floor(i/2)]).get('Description') !== null && (compassnew !== -1 && compassnew !== -2)){
          directionText.push('Enter ' + navigateNode.get(pathResult[Math.floor(i/2)]).get('Description'));
          stillStraight = false;
        }else if(facing === 'front'){
          if( !stillStraight) directionText.push('Go straight');
          stillStraight = true;
        }else if(compassnew === -1 || compassnew === -2){
          compassnow = facing
          directionText.push('Go ' + direction[i] + ' the stair');
          stillStraight = false;
        }else if(facing === 'right'){
          if(stillStraight===true){
            for(var [k,v] of navigateNode.get(pathResult[Math.floor(i/2)])){
              if(k.indexOf('b')===0) {
                directionText.push('You should see ' + navigateNode.get(k).get('Description') + ' on the ' + facingDirection(compassnow, v));
              }  
            }
          }
          compassnow = compassnew;
          directionText.push('Turn right');
          stillStraight = false;
        }else if(facing === 'left'){
          if(stillStraight===true){
            for(var [k,v] of navigateNode.get(pathResult[Math.floor(i/2)])){
              if(k.indexOf('b')===0) {
                directionText.push('You should see ' + navigateNode.get(k).get('Description') + ' on the ' + facingDirection(compassnow, v));
              }  
            }
          }
          compassnow = compassnew;
          directionText.push('Turn left');
          stillStraight = false;
        }
      }
      if(i===direction.length-1){
        var lasttext = directionText.pop();
        if(lasttext==='Go straight'){
          directionText.push('Go straight');
          directionText.push('Your place is in front of you');
        }else if(lasttext==='Turn right'){
          directionText.push('Your place is on the right');
        }else if(lasttext==='Turn left'){
          directionText.push('Your place is on the left');
        }else{
          directionText.push(lasttext + ' and you should see your place');
          // console.log(lasttext);
        }
        // directionText.push('Your place is on') 
      }
      //console.log(direction)
    }
  }else{
    res.json({'Error':'404', 'Detail':'Path not found'})
    next();
  }
  res.json(directionText.concat('#').concat(pathResult));
  next();
}

function arrayifyMap(m){
  if(m !== null)
    return m.constructor === Map ? [...m].map(([v,k]) => [arrayifyMap(v),arrayifyMap(k)]): m;
  else
    return null
}

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {

  onStart();
    
  const app = express();
  
  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  router.get('/info', (req, res)=>{
    var information = {}
    for(var [k,v] of navigateNode){
        if(v.get('Description') !== null) information[k]=v.get('Description');
    }
    // res.json(JSON.stringify(arrayifyMap(navigateNode)));
    res.json(information);
  })

  router.get('/:from_id/:to_id', navigate, (req, res) =>{
  })

  app.use('/api',router)

  // Answer API requests.
  // app.get('/api', function (req, res) {
  //   res.set('Content-Type', 'application/json');
  //   res.send('{"message":"Hello from the custom server!"}');
  // });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });

  module.exports = app
}