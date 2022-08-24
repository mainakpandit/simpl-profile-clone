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
      grey1: '#A8AFB8',
      grey2: '#202020',
      grey4: '#888888',
      grey5: '#E0E0E0',
    },
  },
  typography: {
    fontFamily: '"Source Sans Pro", Arial, Helvetica, sans-serif',
  },
  shadows: {
    1: '0 4px 4px rgba(225, 225, 225, 0.25)',
    8: '0 1px 28px rgba(0, 4, 18, 0.04)',
    navbarShadow: '0 4px 10px rgba(0, 0, 0, 0.07)',
    textShadow1: '0 2.1px 2.1px rgba(36, 61, 124, 0.25)',
  },
});

export default theme;
