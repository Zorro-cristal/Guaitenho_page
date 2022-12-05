import cabecera from '../assets/cabecera.jpg'
import logo from '../assets/logo_blanco.png'
import './principal.css'
import pie from '../assets/pie.jpg'
import facebook_logo from '../assets/redes_sociales/Facebook.png'
import instagram_logo from '../assets/redes_sociales/Instagram.png'
import whatsapp_logo from '../assets/redes_sociales/Whatsapp.png'

import Menu from '../router/menu'
import Creador_page from './creador'
import { Rutas } from '../router/rutas'

export const Principal= () => {

    return (<>
        <header>
            <div>
                <img src={cabecera} id= "cabecera" />
                <img src={logo} id= "logo"/>
                <div>Gua'iteño House</div>
            </div>
        </header>
        <Menu/>
        <div className='cuerpo'>
            {/* <Nosotros_page /> */}
            {/* <Creador_page /> */}
            {/* <Rutas /> */}
        </div>
        <footer>
            <div>
                <img src={pie} id="pie" />
                
                <img src={facebook_logo} id="facebook_logo_pie" className='redes_logo_pie' />
                <a className='redes_texto_pie' id='texto_facebook_pie' href='https://www.facebook.com/guaitenohouse'>
                    Facebook
                </a>
                <img src={instagram_logo} id="instagram_logo_pie" className='redes_logo_pie' />
                <a className='redes_texto_pie' id='texto_instagram_pie' href='https://www.instagram.com/guaitenohouse/'>
                    Instagram
                </a>
                <img src={whatsapp_logo} id="whatsapp_logo_pie" className='redes_logo_pie' />
                <a className='redes_texto_pie' id='texto_whatsapp_pie' href='https://wa.me/595983510916'>
                    Whatsapp
                </a>
                <a id='numero' href='https://wa.me/5983510916'>
                    0983-510916
                </a>
                <div id='direccion'>
                    Villarrica, Paraguay
                </div>
            
            </div>
        </footer>
    </>);
}