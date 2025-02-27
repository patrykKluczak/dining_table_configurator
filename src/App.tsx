import { ThemeProvider } from 'styled-components'
import Home from './Routes/Home'
import { theme, GlobalStyle } from './components/quarks'
import { DataProvider } from './context'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <DataProvider>
      <Home />
    </DataProvider>
  </ThemeProvider>
)

export default App
