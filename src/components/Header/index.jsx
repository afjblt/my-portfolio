import { Button, Drawer } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../LanguageSwitcher";
import { HeaderContainer } from "./styles";

function Header() {
    const { t } = useTranslation()

    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(!isOpen)
    }
    return ( 
        <HeaderContainer>
            <h1>Fernando Costa</h1>
            
            <nav>
                <ul className={isOpen ? 'active' : ''}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">{t('about')}</a></li>
                    <li><a href="#projects">{t('projects')}</a></li>
                    <li><a href="#contact">{t('contact')}</a></li>
                </ul>
                    <LanguageSwitcher />
                <div onClick={handleClick} className={isOpen ? 'hamburger active' : 'hamburger'}></div>
            </nav>
        </HeaderContainer>
     );
}

export default Header;