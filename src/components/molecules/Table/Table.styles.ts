import styled from 'styled-components'
import { SelectedModeType } from './Table.types'

export const Container = styled.div`
  position: relative;
  height: 100dvh;
  overflow: auto;
  margin: auto;
`

export const Wrapper = styled.div<{
  x: number
  y: number
  type: SelectedModeType
}>`
  position: absolute;
  width: ${({ type }) => (type === 'plates' ? '200px' : '250px')};
  height: ${({ type }) => (type === 'plates' ? '200px' : '250px')};
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
