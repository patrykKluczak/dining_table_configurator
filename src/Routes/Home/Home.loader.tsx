import { useDataContext } from 'src/context'
import { LoadingScreen } from 'src/components/molecules'
import Home from './Home'
import { JSX } from 'react'

const HomeLoader = (): JSX.Element => {
  const { tablesData, platesData, mealsData, isLoading } = useDataContext()

  if (isLoading) return <LoadingScreen />

  return (
    <Home
      platesData={platesData}
      mealsData={mealsData}
      tablesData={tablesData}
    />
  )
}

export default HomeLoader
