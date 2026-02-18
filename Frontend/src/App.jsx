import { Routes, Route } from "react-router-dom";
import Login from "./sections/login";
import Principal from "./sections/principal";
import Alumnos from "./sections/Alumnos.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Principal />} />
            <Route path="/alumnos" element={<Alumnos />} />

        </Routes>
    );
}

export default App;
