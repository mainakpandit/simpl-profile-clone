import { ThemeProvider } from '@mui/material/styles';

import theme from '@theme';
import Router from '@routes';
import '@styles/main.scss';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
