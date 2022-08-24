import PropTypes from 'prop-types';
import React from 'react';

import StyledTypography from './styles';

const Typography = ({ align, children, variant, ...restProps }) => (
  <StyledTypography align={align} variant={variant} {...restProps}>
    {children}
  </StyledTypography>
);

Typography.defaultProps = {
  align: 'inherit',
  variant: 'body1',
  children: <React.Fragment />,
};

Typography.propTypes = {
  align: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default Typography;
