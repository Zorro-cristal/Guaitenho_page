import {Route, Routes, Navigate} from "react-router-dom";
import Principal from "../pages/principal";

const Rutas_principales= () => {
    return (<Routes>
        {/* <Route path="/*" element={<Navigate to='./pages/principal.jsx' />} /> */}
        <Route path="/*" element={<Principal />} />
    </Routes>);
}

export default Rutas_principales;