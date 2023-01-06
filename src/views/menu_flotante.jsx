import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Button, Container, SvgIcon, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { Paginas } from '../constantes';
import { Link } from 'react-router-dom';


export default function Menu_flotante() {
  const [value, setValue] = React.useState(0);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div style={{position: "fixed", top: "0", left: "0", zIndex: 10}}>
      <AppBar position="static" style={{width: "100vw"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <img src={"Logotipo.png"} alt={"logo_empresa"} width={50} height={50}/>
            <Typography
              variant="titulo"
              noWrap
              component="a"
              //href="/"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                //fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
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
                      sx={{ my: 2, color: 'white', display: 'block' }}
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