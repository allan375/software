// Módulos
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './assets/css/style.css'
import App from './App'

createRoot(document.getElementById('interface')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)