import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function App() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='hero'>
        <div className='hero__container container'>
          <div className='hero__text'>
            <h1>Kendall Contreras</h1>
            <h3>Front-End Developer</h3>
            <p>Soy un apasionado desarrollador Front-End con un fuerte enfoque en la creación de aplicaciones web visualmente atractivas y fáciles de usar.</p>
            <div className='hero__btn'>
              <button className='hero__btn__cv'>Ver CV</button>
              <button className='hero__btn__contact'>Contactar</button>
            </div>
          </div>
          <img src="./img/profile.png"></img>
        </div>
      </div>
      <section className='tech'>
        <h2>Tecnologías</h2>
        <p>Estas son las tecnologías en las que me especializo</p>
        <Carousel 
          responsive={responsive}
          showDots={false}
          autoPlay={true}
          autoPlaySpeed={1000}
          customTransition="all 1s linear"
          infinite={true}
          arrows={false}
        >
          <div className='tech__list__item'>
            <img src="./img/react.png"></img>
            <p>React</p>
          </div>
          <div className='tech__list__item'>
            <img src="./img/react.png"></img>
            <p>Vuejs</p>
          </div>
          <div className='tech__list__item'>
            <img src="./img/react.png"></img>
            <p>Angular</p>
          </div>
          <div className='tech__list__item'>
            <img src="./img/react.png"></img>
            <p>NodeJS</p>
          </div>
          <div className='tech__list__item'>
            <img src="./img/react.png"></img>
            <p>NestJS</p>
          </div>
          <div className='tech__list__item'>
            <img src="./img/react.png"></img>
            <p>JavaScript</p>
          </div>
          <div className='tech__list__item'>
            <img src="./img/react.png"></img>
            <p>TypeScript</p>
          </div>
          <div className='tech__list__item'>
            <img src="./img/react.png"></img>
            <p>Ionic</p>
          </div>
         
        </Carousel>
      </section>
      <section className='projects'>
        <h2>Mis Proyectos</h2>
        <p>Estos son algunos de los proyectos en los que he trabajado</p>
        <div className='projects__list'>
          <div className='projects__list__item'>
            <img src="./img/project1.png"></img>
            <h3>Proyecto 1</h3>
            <p>Descripción del proyecto 1</p>
          </div>
          <div className='projects__list__item'>
            <img src="./img/project2.png"></img>
            <h3>Proyecto 2</h3>
            <p>Descripción del proyecto 2</p>
          </div>
          <div className='projects__list__item'>
            <img src="./img/project3.png"></img>
            <h3>Proyecto 3</h3>
            <p>Descripción del proyecto 3</p>
          </div>
        </div>
      </section>
      <section className='contact'>
        <h2>Contacto</h2>
        <p>Si deseas ponerte en contacto conmigo, no dudes en contactarte conmigo</p>
        <form>
          <label>
            Nombre:
            <input type='text' placeholder='Nombre'></input>
          </label>
          <label>
            Correo:
            <input type='text' placeholder='Correo'></input>
          </label>
          <textarea placeholder='Mensaje'></textarea>
          <button>Enviar</button>
        </form>
      </section>
      <footer>
        <p>Hecho con ❤️ por Kendall Contreras</p>
      </footer>
    </div>
  );
}

export default App;
