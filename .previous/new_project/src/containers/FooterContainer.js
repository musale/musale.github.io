const React = require('react');

const FooterContainer = React.createClass({
  render() {
    return (
      <footer className="container-fluid bg-4 text-center">
        <p>I am root <i className="fa fa-smile-o" aria-hidden="true"></i>
        . If you see me laughing, you better have a backup! </p>
      </footer>
    );
  },
});

module.exports = FooterContainer;
