import express from "express";
import cors from "cors";
import alumnoRoutes from "./routes/alumnoRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/alumnos", alumnoRoutes);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});