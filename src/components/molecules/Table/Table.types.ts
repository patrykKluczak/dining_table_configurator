export type AvailablePositionPlace = {
  id: string
  x: number
  y: number
}

export type ItemType = {
  name: string
  imageUrl: string
  platePositions: AvailablePositionPlace[]
  mealPositions: AvailablePositionPlace[]
}

export type SelectedModeType = 'plates' | 'meals'

export type TableElementType = {
  id: string
  type: SelectedModeType
  x: number
  y: number
  element: string | null
}

export type TableProps = {
  selectedTable: ItemType
  selectedMode: SelectedModeType
  tableElements: TableElementType[]
  handleSelectTableElement: (id: string, type: SelectedModeType) => void
}
