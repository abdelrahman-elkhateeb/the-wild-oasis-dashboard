import PropTypes from "prop-types";

Empty.propTypes = {
  resourceName: PropTypes.string.isRequired,
}

function Empty({ resourceName }) {
  return <p>No {resourceName} could be found.</p>;
}

export default Empty;
