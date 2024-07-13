import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

function App() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear"
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          {/* <img src={require('./img/logo.png')}></img> */}
          <h1 className='logo'><span className='change-color'>Kendall</span> Rcs</h1>
          <nav>
            <ul>
              <li><a href='#hero'>Inicio</a></li>
              <li><a href='#tech'>Tecnologías</a></li>
              <li><a href='#projects'>Proyectos</a></li>
              <li><a href='#contact'>Contacto</a></li>
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
              <button className='hero__btn__cv'>Ver CV</button>
              <button className='hero__btn__contact'>Contactar</button>
            </div>
          </div>
          <img className='hero__img' src={require('./img/profile.png')}></img>
        </div>
      </div>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}  className='tech' id='tech'>
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
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='projects' id='projects'>
        <div className='projects__container container'>
          <h2 className='subTitle primaryColor'>Mis Proyectos</h2>
          <p className='text--gray'>Estos son algunos de los proyectos en los que he trabajado</p>
          <div className='projects__list'>
            <ScrollAnimation animateIn='flipInX' animateOnce={true} className='projects__list__item'>
              <img src="./img/project1.png"></img>
              <div className='projects__list__item__text'>
                <h3>Proyecto 1</h3>
                <p>Descripción del proyecto 1</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='flipInX' animateOnce={true} className='projects__list__item'>
              <img src="./img/project2.png"></img>
              <div className='projects__list__item__text'>
                <h3>Proyecto 2</h3>
                <p>Descripción del proyecto 2</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='flipInX' animateOnce={true} className='projects__list__item'>
              <img src="./img/project3.png"></img>
              <div className='projects__list__item__text'>
                <h3>Proyecto 3</h3>
                <p>Descripción del proyecto 3</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}  className='contact container' id='contact'>
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
      <footer className='footer'>
        <div className='footer__social'>
          <i class="devicon-linkedin-plain"></i>
          <i class="devicon-github-original"></i>
        </div>
        <div className='footer__contact'>
          <div className='footer__contact__item'>
            <img src='https://cdn.icon-icons.com/icons2/2065/PNG/512/at_symbol_icon_125064.png'></img>
            <p>kendallramiro@gmail.com</p>
          </div>
          <div className='footer__contact__item'>
            <img src='https://static-00.iconduck.com/assets.00/call-icon-1023x1024-7i32yqt3.png'></img>
            <p>+51 970569642</p>
          </div>
        </div>
        <p>© 2024 Kendall Ramiro Contreras Salazar</p>

      </footer>
    </div>
  );
}

export default App;
