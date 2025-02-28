import { render, screen, fireEvent } from '@testing-library/react'
import { SVGProps } from 'react'
import { JSX } from 'react/jsx-runtime'
import { ThemeProvider } from 'styled-components'
import Home from './Home'
import { theme } from 'src/components/quarks'

jest.mock('src/components/bosons/Icons', () => ({
  AddIcon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg {...props} data-testid="mock-add-icon" />
  )
}))

const mockTableData = [
  {
    id: 'table_1',
    name: 'basicTable',
    imageUrl: 'table1.jpg',
    platePositions: [
      { id: 'plate_1', x: 40, y: 50 },
      { id: 'plate_2', x: 40, y: 324 }
    ],
    mealPositions: [
      { id: 'meal_1', x: 297, y: 55 },
      { id: 'meal_2', x: 297, y: 385 }
    ]
  }
]

const mockPlatesData = [
  { id: 'plate_1', name: 'Plate 1', imageUrl: 'plate1.jpg' },
  { id: 'plate_2', name: 'Plate 2', imageUrl: 'plate2.jpg' }
]

const mockMealsData = [
  { id: 'meal_1', name: 'Meal 1', imageUrl: 'meal1.jpg' },
  { id: 'meal_2', name: 'Meal 2', imageUrl: 'meal2.jpg' }
]

describe('routes/Home - render', () => {
  test('should render selected table and mode', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home
          tablesData={mockTableData}
          platesData={mockPlatesData}
          mealsData={mockMealsData}
        />
      </ThemeProvider>
    )

    expect(screen.getByTestId('selected-table-basicTable')).toBeInTheDocument()
    expect(screen.getByTestId('selected-switch-mode')).toBeInTheDocument()
  })

  test('routes/Home - change plate', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home
          tablesData={mockTableData}
          platesData={mockPlatesData}
          mealsData={mockMealsData}
        />
      </ThemeProvider>
    )

    const plateButton = screen.getAllByTestId('handle-select-plate')[1]

    fireEvent.click(plateButton)

    const selectedPlateImage = screen.getByTestId('selected-plate')
    expect(selectedPlateImage).toHaveAttribute('alt', 'Plate 2')
  })

  test('routes/Home - change meal', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home
          tablesData={mockTableData}
          platesData={mockPlatesData}
          mealsData={mockMealsData}
        />
      </ThemeProvider>
    )

    const mealButton = screen.getAllByTestId('handle-select-meal')[1]

    fireEvent.click(mealButton)

    const selectedPlateImage = screen.getByTestId('selected-meal')
    expect(selectedPlateImage).toHaveAttribute('alt', 'Meal 2')
  })

  test('routes/Home - change switch', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home
          tablesData={mockTableData}
          platesData={mockPlatesData}
          mealsData={mockMealsData}
        />
      </ThemeProvider>
    )

    const switchToMealsButton = screen.getByTestId('handle-select-switch-meals')
    const switchToPlatesButton = screen.getByTestId(
      'handle-select-switch-plates'
    )

    fireEvent.click(switchToMealsButton)
    const selectedPlateImage = screen.getByTestId('selected-switch-mode')
    expect(selectedPlateImage).toHaveAttribute('alt', 'Meal 1')

    fireEvent.click(switchToPlatesButton)
    const selectedMealImage = screen.getByTestId('selected-switch-mode')
    expect(selectedMealImage).toHaveAttribute('alt', 'Plate 1')
  })

  test('routes/Home - render table elements', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home
          tablesData={mockTableData}
          platesData={mockPlatesData}
          mealsData={mockMealsData}
        />
      </ThemeProvider>
    )

    // Add plate
    const addPlateButton = screen.getByTestId(
      'handle-select-icon-plates-plate_1'
    )
    fireEvent.click(addPlateButton)
    const selectedPlateImages = screen.getAllByTestId(
      'handle-select-table-element'
    )

    expect(
      selectedPlateImages.some(
        (image) => image.getAttribute('alt') === 'element-plates-plate_1'
      )
    ).toBe(true)

    // Switch to meals
    const switchToMealsButton = screen.getByTestId('handle-select-switch-meals')
    fireEvent.click(switchToMealsButton)

    // Add meal
    const addMealButton = screen.getByTestId('handle-select-icon-meals-meal_1')
    fireEvent.click(addMealButton)
    const selectedMealsImages = screen.getAllByTestId(
      'handle-select-table-element'
    )
    expect(
      selectedMealsImages.some(
        (image) => image.getAttribute('alt') === 'element-meals-meal_1'
      )
    ).toBe(true)

    // Remove last element for our test will be a meal
    const undoButton = screen.getByTestId('handle-click-undo-button')
    fireEvent.click(undoButton)

    const elemenstOnTable = screen.getAllByTestId('handle-select-table-element')
    expect(
      elemenstOnTable.some(
        (image) => image.getAttribute('alt') === 'element-meals-meal_1'
      )
    ).toBe(false)
  })
})
