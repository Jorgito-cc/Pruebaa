import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Login } from './components/Login/Login.jsx'
import { Main } from './components/Main/Main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/*  <Login/> */}
    <Main/>
  </StrictMode>,
)
