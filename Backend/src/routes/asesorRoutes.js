import { Router } from 'express'
import { getAsesores, createAsesor } from '../controllers/asesorController.js'

const router = Router()

router.get('/', getAsesores)
router.post('/', createAsesor)

export default router