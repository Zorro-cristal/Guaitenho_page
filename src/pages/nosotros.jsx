import Fondo_body from '../layout/fondo_body';
import Menu_flotante from '../views/menu_flotante';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { temas } from '../styless/temas';
import { Divider, Grid, Link, Stack, SvgIcon, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { direcciones_paginas } from '../constantes';

export default function Nosotros () {
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
            <Typography variant='titulo'>
                <h1>Conozcanos</h1>
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={0} alignItems="center" justifyContent="center" m={2}>
                    <Stack style={{backgroundColor: temas.palette.primary.main}}>
                        <Typography variant='recuadro'>
                            <h2>Mas informacion sobre nuestra empresa...</h2>
                            <h3>EMAIL</h3>
                            <h4>noMolestar@gmail.com</h4>
                            <h3>TELEFONO</h3>
                            <h4>(0983) 510-916</h4>
                            <h3>UBICACION</h3>
                            <h4>Tienda virtual, procedente de Villarrica</h4>
                            <h3>Siguenos en nuestras redes sociales</h3>
                            <Grid spacing={3} container justifyContent={'center'}>
                                <Grid item>
                                    <Link style={{textDecoration: 'none', color:'white'}} href={direcciones_paginas.facebook}>
                                        <SvgIcon component={FacebookIcon} color='white'/>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href={direcciones_paginas.instagram} style={{textDecoration: 'none', color:'white'}}>
                                        <SvgIcon component={InstagramIcon} color='white'/>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link style={{textDecoration: 'none', color:'white'}} href={direcciones_paginas.whatsapp}>
                                        <SvgIcon component={WhatsAppIcon} color='white'/>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Typography>
                    </Stack>
                    <Stack >
                        <img src={'avatar.jpg'} alt={'Mascota de la empresa'} height={435}/>
                    </Stack>
                </Stack>
                <h2>Nuestro equipo</h2>
                <h2>Estamos ubicados en Villarrica, Paraguay</h2>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114965.91613349908!2d-56.513546248784074!3d-25.78097010208623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945ecc42e3757fb1%3A0x88ef83d89320b7c5!2sVillarrica!5e0!3m2!1ses!2spy!4v1671391734784!5m2!1ses!2spy" 
                    width="80%" 
                    height="250"
                    style={{borderColor: temas.palette.secondary.main, borderWidth: 'thick'}}
                ></iframe>
            </Typography>
        </Fondo_body>
    </>);
}