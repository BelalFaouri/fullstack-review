const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let db=require('../database/index.js')
var github=require('../helpers/github.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body.name);
  var username=req.body.name
  // db.save(req.body);
  github.getReposByUsername(username,function(body){
  	console.log(body)
  	db.save(body);
  })
  res.send('success')
  // console.log(req.body)

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

