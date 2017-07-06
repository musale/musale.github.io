const React = require('react');
const styles = require('../styles/styles');

function JumbotronComponent() {
  return (
    <div style={styles.jumbotron}>
      <img className="img-responsive" src="/images/3246305.jpg" alt="MM" height="40%" width="100%" />
      <hr></hr>
    </div>
  );
}

module.exports = JumbotronComponent;
