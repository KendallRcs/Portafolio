import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import { useMediaQuery } from 'react-responsive'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel'
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

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [projectSelected, setProjectSelected] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const imagesProject1 = [img3Pro1, img4Pro1, img2Pro1, img5Pro1, img6Pro1, img7Pro1];
  const imagesProject2 = [img2Pro2, img3Pro2, img4Pro2, img5Pro2, img6Pro2, img7Pro2, img8Pro2];
  const imagesProject3 = [img2Pro3, img3Pro3, img4Pro3, img5Pro3];
  let [imagesProjectSelected, setImagesProjectSelected] = useState([]);
  const [textProjectSelected, setTextProjectSelected] = useState('');
  const project1Description = "Restricciones es un sistema de gestión de requerimientos desarrollado para JJC-SAT. Este proyecto incluye tanto una aplicación web como una aplicación móvil. La aplicación permite a los usuarios gestionar y seguir de manera eficiente los diferentes requerimientos y restricciones dentro de la empresa.\n\nEl frontend fue desarrollado utilizando Vue.js para la versión Web y Ionic con Angular para la versión móvil. Para el backend, se utilizó NestJS\n\nEste sistema fue diseñado para mejorar la organización y el seguimiento de los requerimientos, asegurando una comunicación clara y eficiente entre los diferentes departamentos de JJC-SAT.";
  const project2Description = "El proyecto de registro de actividades y servicios fue desarrollado para Cruz del Sur, permitiendo a la empresa gestionar de manera eficiente sus actividades y servicios. Este sistema incluye una aplicación web y una aplicación móvil, proporcionando flexibilidad y accesibilidad a los usuarios.\n\nEl frontend fue desarrollado utilizando Vue.js para la versión Web y Ionic con Vue3 para la versión móvil. Para el backend, se utilizó NestJS.\n\nEste sistema fue diseñado para mejorar la organización y el seguimiento de las actividades y servicios, asegurando una comunicación clara y eficiente dentro de Cruz del Sur.";
  const project3Description = "Accesos es una solución desarrollada para Pamolsa, diseñada para gestionar las entradas y salidas de empleados y vehículos de la empresa. Este proyecto incluye tanto una aplicación web como una aplicación móvil. La aplicación permite a los usuarios registrar y controlar de manera eficiente el acceso al sitio, mejorando la seguridad y la gestión operativa.\n\nEl frontend fue desarrollado utilizando Vue.js para la versión Web y Ionic con Angular para la versión móvil. Para el backend, se utilizó NestJS.\n\nEste sistema fue diseñado para mejorar la organización y el seguimiento de los accesos, asegurando una comunicación clara y eficiente dentro de Pamolsa.";

  useEffect(() => {
    switch(projectSelected) {
      case 1:
        setImagesProjectSelected(imagesProject1)
        setTextProjectSelected(project1Description)
        break;
      case 2:
        setImagesProjectSelected(imagesProject2)
        setTextProjectSelected(project2Description)
        break;
      case 3:
        setImagesProjectSelected(imagesProject3)
        setTextProjectSelected(project3Description)
        break;
      default:
        imagesProjectSelected = [];
    }
  }, [projectSelected]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isMobile ? 3 : 7,
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

  const [form, setForm] = useState({name: '', email: '', message: ''});
  const formRef = useRef(null);
  const handleForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const resetForm = () => {
    setForm({name: '', email: '', message: ''});
  }

  const sendForm = (e) => {
    e.preventDefault();
    console.log(form);
    if(form.name === '' || form.email === '' || form.message === '' ){
      toast.error("Por favor, complete todos los campos", {
        duration: 3000,
          position: 'bottom-right',
      } );
      return;
  }else{
    /* toast.promise(
      (() => {emailjs.sendForm('service_d8ldbfv', 'template_76tjo5e', formRef.current, {publicKey: 'rzHMm3BziiHJs7uPs'})}),
       {
         loading: 'Enviando...',
         success: <b>Mensaje Enviado!</b>,
         error: <b>Hubo un error</b>,
       },
       {
          success: {
            duration: 3000,
            position: 'bottom-right',
          },
          error: {
            duration: 3000,
            position: 'bottom-right',
          }
       }
     ); */
      emailjs.sendForm('service_d8ldbfv', 'template_76tjo5e', formRef.current, {publicKey: 'rzHMm3BziiHJs7uPs'}).then(
          () => {
              toast.success("Mensaje Enviado", {
              duration: 3000,
              position: 'bottom-right',
              } );
              resetForm();
          },
          (error) => {
              toast.error(`Hubo un problema al enviar tu formulario. Por favor, intenta nuevamente. ${error}`, {
                  duration: 3000,
                  position: 'bottom-right',
              } );
              console.log("ERROR", error)
          },
      );
  }
  }

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
              <i class="devicon-mysql-original colored"></i>
              <p>MySQL</p>
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
                <div className='projects__list__item' onClick={() => {setShowModal(true); setProjectSelected(1)}}>
                  <img src={img1Pro1}></img>
                  <div className='projects__list__item__text'>
                    <h3>Restricciones</h3>
                    <p>Desarrollado en Simplex Go</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn='flipInX' animateOnce={true}>
                <div className='projects__list__item' onClick={() => {setShowModal(true); setProjectSelected(2)}}>
                  <img src={img1Pro2}></img>
                  <div className='projects__list__item__text'>
                    <h3>Cruz del Sur</h3>
                    <p>Desarrollado en Simplex Go</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn='flipInX' animateOnce={true}>
                <div className='projects__list__item' onClick={() => {setShowModal(true); setProjectSelected(3)}}>
                  <img src={img1Pro3}></img>
                  <div className='projects__list__item__text'>
                    <h3>Accesos</h3>
                    <p>Desarrollado en Simplex Go</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modalGallery"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {projectSelected === 1 ? 'Grupo JJC-SAT' : projectSelected === 2 ? 'Cruz del Sur' : 'Pamolsa'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
          { 
            imagesProjectSelected.map((image, index) => (
              <Carousel.Item interval={2000}>
                <img
                  className="carousel-img"
                  src={image}
                  alt={`Slide ${index}`}
                />
              </Carousel.Item>
            ))
          }
        </Carousel>
        <p className='modalGallery__text'>{textProjectSelected}</p>
        <div className='modalGallery__tech'>
          <div className='modalGallery__tech__front'>
            <h3>Front-End</h3>
            <div className='modalGallery__tech__item'>
              <i class="devicon-vuejs-plain colored"></i>
              <i class="devicon-ionic-original colored"></i>
              { projectSelected !== 2 && <i class="devicon-angularjs-plain colored"></i>}
            </div>
          </div>
          <div className='modalGallery__tech__back'>
            <h3>Back-End</h3>
            <div className='modalGallery__tech__item'>
              <i class="devicon-nestjs-plain colored"></i>
            </div>
          </div>
        </div>
        </Modal.Body>
      </Modal>
      <div id='contact'>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='contact container'>
          <h2 className='subTitle'>Contacto</h2>
          <p className='text--gray'>Si deseas ponerte en contacto conmigo, no dudes en dejarme un mensaje</p>
          <form ref={formRef} onSubmit={sendForm}>
            <label>
              <span>Nombre:</span>
              <input name="name" value={form.name} onChange={handleForm} type='text' placeholder='Nombre'></input>
            </label>
            <label>
              Correo:
              <input name="email" value={form.email} onChange={handleForm} type='text' placeholder='Correo'></input>
            </label>
            <label>
              Mensaje:
              <textarea name="message" value={form.message} onChange={handleForm} placeholder='Mensaje' rows={10}></textarea>
            </label>
            <button className="contact__btn" type="submit">Enviar</button>
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
      <Toaster />
    </div>
  );
}

export default App;
