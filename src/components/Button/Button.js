import PropTypes from 'prop-types';

const Button = ({ label }) => {
  return <button>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
