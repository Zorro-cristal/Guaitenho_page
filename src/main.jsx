import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import Rutas_principales from './router/Rutas_principales'
import Pie from './views/pie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Rutas_principales/>
      <Pie />
    </BrowserRouter>
  </React.StrictMode>
)
