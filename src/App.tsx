import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { BeersContextProvider } from 'contexts/BeersContext'
import { Router } from './Router'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BeersContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BeersContextProvider>
    </ThemeProvider>
  )
}

export default App
