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
      default: '#E5E5E5',
    },
  },
  pxToRem: (pixel) => `${0.0625 * pixel}rem`,
});

export default theme;
