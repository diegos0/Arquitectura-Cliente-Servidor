import { Router } from 'express'
import { getProfesores } from '../controllers/profesorController.js'

const router = Router()

router.get('/', getProfesores)

export default router