import React from 'react'
import ReactDOM from 'react-dom/client'

// Impotando bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// Importando Routes
import { BrowserRouter} from "react-router-dom"
import {Rutas} from "./Routes/Rutas"

import 'boxicons';

import 'remixicon/fonts/remixicon.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Rutas/>
    </BrowserRouter>
  </React.StrictMode>,
)
