const React = require('react');

const PropTypes = React.PropTypes;

function ProjectItem(props) {
  return (
    <div className="card">
      <img className="card-img-top img-fluid" src={props.data.src} alt={props.data.alt}/>
      <div className="card-inverse card-primary p-3 text-center">
        <h4 className="card-title">{props.data.title}</h4>
        <blockquote className="card-blockquote">
          <p>{props.data.body}</p>
          <footer>
            <small>
              See more
              <cite title={props.data.title}> {props.data.link}</cite>
            </small>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  data: PropTypes.object.isRequired,
};

module.exports = ProjectItem;
