import App from '../App';
import '../index.css';
import Menu_superior from '../views/menu_superior';
import Pie from '../views/pie';

const Principal= () => {
    return (<>
        <Menu_superior />        
        <h1>Pagina principal</h1>
        <App/>
    </>);
}

export default Principal;