const React = require('react');
const JumbotronComponent = require('../components/JumbotronComponent');
const MyProjectsComponent = require('../components/MyProjectsComponent');
const projects = require('../utils/projects');

const BodyTextContainer = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <JumbotronComponent/>
          <MyProjectsComponent data={projects}/>
        </div>
      </div>
    );
  },
});

module.exports = BodyTextContainer;
