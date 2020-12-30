import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import flex from '@utils/flex';

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: ${({ theme }) => theme.fontSize};
    font-family: ${({ theme }) => theme.fontFamily};
    box-sizing: border-box;
    font-size: 15px;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  html, 
  body, 
  #root {
    height: 100%;
  }

  #root {
    ${flex.column}
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
