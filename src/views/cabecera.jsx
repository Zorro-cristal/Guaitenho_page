import { Button } from "@mui/material";
import Menu_superior from "./menu_superior";

export default function Cabecera() {
    const estilo= {
        backgroundColor: "blue",
        height: "200px",
        width: "100%"
    };
    return (<div style={estilo}>
        <Menu_superior />
        
        <h2>Sobre Nosotros</h2>
        <h4>Somos una empresa que realiza ventas online por Villarrica y ofrece sus servicios a nivel pais</h4>
        <Button variant="outlinde">Ver más</Button>
    </div>);
}