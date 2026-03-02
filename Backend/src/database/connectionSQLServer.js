import sql from 'mssql';

const config = {
    server: 'DESKTOP-8A2N2ML',
    port: 1433,
    database: 'ProyectoAD',
    user: 'sa',
    password: 'Sa12345!',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

let pool;

export async function getConnection() {
    try {
        if (!pool) {
            pool = await sql.connect(config);
            console.log("✅ Conectado a SQL Server");
        }
        return pool;
    } catch (error) {
        console.error("❌ Error de conexión:", error);
        throw error;
    }
}