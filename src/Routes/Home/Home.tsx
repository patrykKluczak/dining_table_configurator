import { useHome } from './Home.hook'
import { Menu, Table } from 'src/components/molecules'
import { HomeProps } from './Home.types'
import { Container } from './Home.styles'

const Home = ({ tablesData, platesData, mealsData }: HomeProps) => {
  const {
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
  } = useHome(tablesData, platesData, mealsData)

  return (
    <Container>
      <Menu
        tablesData={tablesData}
        platesData={platesData}
        mealsData={mealsData}
        selectedTable={selectedTable}
        selectedPlate={selectedPlate}
        selectedMeal={selectedMeal}
        selectedMode={selectedMode}
        handleSelectTable={handleSelectTable}
        handleSelectPlate={handleSelectPlate}
        handleSelectMeal={handleSelectMeal}
        handleSelectMode={handleSelectMode}
        handleUndo={handleUndo}
      />
      <Table
        selectedTable={selectedTable}
        selectedMode={selectedMode}
        tableElements={tableElements}
        handleSelectTableElement={handleSelectTableElement}
      />
    </Container>
  )
}

export default Home
