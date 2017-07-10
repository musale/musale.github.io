import React, { Component } from 'react';
import '../styles/css/index.css';
import Header from '../containers/Header';
import Landing from '../containers/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <Landing />
      </div>
    );
  }
}

export default App;
