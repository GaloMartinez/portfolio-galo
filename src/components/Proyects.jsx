import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import web1 from './../img/proyecto-portafolio.png';
import web2 from './../img/proyecto-destileria.png';
import web3 from './../img/web3.jpeg';

import WorkIcon from '@mui/icons-material/Work';

function Proyects() {
    return (
        <>
            <h1 className='title-proyectos'>
            <WorkIcon className='icon-description-projects' sx={{ color: 'lightseagreen', fontSize: { xs: 30, sm: 40 } }}/>
                Proyectos</h1>
            <div id="proyects" className="projects-container">
                <div className="project">
                <a href="https://master--curious-trifle-912ac3.netlify.app/#home" target="_blank" rel="noopener noreferrer">
                    <img src={web1} alt="Proyecto 1" />
                    </a>
                </div>
                <div className="project">
                <a href="https://destileriafernandezlatino.com" target="_blank" rel="noopener noreferrer">
                    <img src={web2} alt="Proyecto 2" />
                    </a>
                </div>
                <div className="project">
                    <img src={web3} alt="Proyecto 3" />
                </div>
                <div className="project">
                    <img src={web2} alt="Proyecto 4" />
                </div>
                <div className="project">
                    <img src={web3} alt="Proyecto 4" />
                </div>
                <div className="project">
                    <img src={web1} alt="Proyecto 4" />
                </div>
            </div>

        </>
    )
}

export default Proyects;







