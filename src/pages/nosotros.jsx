import './nosotros.css'
import avatar from '../assets/avatar.jpg'
import facebook_logo from '../assets/redes_sociales/Facebook.png'
import instagram_logo from '../assets/redes_sociales/Instagram.png'
import whatsapp_logo from '../assets/redes_sociales/Whatsapp.png'

//function nosotros_page ({children}) {
const Nosotros_page= ({children}) => {
    return (<div className='nosotros'>
        <img src={avatar} id="avatar" />
        <h1 id='quien_titul'>
            ¿Quienes somos?
        </h1>
        <div id='quien_rect' className='rectangulo'>
            <p>
                Somos una empresa que realizan ventas de los productos mas nuevos del mercado a traves de servicios de delivery principalmente por la ciudad de Villarrica y alrrededores.
            </p>
        </div>
        <h1 id='sigue_titul'>
            Siguenos
        </h1>
        <div id='sigue_rect' className='rectangulo'>
            <div className='caja_redes' id='caja_facebook'>
                <img src={facebook_logo} className="redes_logo" id='facebook_logo' />
                <a className='redes_text' id='facebook_titul' href='https://www.facebook.com/guaitenohouse'>
                    Gua'iteño House
                </a>
            </div>
            <div className='caja_redes' id='caja_instagram'>
                <img src={instagram_logo} className="redes_logo" id="instagram_logo" />
                <a className='redes_text' id='instagram_titul' href='https://www.instagram.com/guaitenohouse/' >
                    guaitenohouse
                </a>
            </div>
            <div className='caja_redes' id='caja_whatsapp'>
                <img src={whatsapp_logo} className="redes_logo" id="whatsapp_logo" />
                <a className='redes_text' id='whatsapp_titul' href='https://wa.me/595983510916'>
                    0983-510916
                </a>
            </div>
        </div>
        <a id='firma' href='https://github.com/Zorro-cristal'>By Zorro Cristal</a>
    </div>);
}

export default Nosotros_page;
