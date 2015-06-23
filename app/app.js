var express = require('express');
var Router = require('./server/routes').Router;

var app = express();
var server = app.listen(8888, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

var router = new Router(app);
router.setUp();
