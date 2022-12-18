import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { temas } from "../constantes";

const Pie= () => {
    return(
        <Grid container spacing={1} sx={{backgroundColor: temas.palette.primary.main}}>
            <Grid xs={6}>
                <div style={{height: 50}}></div>
                <form method="get" action="https://wa.me/595983510916">
                    <h3>Suscribete para recibir ofertas, promociones y noticias!</h3>
                    <input name="text" placeholder="Ingrese su numero de contacto o correo" style={{width: "90%"}}/>
                    <button type="submit" variant="outlined">Suscribirse</button>
                </form>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid xs={3}>
                <h3>Ubicacion</h3>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114965.91613349908!2d-56.513546248784074!3d-25.78097010208623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945ecc42e3757fb1%3A0x88ef83d89320b7c5!2sVillarrica!5e0!3m2!1ses!2spy!4v1671391734784!5m2!1ses!2spy" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114965.91613349908!2d-56.513546248784074!3d-25.78097010208623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945ecc42e3757fb1%3A0x88ef83d89320b7c5!2sVillarrica!5e0!3m2!1ses!2spy!4v1671391734784!5m2!1ses!2spy"></iframe>
            </Grid>
        </Grid>
    );
}

export default Pie;