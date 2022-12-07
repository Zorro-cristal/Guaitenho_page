import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import App from '../App';
import '../index.css';

const Menu_item= (props) => {
    return (<BottomNavigationAction label={props.nombre} icon={<RestoreIcon />} />);
}

export default Menu_item;