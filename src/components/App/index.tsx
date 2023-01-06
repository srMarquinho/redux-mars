import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import AppBody from '../AppBody';
import Heather from '../Header'

import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

/**
 *
 *
 * @return {*}
 */
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="app">
        <Heather />
        <AppBody />
      </div>
    </ThemeProvider>
  );
}

export default App;
