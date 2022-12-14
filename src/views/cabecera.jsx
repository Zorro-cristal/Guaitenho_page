import { blue } from "@mui/material/colors";
import { useEffect } from "react";
import { useState } from "react";
import { render } from "react-dom";
import Menu_flotante from "./menu_flotante";
import Menu_superior from "./menu_superior";

export default function Cabecera() {
    const estilo= {
        backgroundColor: "blue",
        height: "200px",
        width: "100%",
        position: "relative"
    };
    console.log(window.pageYOffset);
    let scrollPos= window.pageYOffset;
    if (scrollPos > 100) {
        return (<Menu_flotante />);
    } else {
        return (<div style={estilo}>
            <h1>Portada foto</h1>
            <Menu_superior />
        </div>);
    }
}