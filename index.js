// index.js
// 

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/api', function (req, res) {
   stepsCount = Math.random()*100 |0;
   res.send({results:stepsCount});
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})