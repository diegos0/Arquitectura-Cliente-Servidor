import { pool, poolConnect } from '../database/connectionSQLServer.js'

export const getPeriodos = async (req, res) => {
    await poolConnect
    const result = await pool.request().query('SELECT * FROM PeriodoEscolar')
    res.json(result.recordset)
}