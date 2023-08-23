import React from 'react'
import ReactDOM from 'react-dom/client' // Import pour le DOM Virtuel
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // Routage dans React

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />  
    </BrowserRouter>
  </React.StrictMode>
)
