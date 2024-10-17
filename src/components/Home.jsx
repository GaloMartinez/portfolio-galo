import React from 'react'


function Home() {
    return (
        <>
            <div id="home">
                <div className='row justify-content-center '>
                    <div className='container-home '>
                        <h1 className='title-home'>Hola! soy Galo Martinez</h1>
                        <p className='p-home '>Desarrollador Front-end, actualmente trabajando como Freelance </p>
                        <a href="#proyects" data-for="proyects" className='items mx-5'>
                        <button className='button-home '>
                            Proyectos
                        </button>
                        </a>
                        
                    </div>
                </div>

                <div className='container-skills d-flex justify-content-center '>
                    <div className=''>
                        <h2 className='title-skills'>Mis habilidades</h2>
                        <div className='skills-skill d-flex align-items-center justify-content-around mt-5'>
                            <div className='skills'>JavaScript</div>
                            <div className='skills'>React</div>
                            <div className='skills'>Typscript</div>
                            <div className='skills'>C#</div>
                            <div className='skills'>.Net</div>
                            <div className='skills'>SQL</div>
                            <div className='skills'>CSS</div>
                            <div className='skills'>TailwindCSS</div>
                            <div className='skills'>Bootstrap</div>
                            <div className='skills'>GIT</div>
                            <div className='skills skills-long'>Responsive Design</div>
                            <div className='skills'>Firebase</div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Home
