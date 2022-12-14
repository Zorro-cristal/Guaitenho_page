import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Button, Container, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { Paginas } from '../constantes';


export default function Menu_flotante() {
  const [value, setValue] = React.useState(0);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div style={{position: "fixed", top: "0", left: "0"}}>
      <AppBar position="static" style={{width: "100vw"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Gua'iteño House
            </Typography>
            <Box sx={{ flexGrow: 1, position: "absolute", right: "0", display: { xs: 'none', md: 'flex' }}}>
              {Paginas.map((pag) => (
                <Button
                  key={pag.nombre}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {pag.nombre}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}