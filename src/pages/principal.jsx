import { Container, Grid, Typography } from '@mui/material';
import { style } from '@mui/system';
import { useState } from 'react';
import { useEffect } from 'react';

import Fondo_body from '../layout/fondo_body';
import Cabecera from '../views/cabecera';
import Menu_flotante from '../views/menu_flotante';
import "../styless/principal.css";
import { temas } from '../styless/temas';
import Redes_sociales from '../views/redes_sociales';

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
            <Typography variant='encabezado'>
                <h1>Bienvenidos a nuestra tienda virtual</h1>
                <h4 className='descripcion_tienda'>En esta tienda encontraras los mejores precios del mercado</h4>
            </Typography>
            <Container style={{
                width: "100%",
                height: 200
            }}>
                <h2>Servicios ofrecidos</h2>
            </Container>
            <Container style={{
                width: "100%",
                height: 200,
                backgroundColor: temas.palette.primary.main
            }}>
                <h2>Productos populares del mercado</h2>
            </Container>
            <Container style={{
                width: "100%",
                height: 'auto'
            }}>
                <Grid container style={{padding: 10}} spacing={30}>
                    <Grid item xs={6} marginLeft={5}>
                        <Typography variant= 'titulo'>
                            <h2 style={{color: temas.palette.secondary.main}}>Gua'iteño House</h2>
                        </Typography>
                        <Typography variant='cuerpo'>
                            <p>Somos una empresa que realiza ventas de los productos más nuevos del mercado, a través de servicios de delivery en especial al sector de a ciudad de Villarrica y alrrededores.</p>
                        </Typography>
                    </Grid>
                    <Grid xs={4} item>
                        <Typography variant= 'titulo'>
                            <h2 style={{color: temas.palette.secondary.main}}>Siguenos en:</h2>
                        </Typography>
                        <Redes_sociales />
                    </Grid>
                </Grid>
            </Container>
        </Fondo_body>
    </>);
}

export default Principal;