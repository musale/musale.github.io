const React = require('react');
const HeaderComponent = require('../components/HeaderComponent');

const HeaderContainer = React.createClass({
  render() {
    return (
      <div>
        <HeaderComponent/>
      </div>
    );
  },
});

module.exports = HeaderContainer;
