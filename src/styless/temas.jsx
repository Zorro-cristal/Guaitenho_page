import { createTheme } from "@mui/material";

export const temas= createTheme({
    palette: {
        lila: '#8c072f',
        gris: '#242424',
        azul_marino: '#1b1e3b',
        primary: {
            main: '#1b1e3b',
        },
        secondary: {
            main: '#8c072f',
        },
    },
    typography: {
        fontFamily: [
            'Bahnschrift',
            'Arial',
        ].join(','),
        encabezado: {
            fontFamily: 'Bahnschrift SemiLight Condensed'
        },
        titulo: {
            fontFamily: 'Bahnschrift Bold SemiCondensed'
        },
        cuerpo: {
            fontFamily: 'Bahnschrift SemiBold SemiCondensed'
        },
        recuadro: {
            fontFamily: 'Bahnschrift Bold SemiCondensed'
        }
    },
});