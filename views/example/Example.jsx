var React = require('react');
var styles = require('./example.scss');

var Example = React.createClass({
  render() {
    return (
      <div className={styles.exampleContainer}>
        default <span className={styles.example}>fancy</span>
      </div>
    );
  }
});

module.exports = {
  Example: Example,
};
