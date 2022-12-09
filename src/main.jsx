import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import Rutas_principales from './router/Rutas_principales'
import Cabecera from './views/cabecera'
import Pie from './views/pie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Cabecera />
      <Rutas_principales/>
      <Pie />
    </BrowserRouter>
  </React.StrictMode>
)
