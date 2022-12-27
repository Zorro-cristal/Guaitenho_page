import App from '../App';
import '../index.css';
import Fondo_body from '../layout/fondo_body';
import Menu_flotante from '../views/menu_flotante';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';

export default function Secundaria () {
    const [scrollPos, setScrollPos]= useState(0);

    const updateScroll= () => {
        setScrollPos(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        }
    }, [scrollPos]);

    return (<>
        <Menu_flotante/>
        <div style={{height:65}}></div>
        <Fondo_body>
            <h1>Pagina secundaria</h1>
            <App/>
            <h1>Texto</h1>
        </Fondo_body>
    </>);
}