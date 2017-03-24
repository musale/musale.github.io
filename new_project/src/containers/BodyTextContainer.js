const React = require('react');
const JumbotronComponent = require('../components/JumbotronComponent');
const MyProjectsComponent = require('../components/MyProjectsComponent');

const BodyTextContainer = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <JumbotronComponent/>
          <MyProjectsComponent/>
        </div>
      </div>
    );
  },
});

module.exports = BodyTextContainer;
