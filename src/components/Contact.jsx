import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import emailjs from "emailjs-com";
import { useState } from 'react';


function Contact() {

    const [result, setResult] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleConfirm = (event) => {
        debugger;
        event.preventDefault();

        if ([name, email, message].includes('')) {
            console.log('Hay al menos un campo vacío');
            return;
        }




        emailjs
            .sendForm(
                "service_ouqnegv",
                "template_kzfga72",
                event.target,
                "OpnB1q9SZaAPuGkBQ"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setResult("Email enviado con éxito");
                },
                (error) => {
                    console.log(error.text);
                    setResult("Ocurrió un error. Por favor, inténtalo de nuevo");
                }
            );
        // Reiniciar los campos del formulario
        setName('');
        setEmail('');
        setMessage('');
    };

    return (

        <>


            <div id="contact">

                <form onSubmit={handleConfirm} className="section-form ">
                    <div className='container-contact2 row '>
                        <div className='column-items col-12 col-md-6 col-xl-6 d-flex flex-column align-items-center '>
                            <div className="container-item col-12 col-md-6 col-xl-12 ">
                                <h1 className='title1 '>
                                    <MessageIcon className=" responsive-icon" sx={{ color: 'lightseagreen', fontSize: { xs: 30, sm: 40 } }} />
                                    Envia un mensaje</h1>

                                <input
                                    type="text"
                                    className="input  mb-4"
                                    placeholder="Nombre"
                                    name="from_name"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />

                                <input type="text"
                                    className="input  mb-4"
                                    placeholder="Email"
                                    name="from_email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />

                                <input type="text"
                                    className="input-message   "
                                    placeholder="Mensaje"
                                    name="message"
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                />
                               

                                    <button type="submit" className='button-contact ' >
                                        Enviar
                                    </button>
                               

                            </div>


                        </div>

                        <div className='column-items col-12 col-md-6 col-xl-6 d-flex flex-column align-items-center '>
                            <div className="container-item col-12 ">
                                <h1 className='title1 '>
                                    <PersonIcon className='responsive-icon-2' sx={{ color: 'lightseagreen', fontSize: { xs: 30, sm: 40 } }}/> Contacto</h1>

                                <h4 className='contact-title mb-4'>¿Queres contactarte conmigo para realizar algun proyecto? </h4>

                                <p className='contact-info'>
                                    <MailIcon sx={{ color: 'lightseagreen' }} /> galomartinez1@hotmail.com
                                </p>

                                <p className='contact-info'>
                                    <WhatsAppIcon sx={{ color: 'lightseagreen' }} /> 11-37918640
                                </p>

                                <p className='contact-info'>
                                    <PlaceIcon sx={{ color: 'lightseagreen' }} /> Buenos Aires, Argentina
                                </p>
                            </div>
                        </div>

                    </div>


                    {result}
                </form>




            </div>









            {/* 
            <div id="contact">
                <div className='container-contact align-items-center '>
                    <form onSubmit={handleConfirm} className="section-form ">
                        <div className="contact-row ">
                            
                                <div className='container-contact2 row '>
                                    <div className='col-12 col-xl-6 d-flex flex-column align-items-center '>
                                        <div className="col-12 col-xl-12 ">
                                            <h1 className='title1 '>
                                                <MessageIcon className=" responsive-icon" sx={{ color: 'lightseagreen', fontSize: 30 }} />
                                                Envia un mensaje</h1>

                                            <input
                                                type="text"
                                                className="input  mb-4"
                                                placeholder="Nombre"
                                                name="from_name"
                                                value={name}
                                                onChange={(event) => setName(event.target.value)}
                                            />

                                            <input type="text"
                                                className="input  mb-4"
                                                placeholder="Email"
                                                name="from_email"
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                            />

                                            <input type="text"
                                                className="input-message   "
                                                placeholder="Mensaje"
                                                name="message"
                                                value={message}
                                                onChange={(event) => setMessage(event.target.value)}
                                            />

                                        </div>

                                        <div className='col-12 col-xl-12 asd justify-content-start'>

                                            <button type="submit" className='button-contact ' >
                                                Enviar
                                            </button>
                                        </div>
                                    </div>

                                    <div className='col-12 col-xl-6 d-flex flex-column align-items-center '>
                                        <div className="col-10 ">
                                            <h1 className='title1 '>
                                                <PersonIcon className='' sx={{ color: 'lightseagreen', fontSize: 30 }} /> Contacto</h1>

                                            <h4 className='contact-title mb-4'>¿Queres contactarte conmigo para realizar algun proyecto? </h4>

                                            <p className='contact-info'>
                                                <MailIcon sx={{ color: 'lightseagreen' }} /> galomartinez1@hotmail.com
                                            </p>

                                            <p className='contact-info'>
                                                <WhatsAppIcon sx={{ color: 'lightseagreen' }} /> 11-37918640
                                            </p>

                                            <p className='contact-info'>
                                                <PlaceIcon sx={{ color: 'lightseagreen' }} /> Buenos Aires, Argentina
                                            </p>
                                        </div>
                                    </div>

                                </div>
                           
                        </div>
                        {result}
                    </form>
                </div>



            </div> */}


        </>
    )
}

export default Contact
