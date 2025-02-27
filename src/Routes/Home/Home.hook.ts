import { useState } from 'react'
import {
  ItemType,
  SelectedModeType,
  UseHomeProps,
  TableType,
  TableElementType
} from './Home.types'

export const useHome = (
  tableData: TableType[],
  platesData: ItemType[],
  mealsData: ItemType[]
): UseHomeProps => {
  const [selectedTable, setSelectedTable] = useState<TableType>(tableData[0])
  const [selectedPlate, setSelectedPlate] = useState<ItemType>(platesData[0])
  const [selectedMeal, setSelectedMeal] = useState<ItemType>(mealsData[0])
  const [selectedMode, setSelectedMode] = useState<SelectedModeType>('plates')
  const [tableElements, setTableElements] = useState<TableElementType[]>(() => {
    const plateElements = selectedTable?.platePositions
      ? selectedTable.platePositions.map((position) => ({
          id: position.id,
          type: 'plates' as SelectedModeType,
          x: position.x,
          y: position.y,
          element: null
        }))
      : []

    const mealElements = selectedTable?.mealPositions
      ? selectedTable.mealPositions.map((position) => ({
          id: position.id,
          type: 'meals' as SelectedModeType,
          x: position.x,
          y: position.y,
          element: null
        }))
      : []

    return [...plateElements, ...mealElements]
  })
  const [, setHistory] = useState<TableElementType[][]>([tableElements])

  const handleSelectTable = (selectedTable: TableType) => {
    setSelectedTable(selectedTable)
  }

  const handleSelectPlate = (selectedPlate: ItemType) => {
    setSelectedPlate(selectedPlate)
  }

  const handleSelectMeal = (selectedMeal: ItemType) => {
    setSelectedMeal(selectedMeal)
  }

  const handleSelectMode = (selectedMode: SelectedModeType) => {
    setSelectedMode(selectedMode)
  }

  const handleSelectTableElement = (id: string, type: SelectedModeType) => {
    const element =
      type === 'plates' ? selectedPlate.imageUrl : selectedMeal.imageUrl
    const newState = tableElements.map((item) =>
      item.id === id && item.type === type ? { ...item, element } : item
    )

    setHistory((prevHistory) => [...prevHistory, newState])
    setTableElements(newState)
  }

  const handleUndo = () => {
    setHistory((prevHistory) => {
      if (prevHistory.length > 1) {
        const newHistory = [...prevHistory]
        newHistory.pop()
        setTableElements(newHistory[newHistory.length - 1])
        return newHistory
      }
      return prevHistory
    })
  }

  return {
    selectedTable,
    selectedPlate,
    selectedMeal,
    selectedMode,
    tableElements,
    handleSelectTable,
    handleSelectPlate,
    handleSelectMeal,
    handleSelectMode,
    handleSelectTableElement,
    handleUndo
  }
}
