import { Routes, Route } from "react-router-dom";
import Login from "./sections/login";
import Principal from "./sections/principal";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/page" element={<Principal />} />

        </Routes>
    );
}

export default App;
