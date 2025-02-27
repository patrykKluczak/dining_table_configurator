import express, { Router } from 'express'
import path from 'path'

const router = Router()

router.use('/', express.static(path.join(__dirname, '../assets')))

export default router
