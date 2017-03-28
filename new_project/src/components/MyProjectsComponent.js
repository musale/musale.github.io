const React = require('react');
const ProjectItem = require('../components/ProjectItem');

const PropTypes = React.PropTypes;

function MyProjectsComponent(props) {
  return (
    <div>
      <h1 className="display-4 text-center">I create awesome stuff</h1>
      <p className="lead text-center">&#8213; The web is my playground &#8213;</p>
      <div className="card-columns">
        {props.data.map(dataItem =>
          <ProjectItem data={dataItem}/>)}
      </div>
    </div>
  );
}

MyProjectsComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};


module.exports = MyProjectsComponent;
