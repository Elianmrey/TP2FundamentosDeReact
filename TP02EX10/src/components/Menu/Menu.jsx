import HomeStyle from './Menu.module.css'
import Logo from '../Img/logo.png'
import { useState } from 'react';

export default function Menu() { 
    const [open, setOpen] = useState(false);
    
    function OpenCloseMenu(open) {
        setOpen(!open);
    }

    function handleScrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false); 
    }

    return (
        <div className={HomeStyle.containerAll} onBlur={() => setOpen(false)}>   
            <div className={open ? HomeStyle.menuButtonDisplayed : HomeStyle.menuButtonCollapsed } onClick={() => OpenCloseMenu(open)}>Menu</div>
            <div className={open ? HomeStyle.menuBox : HomeStyle.noDisplay}>
                <div className={HomeStyle.logoContainer}>
                    <img src={Logo} alt="profile" className={HomeStyle.logoPhoto} />
                </div>
                <div className={HomeStyle.container}>
                    <ul className={HomeStyle.containerMenu}>
                        <li onClick={() => handleScrollToSection('home') }>
                            <a href="#home" className={HomeStyle.link}>Home</a>
                        </li>
                        <li onClick={() => handleScrollToSection('we-are')}>
                            <a href="#we-are" className={HomeStyle.link}>Quem somos</a>
                        </li>
                        <li onClick={() => handleScrollToSection('products') }>
                            <a href="#products" className={HomeStyle.link}>Produtos</a>
                        </li>
                        <li onClick={() => handleScrollToSection('contacts') }>
                            <a href="#contacts" className={HomeStyle.link}>Contatos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
