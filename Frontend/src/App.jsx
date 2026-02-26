import { Routes, Route } from "react-router-dom";
import Login from "./sections/login";
import Principal from "./sections/principal";
import Alumnos from "./sections/Alumnos.jsx";
import Proyectos from "./sections/Proyectos.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Principal />} />
            <Route path="/alumnos" element={<Alumnos />} />
            <Route path="/proyectos" element={<Proyectos />} />


        </Routes>
    );
}

export default App;
