import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    height: 100%;
    overflow-x: hidden;
  }

  #root {
    height: 100%;
  }

  p {
    margin: 0;
  }
`

export default GlobalStyles