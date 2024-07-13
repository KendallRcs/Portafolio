import React, { useState, useRef } from 'react';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import { useMediaQuery } from 'react-responsive'
import img1Pro1 from './img/JJC_logo.png';
import img2Pro1 from './img/rest1.jpg';
import img3Pro1 from './img/rest2.jpg';
import img4Pro1 from './img/rest3.jpg';
import img5Pro1 from './img/rest4.jpg';
import img6Pro1 from './img/rest5.jpg';
import img7Pro1 from './img/rest6.jpg';
import img1Pro2 from './img/CRUZ_logo.jpg';
import img2Pro2 from './img/csur1.jpg';
import img3Pro2 from './img/csur2.jpg';
import img4Pro2 from './img/csur3.jpg';
import img5Pro2 from './img/csur4.jpg';
import img6Pro2 from './img/csur5.jpg';
import img7Pro2 from './img/csur6.jpg';
import img8Pro2 from './img/csur7.jpg';
import img1Pro3 from './img/PAMOLSA_logo.webp';
import img2Pro3 from './img/pam1.jpg';
import img3Pro3 from './img/pam2.jpg';
import img4Pro3 from './img/pam3.jpg';
import img5Pro3 from './img/pam4.jpg';


/* import img5 from './img/CRUZ_logo.jpg';
import img6 from './img/csur1.jpg';
import img7 from './img/csur2.jpg';
import img8 from './img/csur3.jpg'; */
function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const imagesProject1 = [img1Pro1, img2Pro1, img3Pro1, img4Pro1, img5Pro1, img6Pro1, img7Pro1];
  const imagesProject2 = [img1Pro2, img2Pro2, img3Pro2, img4Pro2, img5Pro2, img6Pro2, img7Pro2, img8Pro2];
  const imagesProject3 = [img1Pro3, img2Pro3, img3Pro3, img4Pro3, img5Pro3];
  const [currentImageProject1, setCurrentImageProject1] = useState(imagesProject1[0]);
  const [currentImageProject2, setCurrentImageProject2] = useState(imagesProject2[0]);
  const [currentImageProject3, setCurrentImageProject3] = useState(imagesProject3[0]);


  const intervalIdRef = useRef(null);

  const startImageRotation1 = () => {
    setCurrentImageProject1(imagesProject1[1]);
    let index = 0;
    intervalIdRef.current = setInterval(() => {
      index = (index + 1) % imagesProject1.length;
      if(index === 0) index = 1;
      setCurrentImageProject1(imagesProject1[index]);
    }, 2000);
  };

  const stopImageRotation1 = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
    setCurrentImageProject1(imagesProject1[0]);
  };

  
  const startImageRotation2 = () => {
    setCurrentImageProject2(imagesProject2[1]);
    let index = 0;
    intervalIdRef.current = setInterval(() => {
      index = (index + 1) % imagesProject2.length;
      if(index === 0) index = 1;
      setCurrentImageProject2(imagesProject2[index]);
    }, 2000);
  };
  const stopImageRotation2 = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
    setCurrentImageProject2(imagesProject2[0]);
  };


  const startImageRotation3 = () => {
    setCurrentImageProject3(imagesProject3[1]);
    let index = 0;
    intervalIdRef.current = setInterval(() => {
      index = (index + 1) % imagesProject3.length;
      if(index === 0) index = 1;
      setCurrentImageProject3(imagesProject3[index]);
    }, 2000);
  };
  const stopImageRotation3 = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
    setCurrentImageProject3(imagesProject3[0]);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isMobile ? 3 : 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear"
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <h1 className='logo'><span className='change-color'>Kendall</span> Rcs</h1>
          <button className="menu-button" onClick={toggleMenu}>
            ☰
          </button>
          <nav className='nav-menu'>
            <ul>
              <li><a href='#hero'>Inicio</a></li>
              <li><a href='#tech'>Tecnologías</a></li>
              <li><a href='#projects'>Proyectos</a></li>
              <li><a href='#contact'>Contacto</a></li>
            </ul>
          </nav>
          <nav className={`nav-menu-responsive ${menuOpen ? '' : 'hidden'}`}>
              <h1 className='logo'><span className='change-color'>Kendall</span> Rcs</h1>
            <ul>
              <li><a href='#hero' onClick={toggleMenu}>Inicio</a></li>
              <li><a href='#tech' onClick={toggleMenu}>Tecnologías</a></li>
              <li><a href='#projects' onClick={toggleMenu}>Proyectos</a></li>
              <li><a href='#contact' onClick={toggleMenu}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className='hero' id='hero'>
        <div className='hero__container container'>
          <div className='hero__text'>
            <h1 className='title'><span className='primaryColor'>Kendall</span> Contreras</h1>
            <p>FullStack Developer</p>
            <p className='hero__text__p'>Soy un apasionado desarrollador FullStack con un fuerte enfoque en la creación de aplicaciones web visualmente atractivas y fáciles de usar.</p>
            <div className='hero__btn'>
              <a className='hero__btn__cv' target='_blank' href="https://drive.google.com/file/d/128JZ8x_Q3iIAJzHiAGt1YGdBLnlrXnVD/view?usp=sharing">Ver CV</a>
              <a className='hero__btn__contact' target='_blank' href="https://wa.me/970569642">Contactar</a>
            </div>
          </div>
          <img className='hero__img' src={require('./img/profile.png')}></img>
        </div>
      </div>
      <div id='tech'>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='tech'>
          <h2 className='subTitle'>Tecnologías</h2>
          <p className='text--gray'>Estas son las tecnologías en las que me especializo</p>
          <Slider 
            {...settings}
            className='tech__list'
            >
            <div className='tech__list__item'>
              <i class="devicon-react-original colored"></i>
              <p>React</p>
            </div>
            <div className='tech__list__item'>
              <i class="devicon-vuejs-plain colored"></i>
              <p>Vuejs</p>
            </div>
            <div className='tech__list__item'>
              <i class="devicon-angularjs-plain colored"></i>
              <p>Angular</p>
            </div>
            <div className='tech__list__item'>
              <i class="devicon-nodejs-plain colored"></i>
              <p>NodeJS</p>
            </div>
            <div className='tech__list__item'>
              <i class="devicon-nestjs-original colored"></i>
              <p>NestJS</p>
            </div>
            <div className='tech__list__item'>
              <i class="devicon-javascript-plain colored"></i>
              <p>JavaScript</p>
            </div>
            <div className='tech__list__item'>
              <i class="devicon-typescript-plain colored"></i>
              <p>TypeScript</p>
            </div>
            <div className='tech__list__item'>
              <i class="devicon-ionic-original colored"></i>
              <p>Ionic</p>
            </div>
            <div className='tech__list__item'>
              <i class="devicon-git-plain colored"></i>
              <p>Git</p>
            </div>
            <div className='tech__list__item'>
              <i class="devicon-figma-plain colored"></i>
              <p>Figma</p>
            </div>
          
          </Slider>
        </ScrollAnimation>
      </div>
      <div id='projects'>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='projects'>
          <div className='projects__container container'>
            <h2 className='subTitle primaryColor'>Mis Proyectos</h2>
            <p className='text--gray'>Estos son algunos de los proyectos para grandes empresas en los que he trabajado</p>
            <div className='projects__list'>
              <ScrollAnimation animateIn='flipInX' animateOnce={true}>
                <div className='projects__list__item' onMouseEnter={startImageRotation1} onMouseLeave={stopImageRotation1}>
                  <img src={currentImageProject1}></img>
                  <div className='projects__list__item__text'>
                    <h3>Proyecto 1</h3>
                    <p>Descripción del proyecto 1</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn='flipInX' animateOnce={true}>
                <div className='projects__list__item' onMouseEnter={startImageRotation2} onMouseLeave={stopImageRotation2}>
                  <img src={currentImageProject2}></img>
                  <div className='projects__list__item__text'>
                    <h3>Proyecto 2</h3>
                    <p>Descripción del proyecto 2</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn='flipInX' animateOnce={true}>
                <div className='projects__list__item' onMouseEnter={startImageRotation3} onMouseLeave={stopImageRotation3}>
                  <img src={currentImageProject3}></img>
                  <div className='projects__list__item__text'>
                    <h3>Proyecto 3</h3>
                    <p>Descripción del proyecto 3</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div id='contact'>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='contact container'>
          <h2 className='subTitle'>Contacto</h2>
          <p className='text--gray'>Si deseas ponerte en contacto conmigo, no dudes en dejarme un mensaje</p>
          <form>
            <label>
              <span>Nombre:</span>
              <input type='text' placeholder='Nombre'></input>
            </label>
            <label>
              Correo:
              <input type='text' placeholder='Correo'></input>
            </label>
            <label>
              Mensaje:
              <textarea placeholder='Mensaje' rows={10}></textarea>
            </label>
            <button className="contact__btn">Enviar</button>
          </form>
        </ScrollAnimation>
      </div>
      <footer className='footer'>
        <div className='footer__social'>
          <a href='https://www.linkedin.com/in/kendall-ramiro-contreras-salazar-b4360620b/' target='_blank'><i class="devicon-linkedin-plain"></i></a>
          <a href='https://github.com/KendallRcs' target='_blank'><i class="devicon-github-original"></i></a>
        </div>
        <div className='footer__contact'>
          <div className='footer__contact__item'>
            <img src={require("./img/email.png")}></img>
            <p>kendallramiro@gmail.com</p>
          </div>
          <div className='footer__contact__item'>
            <img src={require("./img/phone.png")}></img>
            <p>+51 970569642</p>
          </div>
        </div>
        <p>© 2024 Kendall Ramiro Contreras Salazar</p>

      </footer>
    </div>
  );
}

export default App;
