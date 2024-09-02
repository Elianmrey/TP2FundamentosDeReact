import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app.jsx'
import LayoutCss from './layout.module.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <h1 className={LayoutCss.title}>Card</h1>
    <App />
  </StrictMode>,
)
