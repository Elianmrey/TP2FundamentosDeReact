import { useState } from 'react';
import styles from './FloatingContactButton.module.css';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

export default function FloatingContactButton () {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.floatingButtonContainer}>
            <div className={styles.floatingButton} onClick={toggleMenu}>
                <span className={isOpen ? styles.closeIcon : styles.openIcon}>
                    {isOpen ? '✖' : '💬'}
                </span>
            </div>
            {isOpen && (
                <div className={styles.menu}>
                    <a href="mailto:elian060893@gmail.com" className={styles.menuItem}>
                        <FaEnvelope className={styles.icon} />
                        <span>Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/elianmr" target="ublank" rel="noopener noreferrer" className={styles.menuItem}>
                        <FaLinkedin className={styles.icon} />
                        <span>LinkedIn</span>
                    </a>
                    <a href="tel:+5585992496077" target="ublank" rel="noopener noreferrer" className={styles.menuItem}>
                        <FaPhone className={styles.icon} />
                        <span>Ligar</span>
                    </a>
                </div>
            )}
        </div>
    );
};




