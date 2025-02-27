import { JSX } from 'react'
import { Image, Text } from 'src/components/atoms'
import { MenuProps } from './Menu.types'
import {
  MenuContainer,
  MenuItem,
  Item,
  SubMenu,
  BackButton,
  MenuItemHeader,
  SelectedItem,
  Title
} from './Menu.styles'

const Menu = ({
  tablesData,
  platesData,
  mealsData,
  selectedTable,
  selectedPlate,
  selectedMeal,
  selectedMode,
  handleSelectTable,
  handleSelectPlate,
  handleSelectMeal,
  handleSelectMode,
  handleUndo
}: MenuProps): JSX.Element => {
  const toggleItem = selectedMode === 'plates' ? platesData[0] : mealsData[0]

  return (
    <MenuContainer>
      <Title size="textXl" as="h2">
        Navigation
      </Title>
      <MenuItem>
        <MenuItemHeader>
          <Text>Dinnerware selection</Text>
          <SelectedItem>
            <Image
              src={selectedPlate?.imageUrl}
              alt={selectedPlate?.name}
              data-testid="selected-plate"
            />
          </SelectedItem>
        </MenuItemHeader>
        <SubMenu>
          {platesData.map((plate, index) => (
            <Item
              key={index}
              onClick={() => handleSelectPlate(plate)}
              data-testid="handle-select-plate"
            >
              <Image src={plate?.imageUrl} alt={plate?.name} />
            </Item>
          ))}
        </SubMenu>
      </MenuItem>
      <MenuItem>
        <MenuItemHeader>
          <Text>Meal selection</Text>
          <SelectedItem>
            <Image
              src={selectedMeal?.imageUrl}
              alt={selectedMeal?.name}
              data-testid="selected-meal"
            />
          </SelectedItem>
        </MenuItemHeader>
        <SubMenu>
          {mealsData.map((meal, index) => (
            <Item
              key={index}
              onClick={() => handleSelectMeal(meal)}
              data-testid="handle-select-meal"
            >
              <Image src={meal?.imageUrl} alt={meal?.name} />
            </Item>
          ))}
        </SubMenu>
      </MenuItem>
      <MenuItem>
        <MenuItemHeader>
          <Text>Table selection</Text>
          <SelectedItem>
            <Image
              src={selectedTable?.imageUrl}
              alt={selectedTable?.name}
              data-testid="selected-table"
            />
          </SelectedItem>
        </MenuItemHeader>
        <SubMenu>
          {tablesData.map((table, index) => (
            <Item
              key={index}
              onClick={() => handleSelectTable(table)}
              data-testid="handle-select-table"
            >
              <Image src={table?.imageUrl} alt={table?.name} />
            </Item>
          ))}
        </SubMenu>
      </MenuItem>
      <MenuItem>
        <MenuItemHeader>
          <Text>Swich mode</Text>
          <SelectedItem>
            <Image
              src={toggleItem?.imageUrl}
              alt={toggleItem?.name}
              data-testid="selected-switch-mode"
            />
          </SelectedItem>
        </MenuItemHeader>
        <SubMenu>
          <Item
            onClick={() => handleSelectMode('plates')}
            data-testid="handle-select-switch-plates"
          >
            <Image src={platesData[0]?.imageUrl} alt={platesData[0]?.name} />
          </Item>
          <Item
            onClick={() => handleSelectMode('meals')}
            data-testid="handle-select-switch-meals"
          >
            <Image src={mealsData[0]?.imageUrl} alt={mealsData[0]?.name} />
          </Item>
        </SubMenu>
      </MenuItem>
      <MenuItem>
        <MenuItemHeader>
          <SelectedItem>
            <BackButton
              onClick={handleUndo}
              data-testid="handle-click-undo-button"
            >
              Undo
            </BackButton>
          </SelectedItem>
        </MenuItemHeader>
      </MenuItem>
    </MenuContainer>
  )
}

export default Menu
