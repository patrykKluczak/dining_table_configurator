import styled from 'styled-components'
import { Text } from 'src/components/atoms'

export const MenuContainer = styled.div`
  height: 100dvh;
  min-width: 228px;
  background-color: ${({ theme }) => theme.colors.grey10};
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MenuItem = styled.div`
  width: 100%;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  position: relative;
  z-index: 2;
`

export const MenuItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 128px;
  transition: background-color 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.grey10};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey12};
  }
`

export const Title = styled(Text)`
  margin-bottom: 24px;
`

export const SelectedItem = styled.div`
  img {
    width: 88px;
    height: 88px;
  }
`

export const Item = styled.button`
  background-color: ${({ theme }) => theme.colors.transparent1};
  border: none;
  width: 120px;
  transition: transform 0.3s;
  transform: scale(1);

  &:hover {
    cursor: pointer;
    img: {
      transform: scale(1.2);
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.grey9};
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: none;
  }

  img {
    width: 88px;
    height: 88px;
  }
`

export const SubMenu = styled.div`
  display: flex;
  position: absolute;
  left: -100%;
  height: 128px;
  top: 0;
  transition: left 0.3s;
  background-color: ${({ theme }) => theme.colors.grey12};
  padding: 16px;
  border-radius: 0px 3px 3px 0px;
  z-index: -1;
  font-size: 16px;

  ${MenuItem}:hover & {
    left: 100%;
    animation: showZIndex 0s linear 0.2s forwards;
  }

  @keyframes showZIndex {
    to {
      z-index: 10;
    }
  }
`

export const BackButton = styled.button`
  margin-top: auto;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.transparent1};
  color: ${({ theme }) => theme.colors.black12};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.textBase};
`
