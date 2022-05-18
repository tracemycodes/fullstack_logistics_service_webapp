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
  // width: 100vw;
  // overflow: hidden;
}
`;

export const LightTheme = {
  background_darkBlue: 'rgb(0, 39, 65)',
  text_white: '#E6E6E6',
  text_light: '#fff',
  text_grey: 'rgb(116, 146, 165)',
  text_ashGrey: '#e8ebf2',
  text_orange: 'rgb(236, 1, 1)',
  text_darkBlue: 'rgb(0, 39, 65)',
  text_blue_overlay: 'rgb(0, 39, 65, 0.9)',
  dark_overlay: 'rgb(0, 0, 0, 0.5)',
  text_h1: 'clamp(1.5rem, 7vw, 2.8rem)',
  text_h2: 'clamp(1rem, 6.5vw, 1.8rem)',
  text_h3: 'clamp(0.8rem, 4vw, 1rem);',
  text_h4: 'clamp(.8rem, 3.2vw, 1.2rem)',
  text_h5: '0.7rem',
  text_p1: 'clamp(0.55rem, 4.5vw, 0.85rem)',
  icon_filter: 'brightness(0) saturate(100%) invert(27%) sepia(88%) saturate(7180%) hue-rotate(356deg) brightness(87%) contrast(114%)',
  lineHeight_h1: 'clamp(2.4rem, 10vw, 3.75rem)',
};
