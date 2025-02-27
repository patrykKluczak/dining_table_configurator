import { createContext, useState, useEffect, useContext } from 'react'
import {
  DataContextProps,
  DataProviderProps,
  ItemType,
  TableType
} from './DataContext.types'
import { delay } from 'src/components/quarks'

const DataContext = createContext<DataContextProps | undefined>(undefined)

export const DataProvider = ({ children }: DataProviderProps) => {
  const [tablesData, setTablesData] = useState<TableType[]>([])
  const [platesData, setPlatesData] = useState<ItemType[]>([])
  const [mealsData, setMealsData] = useState<ItemType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchTablesData = async () => {
    const response = await fetch('http://localhost:3001/tables')
    const data = await response.json()
    setTablesData(data)
  }

  const fetchPlatesData = async () => {
    const response = await fetch('http://localhost:3001/plates')
    const data = await response.json()
    setPlatesData(data)
  }

  const fetchMealsData = async () => {
    const response = await fetch('http://localhost:3001/meals')
    const data = await response.json()
    setMealsData(data)
  }

  const fetchData = async () => {
    setIsLoading(true)
    await delay(1000)
    await Promise.all([fetchTablesData(), fetchPlatesData(), fetchMealsData()])
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DataContext.Provider
      value={{ tablesData, platesData, mealsData, isLoading, fetchData }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = (): DataContextProps => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}
