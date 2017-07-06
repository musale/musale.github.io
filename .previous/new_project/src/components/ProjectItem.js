const React = require('react');

const PropTypes = React.PropTypes;
const styles = require('../styles/styles');

function AppDataItemsList(props) {
  const appDataItemsList = props.items;
  const itemsList = appDataItemsList.map(item =>
    <dt><small>{item}</small></dt>,
  );
  return (
    <dl>{itemsList}</dl>
  );
}
function Utilities(props) {
  const utilities = props.utilities;
  const itemsList = utilities.map(item =>
    <dt><small>{item}</small></dt>,
  );
  return (
    <dl>{itemsList}</dl>
  );
}
function DevOps(props) {
  const devOps = props.devOps;
  const itemsList = devOps.map(item =>
    <dt><small>{item}</small></dt>,
  );
  return (
    <dl>{itemsList}</dl>
  );
}
function BusinessTools(props) {
  const businessTools = props.businessTools;
  const itemsList = businessTools.map(item =>
    <dt><small>{item}</small></dt>,
  );
  return (
    <dl>{itemsList}</dl>
  );
}

function ProjectItem(props) {
  return (
    <div className="card">
      <img style={styles.projectLogo} className="card-img-top img-fluid" src={props.data.src} alt={props.data.alt}/>
      <div className="card-inverse card-primary p-3 text-center">
        <h4 className="card-title">{props.data.title}</h4>
        <blockquote className="card-blockquote">
          <p>{props.data.body}</p>
          <footer>
            <small>
              See more
              <cite title={props.data.title}>
                <a style={styles.whiteLink} href={props.data.link}> {props.data.link}</a>
              </cite>
            </small>
          </footer>
        </blockquote>
      </div>
      <div className="card-footer">
        <small className="text-muted text-center">Project Stack</small>
        <div className="row">
          <div className="col-md-3">
            <small className="text-muted text-center">App Data</small>
            <AppDataItemsList items={props.data.stack.appData} />
          </div>
          <div className="col-md-3">
            <small className="text-muted text-center">Utilities</small>
            <Utilities utilities={props.data.stack.utilities} />
          </div>
          <div className="col-md-3">
            <small className="text-muted text-center">DevOps</small>
            <DevOps devOps={props.data.stack.devOps} />
          </div>
          <div className="col-md-3">
            <small className="text-muted text-center">Biz Tools</small>
            <BusinessTools businessTools={props.data.stack.businessTools} />
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  data: PropTypes.object.isRequired,
};

module.exports = ProjectItem;
