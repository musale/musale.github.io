const React = require('react');
const HeaderContainer = require('../containers/HeaderContainer');
const BodyTextContainer = require('../containers/BodyTextContainer');
const FooterContainer = require('../containers/FooterContainer');

const LandingContainer = React.createClass({
  render() {
    return (
      <div>
        <HeaderContainer />
        <BodyTextContainer />
        <FooterContainer />
      </div>
    );
  },
});

module.exports = LandingContainer;
