import cabecera from '../assets/cabecera.jpg'
import logo from '../assets/logo_blanco.png'
import './principal.css'
import pie from '../assets/pie.jpg'
import facebook_logo from '../assets/redes_sociales/Facebook.png'
import instagram_logo from '../assets/redes_sociales/Instagram.png'
import whatsapp_logo from '../assets/redes_sociales/Whatsapp.png'

export const Principal= ({children}) => {
    return (<>
        <header>
            <div>
                <img src={cabecera} id= "cabecera" />
                <img src={logo} id= "logo"/>
                <div>Gua'iteño House</div>
            </div>
        </header>
        
        <footer>
            <div>
                <img src={pie} id="pie" />
                <div>
                    <img src={facebook_logo} id="facebook_logo" className='redes_logo' />
                    <div className='redes_texto' id='texto_facebook'>
                        Facebook
                    </div>
                    <img src={instagram_logo} id="instagram_logo" className='redes_logo' />
                    <div className='redes_texto' id='texto_instagram'>
                        Instagram
                    </div>
                    <img src={whatsapp_logo} id="whatsapp_logo" className='redes_logo' />
                    <div className='redes_texto' id='texto_whatsapp'>
                        Whatsapp
                    </div>
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