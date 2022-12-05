import Creador_page from "../pages/creador";
import Inicio_page from "../pages/inicio";
import Nosotros_page from "../pages/nosotros";
// import {Route, Routes, Navigate} from "react-router-dom";

export const Rutas= () => {
    return (<Routes>
        <Route path="/" element={<Navigate to= {"/inicio"} />} />
        <Route path="inicio" element={<Inicio_page/>} />
        <Route path="creador" element={<Creador_page/>} />
        <Route path="nosotros" element={<Nosotros_page/>} />
    </Routes>);
}