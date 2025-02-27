import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'src/components/quarks'
import Menu from './Menu'
import { SelectedModeType } from './Menu.types'

const mockProps = {
  tablesData: [
    {
      imageUrl: 'table1.jpg',
      name: 'Table 1',
      platePositions: [{ id: 'plate_1', x: 20, y: 30 }],
      mealPositions: [{ id: 'meal_1', x: 20, y: 30 }]
    }
  ],
  platesData: [{ imageUrl: 'plate1.jpg', name: 'Plate 1' }],
  mealsData: [{ imageUrl: 'meal1.jpg', name: 'Meal 1' }],
  selectedTable: { imageUrl: 'table1.jpg', name: 'Table 1' },
  selectedPlate: { imageUrl: 'plate1.jpg', name: 'Plate 1' },
  selectedMeal: { imageUrl: 'meal1.jpg', name: 'Meal 1' },
  selectedMode: 'plates' as SelectedModeType,
  handleSelectTable: jest.fn(),
  handleSelectPlate: jest.fn(),
  handleSelectMeal: jest.fn(),
  handleSelectMode: jest.fn(),
  handleUndo: jest.fn()
}

test('molecules/Menu - render', () => {
  render(
    <ThemeProvider theme={theme}>
      <Menu {...mockProps} />
    </ThemeProvider>
  )

  expect(screen.getByText('Navigation')).toBeInTheDocument()
  expect(screen.getByText('Dinnerware selection')).toBeInTheDocument()
  expect(screen.getByText('Meal selection')).toBeInTheDocument()
  expect(screen.getByText('Table selection')).toBeInTheDocument()
  expect(screen.getByText('Swich mode')).toBeInTheDocument()
})

test('molecules/Menu - interaction', () => {
  const mockHandleSelectPlate = jest.fn()
  const mockHandleSelectMeal = jest.fn()
  const mockHandleSelectTable = jest.fn()
  const mockHandleSelectMode = jest.fn()
  const mockHandleUndo = jest.fn()

  render(
    <ThemeProvider theme={theme}>
      <Menu
        {...mockProps}
        handleSelectPlate={mockHandleSelectPlate}
        handleSelectMeal={mockHandleSelectMeal}
        handleSelectTable={mockHandleSelectTable}
        handleSelectMode={mockHandleSelectMode}
        handleUndo={mockHandleUndo}
      />
    </ThemeProvider>
  )

  const plateItem = screen.getAllByTestId('handle-select-plate')[0]
  plateItem.click()
  expect(mockHandleSelectPlate).toHaveBeenCalledWith(mockProps.platesData[0])

  const mealItem = screen.getAllByTestId('handle-select-meal')[0]
  mealItem.click()
  expect(mockHandleSelectMeal).toHaveBeenCalledWith(mockProps.mealsData[0])

  const tableItem = screen.getAllByTestId('handle-select-table')[0]
  tableItem.click()
  expect(mockHandleSelectTable).toHaveBeenCalledWith(mockProps.tablesData[0])

  const platesModeButton = screen.getByTestId('handle-select-switch-plates')
  platesModeButton.click()
  expect(mockHandleSelectMode).toHaveBeenCalledWith('plates')

  const mealsModeButton = screen.getByTestId('handle-select-switch-meals')
  mealsModeButton.click()
  expect(mockHandleSelectMode).toHaveBeenCalledWith('meals')

  const undoButton = screen.getByTestId('handle-click-undo-button')
  undoButton.click()
  expect(mockHandleUndo).toHaveBeenCalled()
})
