import { Container } from '@mui/material';
import { style } from '@mui/system';
import { useState } from 'react';
import { useEffect } from 'react';

import Fondo_body from '../layout/fondo_body';
import Cabecera from '../views/cabecera';
import Menu_flotante from '../views/menu_flotante';
import "../styless/principal.css";
import { temas } from '../styless/temas';

//https://cssgradient.io/

const Principal= () => {
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
        {
            (scrollPos > 40) ? (<Menu_flotante/>) : (<div></div>)
        }
        <Cabecera />
        <Fondo_body>
            <h1>Bienvenidos a nuestra tienda virtual</h1>
            <h4 className='descripcion_tienda'>En esta tienda encontraras los mejores precios del mercado</h4>
            <Container style={{
                width: "80%",
                height: 200
            }}>
                <h2>Servicios ofrecidos</h2>
            </Container>
            <Container style={{
                width: "80%",
                height: 200,
                backgroundColor: temas.palette.primary.main
            }}>
                <h2>Productos populares del mercado</h2>
            </Container>
            <Container style={{
                width: "80%",
                height: 200
            }}>
                <h2>Informacion de la empresa</h2>
            </Container>
        </Fondo_body>
    </>);
}

export default Principal;