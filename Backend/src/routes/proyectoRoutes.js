import { Router } from 'express'
import { getProyectos } from '../controllers/proyectoController.js'

const router = Router()

router.get('/', getProyectos)

export default router