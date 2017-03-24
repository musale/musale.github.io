const React = require('react');
const styles = require('../styles/styles');

function JumbotronComponent() {
  return (
    <div style={styles.jumbotron}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-2 text-center">Fluid jumbotron</h1>
          <p className="lead text-center">&#8213; Awaiting greatness &#8213;</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

module.exports = JumbotronComponent;
