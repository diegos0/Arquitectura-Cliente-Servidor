import sql from 'mssql';

const config = {
    server: 'localhost',
    database: 'ProyectoAD',
    user: 'sa',
    password: '12345',
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
