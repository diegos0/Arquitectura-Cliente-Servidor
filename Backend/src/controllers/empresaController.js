import { pool, poolConnect } from '../database/connectionSQLServer.js'

export const getEmpresas = async (req, res) => {
    try {
        await poolConnect
        const result = await pool.request().query('SELECT * FROM Empresa')
        res.json(result.recordset)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const createEmpresa = async (req, res) => {
    const { id_empresa, nombre_empresa, departamento } = req.body

    try {
        await poolConnect
        await pool.request()
            .input('id_empresa', id_empresa)
            .input('nombre_empresa', nombre_empresa)
            .input('departamento', departamento)
            .query('INSERT INTO Empresa VALUES (@id_empresa, @nombre_empresa, @departamento)')

        res.json({ message: 'Empresa creada' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}