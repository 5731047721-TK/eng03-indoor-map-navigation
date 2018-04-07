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
var testy = ''
function onStart(){
  var sql = 'SELECT * FROM route LEFT JOIN object ON location = id'
  pool.query(sql, function(err, results){
    if(err){
      console.error(err);
      pool.end();
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
        var data = {};
        data[North] = 1;
        data[East] = 1;
        data[South] = 1;
        data[West] = 1;
        pathNode.addNode(results.rows[i].id, data);
    }
    testy = results.rows[0].id;
    // console.log(pathNode.path('f1_56', 'f1_15'))
  })
}



function lookUpPath(req, res, next){
  var id = req.params.path_id
  var floor = req.params.floor_id

  var sql = 'SELECT * FROM navigation WHERE id = ?'
  pool.query(sql, [id], function(err, results){
    if(err){
      console.error(err);
      res.statusCode = 500;
      pool.end();
      return res.json({ errors: ['Cannot find table']})
    }  
    if(results.rows.length === 0){
      res.statusCode = 404;
      pool.end();
      return res.json({ errors: ['Path not found']})
    }
    req.node = results.rows[0];
    //pool.end();
    next();
  })
}

function navigate(req, res, next){
  var fromPath = req.params.from_id
  var toPath = req.params.to_id


  console.log(fromPath, toPath, testy)
  res.json(pathNode.path(fromPath, toPath));
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
  app.get('/db', function(request, response){
    pool.query('SELECT * FROM node', function(err, result){
      console.log('log message below\n', err, result)
      console.log('Database string below\n', pool.connectionString, process.env.DATABASE_URL)
      if(err){
        console.error(err)
        response.send("Error from query > " + err)
      } else{
        console.log('Query successfully, rendering results')
        console.log({results: result.rows})
        // response.render({results: result.rows})
      }
      pool.end()
    })
    response.end()
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });

  module.exports = app
}