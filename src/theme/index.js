import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  mode: 'light',
  palette: {
    primary: {
      main: '#00D1C1',
      contrastText: '#FFF',
    },
    error: {
      main: '#E33F37',
    },
    divider: '#CCCCCC',
    background: {
      default: '#F5F5F5',
    },
    grey: {
      grey5: '#E0E0E0',
    },
  },
  typography: {
    fontFamily: '"Source Sans Pro", Arial, Helvetica, sans-serif',
  },
  shadows: {
    navbarShadow: '0px 4px 10px rgba(0, 0, 0, 0.07)',
  },
  pxToRem: (pixel) => `${0.0625 * pixel}rem`,
});

export default theme;
