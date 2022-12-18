import { ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import { temas } from './constantes'
import Rutas_principales from './router/Rutas_principales'
import Cabecera from './views/cabecera'
import Pie from './views/pie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={temas}>
      <BrowserRouter>
        {/* <div style={{width: "100vw", left: "0", top: "0", position: "absolute"}}> */}
          <Rutas_principales/>
          <Pie />
        {/* </div> */}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
