import { pool, poolConnect } from '../database/connectionSQLServer.js'

export const getProyectos = async (req, res) => {
    try {
        await poolConnect
        const result = await pool.request().query(`
            SELECT 
                p.id_proyecto,
                p.nombre_proyecto,
                p.fecha_inicio,
                p.fecha_fin,
                a.nombre AS alumno,
                pr.nombre AS profesor,
                ae.nombre AS asesor,
                e.nombre_empresa,
                pe.id_periodo
            FROM ProyectoResidencia p
            JOIN Alumno a ON p.Alumno_num_control = a.num_control
            JOIN Profesor pr ON p.Profesor_id_profesor = pr.id_profesor
            JOIN AsesorExterno ae ON p.AsesorExterno_id_asesor_ext = ae.id_asesor_ext
            JOIN Empresa e ON ae.Empresa_id_empresa = e.id_empresa
            JOIN PeriodoEscolar pe ON p.PeriodoEscolar_id_periodo = pe.id_periodo
        `)

        res.json(result.recordset)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}