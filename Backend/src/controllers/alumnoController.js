import { getConnection } from "../database/connectionSQLServer.js";
import sql from "mssql";

export const getAlumnoById = async (req, res) => {
    try {
        const { num_control } = req.params;
        const pool = await getConnection();

        const result = await pool.request()
            .input("num_control", sql.Int, num_control)
            .query(`
                SELECT 
                    a.*,
                    pr.nombre_proyecto,
                    pr.fecha_inicio,
                    pr.fecha_fin,
                    pe.id_periodo,
                    e.nombre_empresa,
                    e.departamento,
                    p.nombre AS profesor_nombre,
                    ae.nombre AS asesor_nombre,
                    ae.cargo,
                    ae.correo AS asesor_correo,
                    ae.telefono
                FROM Alumno a
                LEFT JOIN ProyectoResidencia pr 
                    ON a.num_control = pr.Alumno_num_control
                LEFT JOIN PeriodoEscolar pe 
                    ON pr.PeriodoEscolar_id_periodo = pe.id_periodo
                LEFT JOIN Profesor p 
                    ON pr.Profesor_id_profesor = p.id_profesor
                LEFT JOIN AsesorExterno ae 
                    ON pr.AsesorExterno_id_asesor_ext = ae.id_asesor_ext
                LEFT JOIN Empresa e 
                    ON ae.Empresa_id_empresa = e.id_empresa
                WHERE a.num_control = @num_control
            `);

        if (result.recordset.length === 0) {
            return res.status(404).json({ message: "Alumno no encontrado" });
        }

        res.json(result.recordset[0]); // 👈 SOLO UN OBJETO

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};