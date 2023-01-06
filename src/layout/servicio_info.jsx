import { Avatar, Container } from "@mui/material";
import { temas } from "../styless/temas";

export default function Servicio_info(props) {
    const estilo= {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 150
    };

    const tamano_avatar= 125;
    const background= temas.palette.secondary.main;

    return (
        <Container style={estilo}>
            <Avatar variant="square" sx={{width: tamano_avatar, height: tamano_avatar, bgcolor: {background}}} src={props.ruta}/>
            <h2 style={{fontSize: 20, margin: 5}}>{props.titulo}</h2>
        </Container>
    );
}