const React = require('react');

const FooterContainer = React.createClass({
  render() {
    return (
      <footer className="container-fluid bg-4 text-center">
        <p>Bootstrap Theme Made By
          <a href="https://www.w3schools.com">www.w3schools.com</a>
        </p>
      </footer>
    );
  },
});

module.exports = FooterContainer;
