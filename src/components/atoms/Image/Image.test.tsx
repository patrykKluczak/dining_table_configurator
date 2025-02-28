import { render, screen } from '@testing-library/react'
import Image from './Image'

test('atoms/Image', () => {
  render(<Image src={'/testImage.jpg'} alt="test" data-testid="test-image" />)

  const componentId = screen.getByTestId('test-image')
  expect(componentId).toBeInTheDocument()

  const img = screen.getByRole('img')
  expect(img).toHaveAttribute('src', '/testImage.jpg')
})
