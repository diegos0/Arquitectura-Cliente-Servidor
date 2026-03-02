import { Router } from 'express'
import { getPeriodos } from '../controllers/periodoController.js'

const router = Router()

router.get('/', getPeriodos)

export default router