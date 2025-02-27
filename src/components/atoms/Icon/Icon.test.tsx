import { render, screen } from '@testing-library/react'

import Icon from './Icon'
import { SVGProps } from 'react'
import { JSX } from 'react/jsx-runtime'

jest.mock('src/components/bosons', () => ({
  AddIcon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg {...props} />
  )
}))

test('atoms/Icon', () => {
  render(<Icon name="add" data-testid="test-icon-add" width={20} height={20} />)

  const AddIcon = screen.queryByTestId('test-icon-add')
  expect(AddIcon).toBeInTheDocument()

  render(
    <Icon name="cancel" data-testid="test-icon-cancel" width={20} height={20} />
  )
  const cancelIcon = screen.queryByTestId('test-icon-cancel')
  expect(cancelIcon).not.toBeInTheDocument()
})
