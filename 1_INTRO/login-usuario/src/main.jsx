import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Styled Global
import { StyledGlobal } from './components/StyledGlobal.style.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledGlobal />
    <App />
  </StrictMode>,
)
