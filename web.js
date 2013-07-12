var express = require('express');

var app = express.createServer(express.logger());


 
var fs = require('fs');
/*fs.readFile('./index.html',function(err,data){
 console.log(data.toString());
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); */








var buf = new Buffer();
app.get('/', function(request, response) {
    response.send(buf.toString('utf8',0,fs.readFileSync('index.html')));});

var port = process.env.PORT || 5000;app.listen(port, function() {
console.log("Listening on " + port);});
