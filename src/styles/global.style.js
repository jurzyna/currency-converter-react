import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  body{
    font-size: 1.6rem;
  }
  *, *:before, *:after{
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
