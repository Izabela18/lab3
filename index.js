

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // POST (och PUT) (1)
//var ObjectId = require('mongodb').ObjectID;
var path = require('path');
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.static('./'));
var MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb://localhost:27017', function(error, client) {
  if (error) {
    console.error("Failed to connect to server!");
    console.log(error);
  } else {
    console.log("Connected to server!");
    db = client.db('test');
  }
});



app.post('/test', function (request, response) {
db.collection('sport').insertMany(request.body, function (error, result) {
    response.send(result);
  });
});

app.get('/test', function (request, response) {
  console.log(db);
  db.collection('sport').find({}).toArray(function (error, result) {
    if (error) {
      response.status(500).send(error);
      return;
    }
    response.send(result);

  });
});


app.get('/test2', function (request, response) {

db.collection('sport').find({"sport": request.query.alias}).toArray(function(error, result){
  if (error) {
    response.status(500).send(error);
    return;
  }else {
    console.log(result);
    response.send(result);
  }
}
)});

app.listen(3000, function () {
  console.log('The server is running!');
});
