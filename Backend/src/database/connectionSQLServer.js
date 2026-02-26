import sql from 'mssql';

const config = {
    server: 'DESKTOP-8A2N2ML',
    database: 'master',
    user: 'root',
    password: 'roo1',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

export async function getConnection() {
    try {
        const pool = await sql.connect(config);
        console.log("Conectado a SQL Server");
        return pool;
    } catch (error) {
        console.error("Error de conexión:", error);
    }
}