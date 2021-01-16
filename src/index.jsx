import React from 'react';
import ReactDOM from 'react-dom';
import '@assets/fonts/index.css';
import GlobalStyles from '@styles/GlobalStyles';
import Home from '@pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
