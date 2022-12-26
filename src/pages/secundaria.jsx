import App from '../App';
import '../index.css';
import Fondo_body from '../layout/fondo_body';

export default function Secundaria () {
    return (<Fondo_body>
        <h1>Pagina secundaria</h1>
        <App/>
        <h1>Texto</h1>
    </Fondo_body>);
}