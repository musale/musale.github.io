import React, { Component } from 'react';
import '../styles/css/index.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 sidebar_left">
            <nav className="nav-sidebar">
              <ul className="nav tabs">
                <li className="active"><a href="/tab1" dataToggle="tab">Lorem ipsum</a></li>
                <li className=""><a href="/tab2" dataToggle="tab">Dolor asit amet</a></li>
                <li className=""><a href="/tab3" dataToggle="tab">Stet clita</a></li>
              </ul>
            </nav>
          </div>
          <div className="col-md-6">
            <p>main content</p>
          </div>
          <div className="col-md-3">
            <div className="jumbotron">
              <h4>Hi, I'm Martin </h4>
              A Nairobi based software engineer. You can find me on Twitter, GitHub and Medium. Visit my about me page and feel free to reach out.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
