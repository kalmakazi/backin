const ROUTES = {
  '/': function(req, res) {
    res.render('index.ejs');
  }
};

var Router = function(app) {
  this.app = app;
};

Router.prototype.setUp = function() {
  for (route in ROUTES) {
    this.app.get(route, ROUTES[route]);
  }
};

module.exports = {
  'Router': Router,
};
