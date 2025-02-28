import styled, { keyframes } from 'styled-components'
import { Text } from 'src/components/atoms'

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.grey9};
`

export const LoadingText = styled(Text)`
  animation: ${pulseAnimation} 2s ease-in-out infinite;
  font-size: ${({ theme }) => theme.fontSizes.text4Xl};
`
