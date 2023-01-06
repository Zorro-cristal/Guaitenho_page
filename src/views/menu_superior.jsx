import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Paginas } from '../constantes';

export default function Menu_superior() {
  return (
    <div style={{display: 'flex', justifyContent: 'end'}}>
      <Breadcrumbs aria-label="breadcrumb" separator= "/">
        {Paginas.map((pag, i) => (
          <Link underline="hover" color="inherit" href={pag.ruta} key={i}>
            {pag.nombre}
          </Link>
        ))}
        {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
      </Breadcrumbs>
    </div>
  );
}