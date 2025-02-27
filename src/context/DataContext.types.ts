import type { ReactNode } from 'react'

export type AvailablePositionPlace = {
  id: string
  x: number
  y: number
}

export type ItemType = {
  name: string
  imageUrl: string
  platePositions?: AvailablePositionPlace[]
  mealPositions?: AvailablePositionPlace[]
}

export type TableType = {
  platePositions: AvailablePositionPlace[]
  mealPositions: AvailablePositionPlace[]
} & ItemType

export type DataContextProps = {
  tablesData: TableType[]
  platesData: ItemType[]
  mealsData: ItemType[]
  isLoading: boolean
  fetchData: () => void
}

export type DataProviderProps = {
  children: ReactNode
}
