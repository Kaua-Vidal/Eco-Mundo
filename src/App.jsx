import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import Header from './components/Header'
import AppRoutes from './routes'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <GlobalStyle/>
      <AppRoutes/>
    </ThemeProvider>
  )
}

export default App
