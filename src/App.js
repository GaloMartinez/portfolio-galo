
import background from "./img/bgminimalistextended.png";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Proyects from './components/Proyects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Section from "./components/Section";
import useScrollSpy from "./components/useScrollSpy";
import './App.css';
import Footer from "./components/Footer";

function App() {

  const activeId = useScrollSpy();



 

  return (
    
      <div className="App" >
        <div className="img-bg-app" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>


          <header className="App-header">
            <NavBar activeId={activeId}  />
            <Section id="home" title="" Component={Home} />
            <Section id="aboutme" title="" Component={AboutMe}/>
            <Section id="proyects" title="" Component={Proyects}/>
            <Section id="contact" title="" Component={Contact} />
           <Footer/>
          </header>
        </div>
      </div >
  
  );
}

export default App;
