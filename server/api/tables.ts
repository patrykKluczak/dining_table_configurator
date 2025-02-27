import Router, { Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  const baseUrl = `${req.protocol}://${req.get('host')}/assets`
  res.json([
    {
      name: 'basicTable',
      imageUrl: `${baseUrl}/table1.png`,
      platePositions: [
        { id: 'plate_1', x: 40, y: 50 },
        { id: 'plate_2', x: 40, y: 324 },
        { id: 'plate_3', x: 40, y: 598 },
        { id: 'plate_4', x: 40, y: 872 },
        { id: 'plate_5', x: 40, y: 1146 },
        { id: 'plate_6', x: 40, y: 1420 },
        { id: 'plate_7', x: 610, y: 50 },
        { id: 'plate_8', x: 610, y: 324 },
        { id: 'plate_9', x: 610, y: 598 },
        { id: 'plate_10', x: 610, y: 872 },
        { id: 'plate_11', x: 610, y: 1146 },
        { id: 'plate_12', x: 610, y: 1420 }
      ],
      mealPositions: [
        { id: 'meal_1', x: 297, y: 55 },
        { id: 'meal_2', x: 297, y: 385 },
        { id: 'meal_3', x: 297, y: 715 },
        { id: 'meal_4', x: 297, y: 1050 },
        { id: 'meal_5', x: 297, y: 1365 }
      ]
    }
  ])
})

export default router
