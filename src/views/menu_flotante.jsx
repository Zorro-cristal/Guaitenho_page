import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Button, Container, SvgIcon, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { Paginas } from '../constantes';
import { Link, useLocation } from 'react-router-dom';
import { temas } from '../styless/temas';


export default function Menu_flotante() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const localizacion= useLocation();
  console.log(localizacion.pathname);

  return (
    <div style={{position: "fixed", top: "0", left: "0", zIndex: 10}}>
      <AppBar position="static" style={{width: "100vw"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <img src={"Logotipo.png"} alt={"logo_empresa"} width={50} height={50}/>
            <Typography
              variant="titulo"
              noWrap
              //href="/"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                //fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                fontSize: 30
              }}
            >
              Gua'iteño House
            </Typography>
            <Box sx={{ flexGrow: 1, position: "absolute", right: "0"}}>
              <Typography variant="titulo">
                {Paginas.map((pag) => (
                  <Link to={pag.ruta} key={pag.nombre}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ 
                        my: 2, 
                        color: localizacion.pathname == pag.ruta ? temas.palette.lila : 'white', 
                        display: 'block'
                      }}
                    >
                      {pag.nombre}
                    </Button>
                  </Link>
                ))}
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}