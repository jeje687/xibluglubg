var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.status(200).send('Hello World!');
});

app.get('/ping', function (req, res) {
  res.status(200).send('Ping');
});

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
server.listen(port, ip_address, function () {
  console.log( "Listening on " + ip_address + ", port " + port )
});