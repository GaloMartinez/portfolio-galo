import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap'; 
import { useState } from 'react';
import icon from "../img/iconGM.png";
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleHamburgerClick = () => {
        setMenuOpen(!isMenuOpen);  // Cambia el estado del menú desplegable
    };
    return (
        <div id="navbar-example">
            <nav className='navbar navbar-expand-lg navbar-light transparent-navbar pb-3 pt-3 fixed-top'>

                <div className="container-fluid">
                    {/* Logo al principio */}
                    <div className="navbar-brand">
                        <Image className="navbar-icon" src={icon} width={70} height={70} alt='header-img' />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '1rem', alignItems: 'start' }}>
                        <div className="hamburger-menu" onClick={handleHamburgerClick}>
                            <MenuIcon className="" sx={{ color: '#1c1c1c' }} fontSize='large' />


                        </div>

                        {
                            isMenuOpen &&   // Renderiza condicionalmente el menú desplegable basado en el estado
                            <div className="dropdown-responsive-menu">
                                <a href="#home" data-for="home" className='items mx-5'>
                                    INICIO
                                </a>
                                <a href="#aboutme" data-for="aboutme" className='items mx-5'>
                                    ACERCA DE MI
                                </a>
                                <a href="#proyects" data-for="proyects" className='items mx-5'>
                                    PROYECTOS
                                </a>
                                <a href="#contact" data-for="contact" className='items mx-5'>
                                    CONTACTO
                                </a>
                            </div>
                        }
                    </div>


                    {/* Elementos de navegación alineados al final */}
                    <div className='header-right '>
                        <a href="#home" data-for="home" className='items '>
                            INICIO
                        </a>
                        <a href="#aboutme" data-for="aboutme" className='items'>
                            ACERCA DE MI
                        </a>
                        <a href="#proyects" data-for="proyects" className='items '>
                            PROYECTOS
                        </a>
                        <a href="#contact" data-for="contact" className='items '>
                            CONTACTO
                        </a>
                    </div>
                </div>
            </nav >
        </div >
    );
}

export default NavBar;
