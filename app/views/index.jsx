require('./core/core.scss');

var React = require('react');

var MyPage = React.createClass({
  render: function() {
  	return <div className='test'>Hello baby!</div>;
  }
});

React.render(<MyPage />, document.getElementById('content'));
