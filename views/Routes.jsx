var React = require('react');
var Router = require('react-router');
var {Route, RouteHandler} = require('react-router');
var {Example} = require('./example/Example');


var App = React.createClass({
  render() {
    return (
      <RouteHandler />
    )
  }
});

var routes = (
  <Route path="/" handler={App}>

    <Route path="example" handler={Example} />

  </Route>
);

var setUpRoutes = function() {
  // declare our routes and their hierarchy
  Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root />, document.getElementById('content'));
  });
};

module.exports = {
  setUpRoutes: setUpRoutes,
};
