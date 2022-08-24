import PropTypes from 'prop-types';

import StyledButton from './styles';

const Button = ({ disabled, fullWidth, variant, onClick, children, ...restProps }) => (
  <StyledButton
    disabled={disabled}
    fullWidth={fullWidth}
    variant={variant}
    onClick={onClick}
    {...restProps}
  >
    {children}
  </StyledButton>
);

Button.defaultProps = {
  disabled: false,
  fullWidth: false,
  variant: 'text',
  onClick: () => {},
  children: <></>,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
