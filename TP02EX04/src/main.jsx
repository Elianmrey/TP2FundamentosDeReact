import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './components/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Form />
  </StrictMode>,
)
