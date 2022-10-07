import cabecera from '../assets/cabecera.jpg'
import logo from '../assets/logo_blanco.png'
import './principal.css'

export const Principal= ({children}) => {
    return (<>
        <header>
            <div>
                <img src={cabecera} id= "cabecera" />
                <img src={logo} id= "logo"/>
                <div>Gua'iteño House</div>
            </div>
        </header>
        <footer></footer>
    </>);
}