const React = require('react');

function HeaderForm(props) {
  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={props.handleSubmit}>
      <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
      <input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Submit"/>
    </form>
  );
}

module.exports = HeaderForm;
