import Router, { Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  const baseUrl = `${req.protocol}://${req.get('host')}/assets`
  res.json([
    {
      name: 'Plate1',
      imageUrl: `${baseUrl}/plate1.png`
    },
    {
      name: 'Plate2',
      imageUrl: `${baseUrl}/plate2.png`
    },
    {
      name: 'Plate3',
      imageUrl: `${baseUrl}/plate3.png`
    }
  ])
})

export default router
