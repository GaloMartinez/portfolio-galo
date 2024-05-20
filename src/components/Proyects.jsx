import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import web1 from './../img/web1.jpg';
import web2 from './../img/web2.png';
import web3 from './../img/web3.jpeg';



function Proyects() {
    return (
        <>
            <div id="proyects" className="projects-container">
                <div className="project">
                    <img src={web1} alt="Proyecto 1" />
                </div>
                <div className="project">
                    <img src={web2} alt="Proyecto 2" />
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







