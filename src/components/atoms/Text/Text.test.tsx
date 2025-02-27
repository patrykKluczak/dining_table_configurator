import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'src/components/quarks'
import Text from './Text'

test('atoms/Text', () => {
  render(
    <ThemeProvider theme={theme}>
      <Text>Some text</Text>
    </ThemeProvider>
  )
  const element = screen.getByText('Some text')
  expect(element).toBeInTheDocument()
})
