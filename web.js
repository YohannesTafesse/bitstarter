/*var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());

var buf = new Buffer(1000);

app.get('/', function(request, response) {
//response.send(fs.readFileSync('index.html'));
response.send(buf.toString('utf8',0,fs.readFileSync('index.html')));
  
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
*/

var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
//var readed = (fs.readFileSync('index.html')).toString();

app.get('/', function(request, response) {
var readed = (fs.readFileSync('index.html')).toString();  
response.send(readed);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

