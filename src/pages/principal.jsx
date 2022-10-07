import cabecera from '../assets/cabecera.jpg'
import logo from '../assets/logo_blanco.png'
import './principal.css'
import pie from '../assets/pie.jpg'
import facebook_logo from '../assets/redes_sociales/Facebook.png'
import instagram_logo from '../assets/redes_sociales/Instagram.png'
import whatsapp_logo from '../assets/redes_sociales/Whatsapp.png'
import { Menu_item } from '../layout/menu_item'

export const Principal= ({children}) => {
    const menus= ["Inicio", "Productos", "Sobre Nosotros", "Contactos"]

    return (<>
        <header>
            <div>
                <img src={cabecera} id= "cabecera" />
                <img src={logo} id= "logo"/>
                <div>Gua'iteño House</div>
            </div>
        </header>
        <ul>
            {menus.map(men => (
                <Menu_item titulo={men}/>
            ))}
        </ul>
        <footer>
            <div>
                <img src={pie} id="pie" />
                <div>
                    <img src={facebook_logo} id="facebook_logo" className='redes_logo' />
                    <a className='redes_texto' id='texto_facebook' href='https://www.facebook.com/guaitenohouse'>
                        Facebook
                    </a>
                    <img src={instagram_logo} id="instagram_logo" className='redes_logo' />
                    <a className='redes_texto' id='texto_instagram' href='https://www.instagram.com/guaitenohouse/'>
                        Instagram
                    </a>
                    <img src={whatsapp_logo} id="whatsapp_logo" className='redes_logo' />
                    <a className='redes_texto' id='texto_whatsapp' href='https://wa.me/595983510916'>
                        Whatsapp
                    </a>
                    <div id='numero'>
                        0983-510916
                    </div>
                    <div id='direccion'>
                        Villarrica Paraguay
                    </div>
                </div>
            </div>
        </footer>
    </>);
}