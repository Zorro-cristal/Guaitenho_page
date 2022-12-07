import App from '../App';
import '../index.css';
import Menu_superior from '../views/menu_superior';
import Pie from '../views/pie';

const Secundaria= () => {
    return (<>      
        <Menu_superior />  
        <h1>Pagina secundaria</h1>
        <App/>
    </>);
}

export default Secundaria;