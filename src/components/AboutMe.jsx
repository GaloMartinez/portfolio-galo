import React from 'react'
import { Image } from 'react-bootstrap';
import foto from "../img/frontend.jpg";
import FeedIcon from '@mui/icons-material/Feed';

function AboutMe() {
  return (
    <div id="aboutme" className='section-aboutme'>
      <div className='container-aboutme  '>
        <div className='aboutme-row row justify-content-around '>
          <div className='aboutme-column1 col-xl-7 col-lg-12 col-md-12 col-sm-12 '>
            <Image className="img-aboutme" src={foto} width={600} height={350} alt='header-img' />
          </div>
          <div className='aboutme-column2 col-xl-5 col-lg-12 col-md-12 col-sm-12 d-flex flex-column  '>
            <div className='description'>
              <h1 className="title-aboutme">
                <FeedIcon className='icon-description ' sx={{ color: 'lightseagreen', fontSize: { xs: 30, sm: 40 } }} />
                Acerca de mi
              </h1>
              <p className='parrafo-aboutme'>Soy un desarrollador web frontend que construye el front-end de sitios web y aplicaciones web que conducen al éxito del producto en general. Echa un vistazo a algunos de mis trabajos en la sección de Proyectos .</p>
              <div className="d-flex justify-content-start ">
                <a href="#contact" data-for="contact" className='items-aboutme '>
                  <button className='button-contact'>
                    Contactame
                  </button>
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutMe
