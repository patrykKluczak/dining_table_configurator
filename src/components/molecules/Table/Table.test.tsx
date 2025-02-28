import { render, screen, fireEvent } from '@testing-library/react'
import { SVGProps } from 'react'
import { JSX } from 'react/jsx-runtime'
import Table from './Table'
import { SelectedModeType } from './Table.types'

jest.mock('src/components/bosons/Icons', () => ({
  AddIcon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg {...props} data-testid="mock-add-icon" />
  )
}))

const mockHandleSelectTableElement = jest.fn()

const mockTableElements = [
  {
    id: '2',
    x: 30,
    y: 40,
    type: 'meals' as SelectedModeType,
    element: null
  },
  {
    id: '3',
    x: 30,
    y: 40,
    type: 'meals' as SelectedModeType,
    element: 'imageUrl2'
  },
  {
    id: '1',
    x: 10,
    y: 20,
    type: 'plates' as SelectedModeType,
    element: 'imageUrl1'
  }
]

const mockSelectedTable = {
  imageUrl: 'table1.png',
  name: 'Dining Table',
  platePositions: [{ id: 'plate_1', x: 20, y: 30 }],
  mealPositions: [{ id: 'meal_1', x: 20, y: 30 }]
}

describe('molecules/Table', () => {
  test('molecules/Table - render table', () => {
    render(
      <Table
        selectedTable={mockSelectedTable}
        selectedMode="plates"
        tableElements={mockTableElements}
        handleSelectTableElement={mockHandleSelectTableElement}
      />
    )

    const selectedTableImage = screen.getByAltText('Dining Table')
    expect(selectedTableImage).toBeInTheDocument()
    expect(selectedTableImage).toHaveAttribute('src', 'table1.png')
  })

  test('molecules/Table - render plate on table', () => {
    render(
      <Table
        selectedTable={mockSelectedTable}
        selectedMode="plates"
        tableElements={mockTableElements}
        handleSelectTableElement={mockHandleSelectTableElement}
      />
    )

    const tableElementImage = screen.getByAltText('element-plates-1')
    expect(tableElementImage).toBeInTheDocument()
    expect(tableElementImage).toHaveAttribute('src', 'imageUrl1')
  })

  test('molecules/Table - render meal on table', () => {
    render(
      <Table
        selectedTable={mockSelectedTable}
        selectedMode="meals"
        tableElements={mockTableElements}
        handleSelectTableElement={mockHandleSelectTableElement}
      />
    )

    const tableElementImage = screen.getByAltText('element-meals-3')
    expect(tableElementImage).toBeInTheDocument()
    expect(tableElementImage).toHaveAttribute('src', 'imageUrl2')
  })

  test('molecules/Table - render add icon button', () => {
    render(
      <Table
        selectedTable={mockSelectedTable}
        selectedMode="meals"
        tableElements={mockTableElements}
        handleSelectTableElement={mockHandleSelectTableElement}
      />
    )

    const iconButton = screen.queryByTestId('handle-select-icon-meals-2')
    expect(iconButton).toBeInTheDocument()
  })

  test('molecules/Table - add button click', () => {
    render(
      <Table
        selectedTable={mockSelectedTable}
        selectedMode="meals"
        tableElements={mockTableElements}
        handleSelectTableElement={mockHandleSelectTableElement}
      />
    )

    const addButton = screen.queryByTestId('handle-select-icon-meals-2')
    expect(addButton).toBeInTheDocument()

    if (addButton) {
      fireEvent.click(addButton)
      // eslint-disable-next-line jest/no-conditional-expect
      expect(mockHandleSelectTableElement).toHaveBeenCalledWith('2', 'meals')
    }
  })
})
