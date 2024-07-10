import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import web1 from './../img/proyecto-portafolio.png';
import web2 from './../img/proyecto-destileria.png';
import web3 from './../img/moviesflix.jpg';
import web4 from './../img/detailingshop.png';
import web5 from './../img/veterinariashifts.png';
import web6 from './../img/vexa-software.png';

import WorkIcon from '@mui/icons-material/Work';

function Proyects() {
    return (
        <>
            <h1 className='title-proyectos'>
            <WorkIcon className='icon-description-projects' sx={{ color: 'lightseagreen', fontSize: { xs: 30, sm: 40 } }}/>
                Proyectos</h1>
            <div id="proyects" className="projects-container">
                <div className="project">
                <a href="https://martinezgalodev.netlify.app" target="_blank" rel="noopener noreferrer">
                    <img src={web1} className="project-image" alt="Proyecto 1" />
                    </a>
                </div>
                <div className="project">
                <a href="https://destileriafernandezlatino.com" target="_blank" rel="noopener noreferrer">
                    <img src={web2} className="project-image" alt="Proyecto 2" />
                    </a>
                </div>
                <div className="project">
                <a href="https://detailingshop.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={web4} className="project-image" alt="Proyecto 3" />
                    </a>
                </div>
                <div className="project">
                <a href="https://veterinaryshifts.netlify.app" target="_blank" rel="noopener noreferrer">
                    <img src={web5} className="project-image" alt="Proyecto 4" />
                    </a>
                </div>
                <div className="project">
                <a href="https://vexasoftware.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={web6} className="project-image" alt="Proyecto 4" />
                    </a>
                </div>
                <div className="project">
                <a href="https://trailersmoviesapp.netlify.app" target="_blank" rel="noopener noreferrer">
                    <img src={web3} className="project-image" alt="Proyecto 4" />
                    </a>
                </div>
            </div>

        </>
    )
}

export default Proyects;







