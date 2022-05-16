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
  background_darkBlue: 'rgb(0, 39, 65)',
  text_white: '#E6E6E6',
  text_grey: 'rgb(116, 146, 165)',
  dark_overlay: 'rgb(0, 0, 0, 0.5)',
  text_h1: 'clamp(1.5rem, 7vw, 2.8rem)',
  text_h4: 'clamp(.8rem, 3.2vw, 1.2rem)',
  lineHeight_h1: 'clamp(2.4rem, 10vw, 3.75rem)',
};
