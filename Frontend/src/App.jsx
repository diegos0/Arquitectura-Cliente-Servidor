import { Routes, Route } from "react-router-dom";
import Login from "./sections/login";
import Principal from "./sections/principal";
import Alumnos from "./sections/Alumnos.jsx";
import Proyectos from "./sections/Proyectos.jsx";
import Docentes from "./sections/Docentes.jsx";
import Empresas from "./sections/Empresas.jsx";
import Reportes from "./sections/Reportes.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Principal />} />
            <Route path="/alumnos" element={<Alumnos />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/docentes" element={<Docentes />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/reportes" element={<Reportes />} />



        </Routes>
    );
}

export default App;
