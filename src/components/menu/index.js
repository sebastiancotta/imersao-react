import React from 'react';
import Logo from '../../assets/img/logo.png'
import Button from '../Button';
import './menu.css' 

function Menu() {
    return (
        <nav className="Menu">
            <a href="/ ">123
                <img className="Logo" src={Logo} alt="RSFLIX" />            
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    )
}
export default Menu;