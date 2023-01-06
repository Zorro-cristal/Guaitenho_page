import {Route, Routes, Navigate} from "react-router-dom";
import Nosotros from "../pages/nosotros";
import Principal from "../pages/principal";
import Secundaria from "../pages/secundaria";

const Rutas_principales= () => {
    return (<Routes>
        {/* <Route path="/*" element={<Navigate to='./pages/principal.jsx' />} /> */}
        <Route path="/*" element={<Principal />} />
        <Route path="/secundaria/*" element={<Secundaria />} />
        <Route path="/nosotros/*" element={<Nosotros />} />
    </Routes>);
}

export default Rutas_principales;