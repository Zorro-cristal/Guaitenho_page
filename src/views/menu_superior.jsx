import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Paginas } from '../constantes';

export default function Menu_superior() {
  return (
      <Breadcrumbs aria-label="breadcrumb">
        {Paginas.map((pag, i) => (
          <Link underline="hover" color="inherit" href={pag.ruta} key={i}>
            {pag.nombre}
          </Link>
        ))}
        {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
      </Breadcrumbs>
  );
}