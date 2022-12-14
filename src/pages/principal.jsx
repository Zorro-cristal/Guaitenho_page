import { style } from '@mui/system';
import App from '../App';
import { temas } from '../constantes';
import '../index.css';
import Fondo_body from '../layout/fondo_body';
import Menu_flotante from '../views/menu_flotante';
import Pie from '../views/pie';

//https://cssgradient.io/

const Principal= () => {
    return (<Fondo_body>
        // <h1>Pagina principal</h1>
        <App/>
    </Fondo_body>);
}

export default Principal;