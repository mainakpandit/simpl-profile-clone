import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import { MainLayoutContainer } from './styles';

const Layout = ({ children }) => (
  <MainLayoutContainer>
    <Box>{children}</Box>
  </MainLayoutContainer>
);

Layout.defaultProps = {
  children: <></>,
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
};

export default Layout;
