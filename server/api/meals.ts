import Router, { Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  const baseUrl = `${req.protocol}://${req.get('host')}/assets`
  res.json([
    { name: 'Dish 1', imageUrl: `${baseUrl}/meal1.png` },
    { name: 'Dish 2', imageUrl: `${baseUrl}/meal2.png` },
    { name: 'Dish 3', imageUrl: `${baseUrl}/meal3.png` }
  ])
})

export default router
