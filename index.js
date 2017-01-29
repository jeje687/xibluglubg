var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.OPENSHIFT_NODEJS_PORT || 5000, function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
