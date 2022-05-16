import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
  height: 100%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {  
  background-color: #fff;    
  font-family: Arial, Helvetica, sans-serif;
}
`;

export const LightTheme = {
  background: 'blue',
  text-white: '#E6E6E6',
  dark-overlay: ''
};
