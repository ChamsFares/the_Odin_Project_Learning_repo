import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Greeting } from './Greeting.jsx'
import { Favorite } from './Favorite.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Favorite />
    <Greeting />
  </StrictMode>,
)
