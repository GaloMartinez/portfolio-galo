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









{/* <div className="container-carrousel row justify-content-center align-items-center vh-100 pt-5">


                <div className="col-12">
                    
         
                </div>


                <div className="col-9 carousel-container">
                <h2 className="title-carrousel">
                <LaptopMacIcon className='mb-1 me-2'  sx={{ color: 'lightseagreen', fontSize: 40  }} />
                    Proyectos</h2>
                    <Carousel className="">
                        <Carousel.Item>
                            <Image
                                className="d-block w-100 img-fixed-height"
                                src={web1}
                                alt="Proyecto 1"
                            />
                            <Carousel.Caption>
                                <div className='container-description'>
                                    <h3>Proyecto 1</h3>
                                    <p>Descripción del proyecto 1</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100 img-fixed-height"
                                src={web1}
                                alt="Proyecto 2"
                            />
                            <Carousel.Caption>
                                <div className='container-description'>
                                    <h3>Proyecto 2</h3>
                                    <p>Descripción del proyecto 2</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100 img-fixed-height"
                                src={web2}
                                alt="Proyecto 2"
                            />
                            <Carousel.Caption>
                                <div className='container-description'>
                                    <h3>Proyecto 3</h3>
                                    <p>Descripción del proyecto 3</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100 img-fixed-height"
                                src={web3}
                                alt="Proyecto 2"
                            />
                            <Carousel.Caption>
                                <div className='container-description'>
                                    <h3>Proyecto 4</h3>
                                    <p>Descripción del proyecto 4</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
              
                    </Carousel>
                </div>
            </div> */}