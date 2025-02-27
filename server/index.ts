import express from 'express'
import cors from 'cors'

import tableApi from './api/tables'
import mealsApi from './api/meals'
import platesApi from './api/plates'
import staticFileApi from './api/staticFileApi'

const app = express()
const port = 3001

app.use(
  cors({
    origin: 'http://localhost:3000' // Pozwól na żądania tylko z tego portu
  })
)
app.use(express.json())

// Endpointy
app.use('/tables', tableApi)
app.use('/meals', mealsApi)
app.use('/plates', platesApi)
app.use('/assets', staticFileApi)

app.listen(port, () => {
  console.log(`✅ Serwer works on http://localhost:${port}`)
})
