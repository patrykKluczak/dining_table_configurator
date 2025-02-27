export type ItemType = {
  name: string
  imageUrl: string
}

export type SelectedModeType = 'plates' | 'meals'

export type AvailablePositionPlace = {
  id: string
  x: number
  y: number
}

export type TableType = {
  platePositions: AvailablePositionPlace[]
  mealPositions: AvailablePositionPlace[]
} & ItemType

export type MenuProps = {
  tablesData: TableType[]
  platesData: ItemType[]
  mealsData: ItemType[]
  selectedTable: ItemType
  selectedPlate: ItemType
  selectedMeal: ItemType
  selectedMode: SelectedModeType
  handleSelectTable: (table: TableType) => void
  handleSelectPlate: (plate: ItemType) => void
  handleSelectMeal: (meal: ItemType) => void
  handleSelectMode: (option: SelectedModeType) => void
  handleUndo: () => void
}
