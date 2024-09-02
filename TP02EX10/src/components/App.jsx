import Product from './Products/Products.jsx';
import Contacts from './Contacts/Contacts.jsx';
import StyleLayout from './LayoutApp.module.css';
import Home from './Home/Home.jsx'
import WeAre from './WeAre/WeAre.jsx'
import Menu from './Menu/Menu.jsx';

export default function App() { 
    return (
        <div className={StyleLayout.containerAll}>
            <section className={StyleLayout.menuContainer}>
                <Menu className={StyleLayout.menu} />
            </section>
            
            <section id="home" className={StyleLayout.home}>
                <Home />
            </section>
            <section id="we-are" className={StyleLayout.weAre}>
                <WeAre />
            </section>
            <section id="products" className={StyleLayout.products}>
                <div className={StyleLayout.containerTitle}>
                    <h2 className={StyleLayout.sectionTitle}>Produtos</h2>
                </div>

                <div className={StyleLayout.containerProducts}>
                    <Product className={ StyleLayout.product} />
                    <Product className={ StyleLayout.product}/>
                    <Product className={ StyleLayout.product}/>
                    <Product className={ StyleLayout.product}/>
                    <Product className={ StyleLayout.product}/>
                    <Product className={ StyleLayout.product}/>
                </div>
            </section>
            <section id="contacts" className={StyleLayout.contacts}>
                <Contacts />
            </section>
        </div>
    );
}
