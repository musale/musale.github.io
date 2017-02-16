var React = require('react');
var styles = require('../styles/baseStyle');
require('../styles/main.css');

var Main = React.createClass({
    componentDidMount: function() {
        console.log(styles.background)
    },
  render: function () {
    return (
        <div style={styles.main}>
            {this.props.children}
        </div>
    )
  }
})

module.exports = Main;
