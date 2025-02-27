import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'src/components/quarks'
import LoadingScreen from './LoadingScreen'

test('molecules/LoadingScreen', () => {
  render(
    <ThemeProvider theme={theme}>
      <LoadingScreen />
    </ThemeProvider>
  )

  const textElement = screen.getByText('dining table configurator')
  const styles = window.getComputedStyle(textElement)

  expect(styles.fontSize).toBe('48px')
})
