export const direcciones_paginas= {
    facebook: 'https://www.facebook.com/guaitenohouse',
    instagram: 'https://www.instagram.com/',
    whatsapp: 'https://wa.me/595983510916',
}

export const Paginas= [
    {
        ruta: "/principal",
        nombre: "Inicio"
    },
    {
        ruta: "/nosotros",
        nombre: "Contactos"
    },
    {
        ruta: "/secundaria",
        nombre: "Secundaria"
    }
];

export async function getProductos() {
    let contenido;
    var archivo= fetch('../temporales/productos.json');
    await fetch(archivo).then(response => response.text()).then(response => contenido= response);
    return (JSON.parse(contenido));
}

export async function getServicios() {
    let contenido;
    var archivo= fetch('../temporales/servicios.json');
    await fetch(archivo).then(response => response.text()).then(response => contenido= response);
    return (JSON.parse(contenido));
}