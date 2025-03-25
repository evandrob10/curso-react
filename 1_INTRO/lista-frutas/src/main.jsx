import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
//Style Global
import { StyledGlobal } from './StyledGlobal.style.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledGlobal />
    <App />
  </StrictMode>,
)
