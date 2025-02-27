import type { ReactNode } from 'react'
import type { ExecutionContext } from 'styled-components'
import type { FontSizesType, FontWeightType } from '../../bosons/Fonts'

export type TextTagVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p'
  | 'span'
  | 'label'

export type TextProps = {
  id?: string
  as?: TextTagVariants
  weight?: keyof FontWeightType
  size?: keyof FontSizesType
  children: ReactNode
  capital?: boolean
  uppercase?: boolean
}

export type StyledTextProps = {
  forwardAs?: TextTagVariants
  $weight?: keyof FontWeightType
  $size?: keyof FontSizesType
  $capital?: boolean
  $uppercase?: boolean
} & ExecutionContext
