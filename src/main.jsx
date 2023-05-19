import React from 'react'
import ReactDOM from 'react-dom/client'
import Clock from './Clock.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/js/bootstrap.esm.js'
import $ from 'jquery'
import Popper from 'popper.js'
import './styles/style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Clock/>
  </React.StrictMode>,
)
