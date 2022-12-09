import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Link as RouterLink} from "react-router-dom";
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";

const Menu_item_flotante= (props) => {
    return (
        <Link component={RouterLink} to={props.ruta}>
          {props.titulo}
        </Link>
    );
}

export default Menu_item_flotante;