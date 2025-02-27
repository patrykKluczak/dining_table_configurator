import styled, { css } from 'styled-components'
import type { StyledTextProps } from './Text.types'

const styleCapital = (props: StyledTextProps) =>
  props.$capital &&
  css`
    text-transform: capitalize;
  `
const styleUppercase = (props: StyledTextProps) =>
  props.$uppercase &&
  css`
    text-transform: uppercase;
  `

const styleWeight = (props: StyledTextProps) =>
  props.$weight &&
  css`
    font-weight: ${props.theme.fontWeights[props.$weight]};
  `

const styleSize = (props: StyledTextProps) =>
  props.$size &&
  css`
    font-size: ${props.theme.fontSizes[props.$size]};
    line-height: ${props.theme.lineHeights[props.$size]};
  `

export const StyledText = styled.p<StyledTextProps>`
  hyphens: auto;
  color: ${({ theme }) => theme.colors.black12};
  ${styleCapital};
  ${styleWeight};
  ${styleSize}
  ${styleUppercase}
`
