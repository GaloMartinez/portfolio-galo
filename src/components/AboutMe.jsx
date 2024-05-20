import React from 'react'
import { Image } from 'react-bootstrap';
import foto from "../img/frontend.jpg";
import FeedIcon from '@mui/icons-material/Feed';

function AboutMe() {
  return (
    <div id="aboutme" className='section-aboutme'>
      <div className='container-aboutme  '>
        <div className='aboutme-row row justify-content-around '>
          <div className='col-xl-7 col-lg-12 col-md-12 col-sm-12 reduced-padding'>
            <Image className="img-aboutme" src={foto} width={600} height={350} alt='header-img' />
          </div>
          <div className=' col-xl-5 col-lg-12 col-md-12 col-sm-12 reduced-padding d-flex flex-column  '>
            <div className='description'>
              <h2 className="title-aboutme">
                <FeedIcon className='icon-description ' sx={{ color: 'lightseagreen', fontSize: 40 }} />
                Acerca de mi
                </h2>
              <p className='parrafo-aboutme'>Soy un desarrollador web frontend que construye el front-end de sitios web y aplicaciones web que conducen al éxito del producto en general. Echa un vistazo a algunos de mis trabajos en la sección de Proyectos .</p>
              <div className="d-flex justify-content-start mt-3">
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
