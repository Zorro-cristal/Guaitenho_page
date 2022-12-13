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
        width: "100vw",
        position: "absolute",
        top: "0",
        left: "0"
    };
    var scrollDirection= useScrollDirecction();
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

function useScrollDirecction() {
    const [scrollDirection, setScrollDirection]= useState(null);

    useEffect(
        () => {
            let lastScrollY= window.pageYOffset;
            console.log(lastScrollY);
            const updateScrollDirection= () => {
                const scrollY= window.pageYOffset;
                const direction= scrollY > lastScrollY ? "down" : "up";
                if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                    setScrollDirection(direction);
                }
                lastScrollY= scrollY > 0 ? scrollY : 0;
            };
            window.addEventListener("scroll", updateScrollDirection);
            return () => {
                window.removeEventListener("scroll", updateScrollDirection);
            }
        }, [scrollDirection]
    );
    return scrollDirection;
}