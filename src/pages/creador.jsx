import facebook_logo from '../assets/redes_sociales/Facebook.png'
import instagram_logo from '../assets/redes_sociales/Instagram.png'
import whatsapp_logo from '../assets/redes_sociales/Whatsapp.png'
import linkedin_logo from '../assets/redes_sociales/linkedin.png'
import github_logo from '../assets/redes_sociales/Github.png'
import creador from '../assets/creador.png'
import './creador.css'

const Creador_page= () => {
    return (<div>
        <img src={creador} id="creador_imagen" />
        <div className='rectangulo' id='rect_redes'>
            <h1 id='nombre'>Luis Alejandro Alvarez</h1>
            <div className='caja_redes' id='caja_facebook'>
                <img src={facebook_logo} className="redes_logo" id='facebook_logo' />
                <a className='redes_text' id='facebook_titul' href='https://www.facebook.com/guaitenohouse'>
                    /Zorro.cristal
                </a>
            </div>
            <div className='caja_redes' id='caja_instagram'>
                <img src={instagram_logo} className="redes_logo" id="instagram_logo" />
                <a className='redes_text' id='instagram_titul' href='https://www.instagram.com/guaitenohouse/' >
                    @ale_guaitenho
                </a>
            </div>
            <div className='caja_redes' id='caja_whatsapp'>
                <img src={whatsapp_logo} className="redes_logo" id="whatsapp_logo" />
                <a className='redes_text' id='whatsapp_titul' href='https://wa.me/595983510916'>
                    0983-510916
                </a>
            </div>
            <div className='caja_redes' id='caja_linkedin'>
                <img src={linkedin_logo} className="redes_logo" id="linkedin_logo" />
                <a className='redes_text' id='linkedin_titul' href='https://www.linkedin.com/in/zorro-cristal/'>
                    /zorro-cristal
                </a>
            </div>
            <div className='caja_redes' id='caja_Github'>
                <img src={github_logo} className="redes_logo" id="github_logo" />
                <a className='redes_text' id='github_titul' href='https://github.com/Zorro-cristal'>
                    /Zorro-cristal
                </a>
            </div>
        </div>
    </div>);
}

export default Creador_page;