import { JSX } from 'react'
import { StyledText } from './Text.styles'
import type { TextProps } from './Text.types'

const Text = ({
  weight = 'regular',
  size = 'textBase',
  as = 'p',
  id,
  capital,
  uppercase,
  children,
  ...props
}: TextProps): JSX.Element => (
  <StyledText
    id={id}
    as={as}
    $weight={weight}
    $size={size}
    $capital={capital}
    $uppercase={uppercase}
    {...props}
  >
    {children}
  </StyledText>
)

export default Text
