import React, { Component } from 'react';
import '../styles/css/index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <ul className="sidebar__menu">
            <li className="sidebar__menu_item"><a href="/home">My menu >></a></li>
            <li className="sidebar__menu_item"><a href="/home">My menu >></a></li>
            <li className="sidebar__menu_item"><a href="/home">My menu >></a></li>
            <li className="sidebar__menu_item"><a href="/home">My menu >></a></li>
          </ul>
        </div>
        <div className="content">
          My content
        </div>

      </div>
    );
  }
}

export default App;
