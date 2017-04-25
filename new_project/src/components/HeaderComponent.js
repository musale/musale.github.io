const React = require('react');
const HeaderFormComponent = require('./HeaderFormComponent');

function HeaderComponent() {
  return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded  fixed-top">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="https://musale.gihub.io/">musale</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="https://musale.gihub.io/">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/musale/">GitHub</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://stackoverflow.com/users/4444629/falcon">StackOverflow</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://jsfiddle.net/user/musale/fiddles/">JSFiddle</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://medium.com/@musale">Medium</a>
            </li>
          </ul>
          <HeaderFormComponent/>
        </div>
      </nav>
    </div>
  );
}

module.exports = HeaderComponent;
