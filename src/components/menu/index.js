import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'
import Button from '../Button';
import './menu.css' 

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/ ">123
                <img className="Logo" src={Logo} alt="RSFLIX" />            
            </Link>            
            <Button as={Link} to="/cadastro/categoria" className="ButtonLink">
                Novo Categoria
            </Button>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    )
}
export default Menu;