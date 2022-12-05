import './menu.css'
import {Menu_item} from '../layout/menu_item'

const Menu= () => {

    const menus= ["Inicio", "Productos", "Sobre Nosotros", "Contactos"]

    return (<ul>
        {menus.map(men => (
            <Menu_item titulo={men}/>
        ))}
    </ul>);
}

export default Menu;