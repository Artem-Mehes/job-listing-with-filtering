import React from 'react';
import ReactDOM from 'react-dom';
import '@assets/fonts/index.css';
import Home from '@pages/Home';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './app/styles/GlobalStyles';
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
