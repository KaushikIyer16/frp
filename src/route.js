const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const success = "OK";
const failure = "ERR";

const mongoClient = require('mongodb').MongoClient;
const dbUrl = "mongodb://localhost:27017";
const dbName = "frp";

const crypto = require('crypto');

function getDbConnection() {
  return new Promise(function(resolve, reject) {
    mongoClient.connect(dbUrl, function(err, client) {
      if (err != null) {
        reject(err);
      }else{
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        resolve(db,client);
      }
    });
  });

}

function closeDbConnection(client) {
  client.close();
}

var app = express();

/*defining the body-parser middleware*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Bottom are routes for handling file requests*/

app.get("/", function(request,response) {
  response.sendFile(__dirname+"/index.html");
});

app.get("/:fileName", function(request,response) {
  response.sendFile(__dirname+"/"+request.params.fileName)
});

app.get("/css/:fileName", function(request,response) {
  response.sendFile(__dirname+"/css/"+request.params.fileName)
});

app.get("/js/:fileName", function(request,response) {
  response.sendFile(__dirname+"/js/"+request.params.fileName)
});

app.get("/components/:fileName", function(request,response) {
  response.sendFile(__dirname+"/components/"+request.params.fileName)
});

app.get("/fonts/:fileName", function(request,response) {
  response.sendFile(__dirname+"/fonts/"+request.params.fileName)
});

app.get("/fonts/:dir/:fileName", function(request,response) {
  response.sendFile(__dirname+"/fonts/"+request.params.dir+"/"+request.params.fileName)
});

/* Bottom are the user API's */

app.post("/users/add", function(request, response) {

  getDbConnection().then(function(db, client) {

    let hash = crypto.createHash('sha256');
    let userName = request.body.userName;
    let password = hash.update(request.body.password.toString());

    db.collection('User')
    .insertOne({"userName": userName, "password":hash.digest('base64')})
    .then(function(result) {
      if(result.result.ok == 1){
        response.send(success);
      }else{
        response.send(failure);
      }
    }).catch(function(error) {
      console.log(error);
      response.send(failure);
    });

    response.send(success);

  }).catch(function(error) {
    console.log(error);
    response.send(failure);
  });

});

app.post("/users/verify", function(request,response) {

  getDbConnection().then(function(db, client) {

    let hash = crypto.createHash('sha256');
    let userName = request.body.userName;
    let password = hash.update(request.body.password.toString());
    db.collection('User')
    .find({"userName": userName,"password":hash.digest('base64')})
    .count(true,null,function(error, count) {
      console.log("The number of users are "+count);
      if (count == 1) {
        response.send(success);
      }else{
        response.send(failure);
      }
    });


  }).catch(function(error) {
    console.log(error);
    response.send(failure)
  });

});

app.listen(3000);
