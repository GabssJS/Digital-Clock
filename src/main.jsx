import React from 'react'
import ReactDOM from 'react-dom/client'
import Clock from './Clock.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles/style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Clock/>
  </React.StrictMode>,
)
