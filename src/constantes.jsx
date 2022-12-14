import { createTheme } from "@mui/material";

export const Paginas= ['Inicio', 'Productos', 'Servicios', 'Contactos'];

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
    },
});