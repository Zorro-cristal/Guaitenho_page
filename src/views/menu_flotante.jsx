import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Menu_item_flotante from '../layout/menu_item_flotante';

export default function Menu_flotante() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
      >
        <Menu_item_flotante titulo="Pagina primaria" ruta="/" />
        <Menu_item_flotante titulo="Pagina secundaria" ruta="/secundaria" />
      </BottomNavigation>
    </Box>
  );
}