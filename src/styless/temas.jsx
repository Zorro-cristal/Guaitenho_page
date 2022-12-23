import { createTheme } from "@mui/material";

export const temas= createTheme({
    palette: {
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