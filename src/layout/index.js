import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import MainLayoutContainer from './styles';

const Layout = ({ children, classes }) => (
  <MainLayoutContainer className={classes}>
    <Box>{children}</Box>
  </MainLayoutContainer>
);

Layout.defaultProps = {
  children: <></>,
  classes: '',
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
  classes: PropTypes.string,
};

export default Layout;
