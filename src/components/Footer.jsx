import React from 'react'
import { Image } from 'react-bootstrap';
import icon from "../img/iconGM.png";
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <>
            <section className='footer-section'>
                <div className='footer-container' >
                    <div className='footer-row' >


                        <div className=' enlaces-rapidos col-lg-4 col-md-4 col-12'>
                            <Image className="icon-footer" src={icon} width={70} height={70} alt='header-img' />
                            
                            <p className="info-footer">
                            <WhatsAppIcon sx={{ color: 'grey' }} className="info-footer-icon"/>
                                11-37918640
                            </p>
                            <p className="info-footer">
                            <LinkedInIcon sx={{ color: 'grey' }} className="info-footer-icon"/>
                            linkedin.com/in/galomartinez1/
                            </p>
                            <p className="info-footer">
                            <MailIcon sx={{ color: 'grey' }} className="info-footer-icon"/>
                                galomartinez1@hotmail.com
                            </p>
                            <p className="info-footer">
                            <PlaceIcon sx={{ color: 'grey' }} className="info-footer-icon"/>
                                Buenos Aires, Argentina
                            </p>

                        </div>


                        <div className='enlaces-rapidos col-lg-4 col-md-4 col-12'>
                            <h4 className='enlaces-rapidos-title'>Enlaces Rapidos</h4>
                            <div className='contain-links'>
                            <ArrowRightAltIcon sx={{ color: 'grey' }} className="info-footer-icon"/>
                            <a href="#home" data-for="home" className='items-footer '>
                            
                                INICIO
                            </a>
                            </div>
                            <div className='contain-links'>
                            <ArrowRightAltIcon sx={{ color: 'grey' }} className="info-footer-icon"/>
                            <a href="#aboutme" data-for="aboutme" className='items-footer'>
                                ACERCA DE MI
                            </a>
                            </div>
                            <div className='contain-links'>
                            <ArrowRightAltIcon sx={{ color: 'grey' }} className="info-footer-icon"/>
                            <a href="#proyects" data-for="proyects" className='items-footer'>
                                PROYECTOS
                            </a>
                            </div>
                            <div className='contain-links'>
                            <ArrowRightAltIcon sx={{ color: 'grey' }} className="info-footer-icon"/>
                            <a href="#contact" data-for="contact" className='items-footer'>
                                CONTACTO
                            </a>
                            </div>

                        </div>

                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
