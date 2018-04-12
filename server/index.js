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
  var sql = 'SELECT * FROM route LEFT JOIN object ON location = id'
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
    // console.log(navigateNode)
    // var pathResult = pathNode.path('f1_56', 'f1_15')
    // if(pathResult != null){
    //   var direction = [];
    //   for(var i =0;i < pathResult.length-1;i++){
    //     direction[i] = navigateNode.get(pathResult[i]).get(pathResult[i+1]);
    //   }
    //   console.log(direction)
    // }
  })
}


function navigate(req, res, next){
  var fromPath = req.params.from_id
  var toPath = req.params.to_id

  var pathResult = pathNode.path(fromPath, toPath)
  
  if(pathResult != null){
    var direction = [];
    for(var i =0;i < pathResult.length-1;i++){
      direction.push(navigateNode.get(pathResult[i]).get('Category'));
      direction.push(navigateNode.get(pathResult[i]).get(pathResult[i+1]));
    }
    console.log(pathResult)
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
                    var compassnew = compass.get(direction[i][j][1]);
                    if(compassnow === compassnew){
                      texttemp += direction[i][j][0] + ' in front of you, '
                    }else if((compassnew - compassnow)%3 > 0){
                      texttemp += direction[i][j][0] + ' on your right, '
                    }else{
                      texttemp += direction[i][j][0] + ' on your left, '
                    }
                  }
                }else{
                  if(i===0){
                    texttemp += direction[i][j][0] + ' on the ' + compass.get(direction[i][j][1]);
                  } else {
                    var compassnew = compass.get(direction[i][j][1]);
                    if(compassnow === compassnew){
                      texttemp += direction[i][j][0] + ' in front of you'
                    }else if((compassnew - compassnow)%3 > 0){
                      texttemp += direction[i][j][0] + ' on your right'
                    }else{
                      texttemp += direction[i][j][0] + ' on your left'
                    }
                  }
                }
            }
            directionText.push(texttemp);
        }
      }
      else if(i===1){
        directionText.push('Face ' + direction[i]);
        compassnow = compass.get(direction[i]);
      }else {
        var compassnew = compass.get(direction[i]);
        // console.log(compassnew, compassnow, (compassnew - compassnow)%3)
        if(compassnow === compassnew){
          if( !stillStraight) directionText.push('Go straight');
          stillStraight = true;
        }else if(compassnew === -1 || compassnew === -2){
          compassnow = (compassnow+2)%3
          directionText.push('Go ' + direction[i] + ' the stair');
          stillStraight = false;
        }else if((compassnew - compassnow)%3 > 0){
          // console.log('right!',compassnew, compassnow)
          compassnow = compass.get(direction[i]);
          directionText.push('Turn right');
          stillStraight = false;
        }else if((compassnew - compassnow)%3 < 0){
          // console.log('left!',compassnew, compassnow)
          compassnow = compass.get(direction[i]);
          directionText.push('Turn left');
          stillStraight = false;
        }
        if(i===direction.length-1){
          var lasttext = directionText.pop();
          if(lasttext==='Go straight'){
            directionText.push('Your place is in front of you');
          }else if(lasttext==='Turn right'){
            directionText.push('Your place is on the right');
          }else if(lasttext==='Turn left'){
            directionText.push('Your place is on the left');
          }else{
            console.log(lasttext);
          }
          // directionText.push('Your place is on') 
        }
        //console.log(direction)
      }
    }
  }else{
    res.json({'Error':'404', 'Detail':'Path not found'})
    next();
  }
  // console.log(fromPath, toPath, testy)
  
  
  res.json(directionText);
  next();
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

  router.get('/:from_id/:to_id', navigate, (req, res) =>{
    // const results = []
    // const id = req.params.path_id
    // const floor = req.params.floor_id
    // pool.query('SELECT * FROM navigation WHERE id=($1)',[id], (err, result)=>{
    //   if(err){
    //     console.log('Its error!!')
    //     console.log(err);
    //     pool.end()
    //     return res.status(500).json({success: false, data: err});
    //   } else{
    //     console.log('Query success on floor', floor, 'path', id)
    //     console.log({results: result.rows})
    //     results.push(result.rows)
    //     pool.end()
    //     return res.json(results)
    //   }
    // })
    // res.json(req.node)
    // res.end()
  })

  app.use('/api',router)

  // Answer API requests.
  // app.get('/api', function (req, res) {
  //   res.set('Content-Type', 'application/json');
  //   res.send('{"message":"Hello from the custom server!"}');
  // });

  // Test db
  // app.get('/db', function(request, response){
  //   pool.query('SELECT * FROM node', function(err, result){
  //     console.log('log message below\n', err, result)
  //     console.log('Database string below\n', pool.connectionString, process.env.DATABASE_URL)
  //     if(err){
  //       console.error(err)
  //       response.send("Error from query > " + err)
  //     } else{
  //       console.log('Query successfully, rendering results')
  //       console.log({results: result.rows})
  //       // response.render({results: result.rows})
  //     }
  //     pool.end()
  //   })
  //   response.end()
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