import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import icon from "../img/iconGM.png";

function NavBar() {
    return (
        <div id="navbar-example">
           <nav className='navbar navbar-expand-lg navbar-light transparent-navbar pb-3 pt-3 fixed-top'>

                <div className="header-section row align-items-center w-100 ">

                    <div className="col-1">
                        {/* Este es un espacio vacío a la izquierda del navbar */}
                    </div>

                    <div className="col-1">
                        <Image className="navbar-icon" src={icon} width={70} height={70} alt='header-img' />
                    </div>

                    <div className='navbar-items col-8 d-flex justify-content-center '>
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

                    <div className="col-2">
                        {/* Este es un espacio vacío a la derecha del navbar */}
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;

