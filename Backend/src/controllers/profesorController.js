import { pool, poolConnect } from '../database/connectionSQLServer.js'

export const getProfesores = async (req, res) => {
    await poolConnect
    const result = await pool.request().query('SELECT * FROM Profesor')
    res.json(result.recordset)
}