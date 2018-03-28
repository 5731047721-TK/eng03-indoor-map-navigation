const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const pg = require('pg');
const PORT = process.env.PORT || 5000;
const { Client } = require('pg');

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

  const client = new Client({
      connectionString: process.env.DATABASE_URL,
      password: process.env.PASSWORD,
      ssl: true,
  });
  client.connect();  
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  // Test db
  app.get('/db', function(req, res){
    pg.connect(process.env.DATABASE_URL+"?ssl=true",function(err, client, done){
      client.query('SELECT * FROM test_table', function(err, result){
        done();
        if(err){
            console.error(err)
            res.send("ERRORRRR!!!! " + err)
        } else{
            res.render('pages/db', {results: result.rows})
        }
        client.end();
      })  
    })
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}
