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
    try {
      const response = await fetch('http://localhost:3001/tables')

      if (!response.ok) {
        throw new Error(`Failed to fetch tables data: ${response.statusText}`)
      }

      const data = await response.json()
      setTablesData(data)
    } catch (error) {
      console.error('Error fetching tables data:', error)
    }
  }

  const fetchPlatesData = async () => {
    try {
      const response = await fetch('http://localhost:3001/plates')

      if (!response.ok) {
        throw new Error(`Failed to fetch plates data: ${response.statusText}`)
      }

      const data = await response.json()
      setPlatesData(data)
    } catch (error) {
      console.error('Error fetching plates data:', error)
    }
  }

  const fetchMealsData = async () => {
    try {
      const response = await fetch('http://localhost:3001/meals')

      if (!response.ok) {
        throw new Error(`Failed to fetch plates data: ${response.statusText}`)
      }

      const data = await response.json()
      setMealsData(data)
    } catch (error) {
      console.error('Error fetching meals data:', error)
    }
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
