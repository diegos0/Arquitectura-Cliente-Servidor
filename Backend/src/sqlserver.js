import { getConnection } from "./database/connectionSQLServer.js";

const getProducts = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query("SELECT * FROM Alumno");

        console.log(result.recordset); // mejor mostrar solo los datos
        console.log("Alumnos obtenidos correctamente");

    } catch (error) {
        console.log(error);
    }
}

getProducts();