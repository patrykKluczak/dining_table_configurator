import { JSX } from 'react'
import { Container, LoadingText } from './LoadingScreen.styles'

const LoadingScreen = (): JSX.Element => (
  <Container>
    <LoadingText capital weight="semiBold" size="text4Xl">
      dining table configurator
    </LoadingText>
  </Container>
)

export default LoadingScreen
