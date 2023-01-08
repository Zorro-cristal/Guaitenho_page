import { FacebookOutlined } from "@mui/icons-material";
import { Link, List, ListItem, ListItemIcon, ListItemText, SvgIcon, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { temas } from "../styless/temas";
import { direcciones_paginas } from "../constantes";

export default function Redes_sociales () {
    const estilo= {
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 0,
    }
    return (<Typography variant="cuerpo">
        <List>
            <ListItem style={estilo}>
                <ListItemIcon>
                    <SvgIcon component={FacebookIcon} color={temas.palette.azul_marino}/>
                </ListItemIcon>
                <ListItemText>
                    <Link style={{textDecoration: 'none'}} href={direcciones_paginas.facebook}>Gua'iteño House 2.0</Link>
                </ListItemText>
            </ListItem>
            <ListItem style={estilo}>
                <ListItemIcon>
                    <SvgIcon component={InstagramIcon} color={temas.palette.azul_marino}/>
                </ListItemIcon>
                <ListItemText>
                    <Link href={direcciones_paginas.instagram} style={{textDecoration: 'none'}}>guaitenohouse</Link>
                </ListItemText>
            </ListItem>
            <ListItem style={estilo}>
                <ListItemIcon>
                    <SvgIcon component={WhatsAppIcon} color={temas.palette.azul_marino}/>
                </ListItemIcon>
                <ListItemText>
                    <Link style={{textDecoration: 'none'}} href={direcciones_paginas.whatsapp}>(0983) 510916</Link>
                </ListItemText>
            </ListItem>
        </List>
    </Typography>);
}