import { pool, poolConnect } from '../database/connectionSQLServer.js'

export const getAsesores = async (req, res) => {
    try {
        await poolConnect
        const result = await pool.request().query(`
            SELECT a.*, e.nombre_empresa
            FROM AsesorExterno a
            JOIN Empresa e ON a.Empresa_id_empresa = e.id_empresa
        `)
        res.json(result.recordset)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const createAsesor = async (req, res) => {
    const { id_asesor_ext, Empresa_id_empresa, nombre, cargo, correo, telefono } = req.body

    try {
        await poolConnect
        await pool.request()
            .input('id_asesor_ext', id_asesor_ext)
            .input('Empresa_id_empresa', Empresa_id_empresa)
            .input('nombre', nombre)
            .input('cargo', cargo)
            .input('correo', correo)
            .input('telefono', telefono)
            .query(`
                INSERT INTO AsesorExterno
                VALUES (@id_asesor_ext, @Empresa_id_empresa, @nombre, @cargo, @correo, @telefono)
            `)

        res.json({ message: 'Asesor creado' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}