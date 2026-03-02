import alumnoRoutes from './routes/alumnoRoutes.js'
import empresaRoutes from './routes/empresaRoutes.js'
import asesorRoutes from './routes/asesorRoutes.js'
import profesorRoutes from './routes/profesorRoutes.js'
import periodoRoutes from './routes/periodoRoutes.js'
import proyectoRoutes from './routes/proyectoRoutes.js'
import * as express from "express";

app.use('/api/alumnos', alumnoRoutes)
app.use('/api/empresas', empresaRoutes)
app.use('/api/asesores', asesorRoutes)
app.use('/api/profesores', profesorRoutes)
app.use('/api/periodos', periodoRoutes)
app.use('/api/proyectos', proyectoRoutes)
app.use(express.json());


