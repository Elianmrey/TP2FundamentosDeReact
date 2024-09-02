import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Card from './components/card/cardComponent.jsx'
import StyleLayout from './appLayout.module.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className={StyleLayout.containerBox}>
        <Header />
        <div className={StyleLayout.containerBody}>
            <Card className={StyleLayout.cards} />
            <Card className={StyleLayout.cards} />
        </div>
                <Footer />
    </div>
  </StrictMode>,
)
