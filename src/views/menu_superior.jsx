import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Menu_item from '../layout/menu_item';

export default function Menu_superior() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
      >
        <Menu_item titulo="Pagina primaria" ruta="/" />
        <Menu_item titulo="Pagina secundaria" ruta="/secundaria" />
      </BottomNavigation>
    </Box>
  );
}