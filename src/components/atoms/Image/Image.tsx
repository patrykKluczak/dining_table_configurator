import { JSX } from 'react'
import { ImageProps } from './Image.types'

const Image = ({
  src,
  alt,
  width,
  height,
  ...props
}: ImageProps): JSX.Element => (
  <img src={src} width={width} height={height} alt={alt} {...props} />
)

export default Image
