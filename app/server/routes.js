

const ROUTES = {
	'/': null,
};

var Views = function() {};

var Router = function(app) {
	this.app = app;
};

Router.prototype.setUp = function() {
  for (route in ROUTES) {
    console.log(route);
  }

  this.app.get('/', function(req, res) {
    res.render('index.ejs');
  });
};

module.exports = {
  'Router': Router,
};
