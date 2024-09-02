import Header from './header/header.jsx'
import Footer from './footer/footer.jsx'
import Card from './card/cardComponent.jsx'
import StyleLayout from './appLayout.module.css'

export default function renderLoop() {
    
    return (<div className="containerBox">
        <Header />
        <div className={StyleLayout.containerBody}>
                <Card />
                <Card />
        </div>
        
        <Footer />
    </div>
    );
}
