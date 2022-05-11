import { createGlobalStyle } from 'style-components'

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
  
    background-color: ${ ( { theme } ) => theme.background };
}
`

export const LightTheme = {
  background: '#fff',
}