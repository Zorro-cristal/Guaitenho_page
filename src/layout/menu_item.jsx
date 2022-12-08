import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Link as RouterLink} from "react-router-dom";
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";

const Menu_item= (props) => {
    return (
        <Link component={RouterLink} color='inherit' to={props.ruta}>
          {props.titulo}
        </Link>
    );
}

export default Menu_item;