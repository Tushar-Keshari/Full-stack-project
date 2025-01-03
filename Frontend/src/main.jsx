import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserContext from './Context/userContext.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
   </StrictMode> 
)
