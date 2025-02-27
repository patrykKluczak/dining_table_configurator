export type AvailablePositionPlace = {
  id: string
  x: number
  y: number
}

export type ItemType = {
  name: string
  imageUrl: string
}

export type TableType = {
  platePositions: AvailablePositionPlace[]
  mealPositions: AvailablePositionPlace[]
} & ItemType

export type SelectedModeType = 'plates' | 'meals'

export type TableElementType = {
  id: string
  type: SelectedModeType
  x: number
  y: number
  element: string | null
}

export type HomeProps = {
  tablesData: TableType[]
  platesData: ItemType[]
  mealsData: ItemType[]
}

export type UseHomeProps = {
  selectedTable: TableType
  selectedPlate: ItemType
  selectedMeal: ItemType
  selectedMode: SelectedModeType
  tableElements: TableElementType[]
  handleSelectTable: (selectedTable: TableType) => void
  handleSelectPlate: (selectedPlate: ItemType) => void
  handleSelectMeal: (selectedMeal: ItemType) => void
  handleSelectMode: (option: SelectedModeType) => void
  handleSelectTableElement: (id: string, type: SelectedModeType) => void
  handleUndo: () => void
}
