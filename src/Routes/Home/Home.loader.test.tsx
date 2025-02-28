import { render, screen, waitFor } from '@testing-library/react'
import { DataProvider } from 'src/context' // Ścieżka do Twojego kontekstu
import HomeLoader from './Home.loader' // Komponent, który ładuje dane
import { ThemeProvider } from 'styled-components'
import { theme } from 'src/components/quarks'
import { SVGProps } from 'react'
import { JSX } from 'react/jsx-runtime'

jest.mock('src/components/bosons/Icons', () => ({
  AddIcon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg {...props} data-testid="mock-add-icon" />
  )
}))

test('HomeLoader - renderuje Home po załadowaniu danych', async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify([
      {
        imageUrl: 'table1.jpg',
        name: 'Table 1',
        platePositions: [{ id: 'plate_1', x: 20, y: 30 }],
        mealPositions: [{ id: 'meal_1', x: 20, y: 30 }]
      }
    ])
  )
  fetchMock.mockResponseOnce(
    JSON.stringify([{ imageUrl: 'plate1.jpg', name: 'Plate 1' }])
  )
  fetchMock.mockResponseOnce(
    JSON.stringify([{ imageUrl: 'meal1.jpg', name: 'Meal 1' }])
  )

  render(
    <ThemeProvider theme={theme}>
      <DataProvider>
        <HomeLoader />
      </DataProvider>
    </ThemeProvider>
  )

  expect(screen.getByText(/dining table configurator/i)).toBeInTheDocument()

  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(3))

  expect(
    screen.queryByText(/dining table configurator/i)
  ).not.toBeInTheDocument()
})
