import App from '../App';
import '../index.css';
import Menu_flotante from '../views/menu_flotante';
import Pie from '../views/pie';

const Secundaria= () => {
    return (<>
        <Menu_flotante />
        <h1>Pagina secundaria</h1>
        <App/>
        <h1>Texto</h1>
        <h1>Texto</h1>
        <h1>Texto</h1>
        <h1>Texto</h1>
    </>);
}

export default Secundaria;