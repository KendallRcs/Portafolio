import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import projects from './data/projects';
import logo from './img/logo_web.png';
import profile from './img/profile_pic.jpeg';

const technologyGroups = [
  {
    title: 'Frontend y frameworks',
    description: 'SPA, SSR y experiencias multiplataforma enfocadas en producto.',
    items: [
      ['React', 'devicon-react-original'],
      ['Vue.js', 'devicon-vuejs-plain'],
      ['Nuxt', 'devicon-nuxtjs-plain'],
      ['Angular', 'devicon-angularjs-plain'],
      ['Ionic', 'devicon-ionic-original'],
    ],
  },
  {
    title: 'Lenguajes y estilos',
    description: 'Código tipado y sistemas visuales consistentes y mantenibles.',
    items: [
      ['JavaScript', 'devicon-javascript-plain'],
      ['TypeScript', 'devicon-typescript-plain'],
      ['Sass', 'devicon-sass-original'],
      ['Tailwind', 'devicon-tailwindcss-original'],
    ],
  },
  {
    title: 'Backend y datos',
    description: 'APIs mantenibles, persistencia y modelado de información.',
    items: [
      ['Node.js', 'devicon-nodejs-plain'],
      ['NestJS', 'devicon-nestjs-original'],
      ['Prisma', 'devicon-prisma-original'],
      ['MySQL', 'devicon-mysql-original'],
      ['PostgreSQL', 'devicon-postgresql-plain'],
      ['MongoDB', 'devicon-mongodb-plain'],
    ],
  },
  {
    title: 'Flujo y colaboración',
    description: 'Entrega continua, documentación y coordinación de equipos.',
    items: [
      ['Git', 'devicon-git-plain'],
      ['Docker', 'devicon-docker-plain'],
      ['Figma', 'devicon-figma-plain'],
      ['Jira', 'devicon-jira-plain'],
      ['Confluence', 'devicon-confluence-plain'],
    ],
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kendall-ramiro-contreras-salazar-b4360620b/',
    icon: 'devicon-linkedin-plain',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/KendallRcs',
    icon: 'devicon-github-original',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const formRef = useRef(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleForm = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const sendForm = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Por favor, completa todos los campos.');
      return;
    }

    const sendingToast = toast.loading('Enviando mensaje...');

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        },
      );
      toast.success('Mensaje enviado correctamente.', { id: sendingToast });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('No se pudo enviar. Escríbeme directamente por correo.', { id: sendingToast });
    }
  };

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Saltar al contenido</a>

      <header className="site-header">
        <div className="site-header__inner page-container">
          <a className="brand" href="#hero" aria-label="Ir al inicio">
            <img src={logo} alt="Kendall Contreras" />
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#hero">Inicio</a>
            <a href="#tech">Tecnologías</a>
            <a href="#projects">Proyectos</a>
            <a className="nav-cta" href="#contact">Hablemos</a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} id="mobile-navigation">
        <nav aria-label="Navegación móvil">
          <a href="#hero" onClick={closeMenu}>Inicio <span>01</span></a>
          <a href="#tech" onClick={closeMenu}>Tecnologías <span>02</span></a>
          <a href="#projects" onClick={closeMenu}>Proyectos <span>03</span></a>
          <a href="#contact" onClick={closeMenu}>Contacto <span>04</span></a>
        </nav>
        <div className="mobile-menu__footer">
          <p>Disponible para nuevos retos</p>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <main id="main-content">
        <section className="hero" id="hero">
          <div className="hero__glow hero__glow--one" />
          <div className="hero__glow hero__glow--two" />
          <div className="hero__inner page-container">
            <div className="hero__content">
              <div className="availability"><span /> Disponible para nuevos proyectos</div>
              <p className="eyebrow">Frontend Developer · Lima, Perú</p>
              <h1>Kendall<br /><span>Contreras.</span></h1>
              <p className="hero__lead">
                Diseño y construyo productos digitales que equilibran una interfaz cuidada,
                código mantenible y objetivos reales de negocio.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#projects">
                  Explorar proyectos
                </a>
                <a
                  className="button button--ghost"
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1yL5Ac7cxUIaV60Z5n7m-IwjvowQTmC_x/view?usp=sharing"
                >
                  Descargar CV
                </a>
              </div>
              <dl className="hero__stats">
                <div><dt>Web</dt><dd>Productos escalables</dd></div>
                <div><dt>Mobile</dt><dd>Experiencias híbridas</dd></div>
              </dl>
            </div>

            <div className="hero__visual" aria-label="Fotografía de Kendall Contreras">
              <div className="hero__visual-grid" />
              <img src={profile} alt="Kendall Contreras, Frontend Developer" />
              <div className="code-card" aria-hidden="true">
                <div><span /> <span /> <span /></div>
                <code><b>const</b> approach = {'{'}</code>
                <code>&nbsp;&nbsp;ux: <em>'intuitive'</em>,</code>
                <code>&nbsp;&nbsp;code: <em>'maintainable'</em>,</code>
                <code>&nbsp;&nbsp;product: <em>'useful'</em></code>
                <code>{'}'};</code>
              </div>
            </div>
          </div>
        </section>

        <section className="section tech-section" id="tech">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 · Capacidades</p>
                <h2>Tecnología con<br />criterio de producto.</h2>
              </div>
              <p>
                Selecciono herramientas según el contexto y construyo experiencias consistentes,
                accesibles y fáciles de evolucionar.
              </p>
            </div>

            <div className="tech-grid">
              {technologyGroups.map((group, index) => (
                <article className="tech-card" key={group.title}>
                  <div className="tech-card__number">0{index + 1}</div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.items.map(([name, icon]) => (
                      <li key={name}><i className={`${icon} colored`} aria-hidden="true" /><span>{name}</span></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="page-container">
            <div className="section-heading section-heading--light">
              <div>
                <p className="eyebrow">02 · Trabajo seleccionado</p>
                <h2>Productos pensados<br />para resolver.</h2>
              </div>
              <p>
                Una selección de plataformas web y móviles en las que participé desde la
                experiencia de usuario hasta la implementación técnica.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.id}>
                  <button type="button" onClick={() => setSelectedProject(project)} aria-label={`Ver proyecto ${project.title}`}>
                    <div className="project-card__media">
                      <div className="project-card__meta">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <span>{project.type}</span>
                      </div>
                      <img src={project.cover} alt={`Identidad visual de ${project.title}`} />
                    </div>
                    <div className="project-card__content">
                      <p className="project-card__client">{project.client}</p>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <div className="project-card__stack">
                        {project.stack.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
                      </div>
                      <div className="project-card__link">Ver proyecto</div>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="page-container contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">03 · Contacto</p>
              <h2>Construyamos algo<br /><span>que importe.</span></h2>
              <p>
                Si buscas un desarrollador que conecte diseño, producto y tecnología,
                conversemos sobre tu próximo reto.
              </p>
              <div className="contact-details">
                <a href="mailto:kendallramiro@gmail.com">
                  <span>Correo</span>
                  <strong>kendallramiro@gmail.com</strong>
                </a>
                <a href="https://wa.me/51970569642" target="_blank" rel="noreferrer">
                  <span>WhatsApp</span>
                  <strong>+51 970 569 642</strong>
                </a>
              </div>
            </div>

            <form className="contact-form" ref={formRef} onSubmit={sendForm}>
              <div className="contact-form__row">
                <label>
                  <span>Nombre</span>
                  <input name="name" value={form.name} onChange={handleForm} type="text" placeholder="Tu nombre" autoComplete="name" />
                </label>
                <label>
                  <span>Correo</span>
                  <input name="email" value={form.email} onChange={handleForm} type="email" placeholder="tu@correo.com" autoComplete="email" />
                </label>
              </div>
              <label>
                <span>Cuéntame sobre tu proyecto</span>
                <textarea name="message" value={form.message} onChange={handleForm} placeholder="Objetivo, alcance y cómo puedo ayudarte..." rows="6" />
              </label>
              <button className="button button--primary contact-form__submit" type="submit">
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container site-footer__inner">
          <div>
            <a className="brand" href="#hero"><img src={logo} alt="Kendall Contreras" /></a>
            <p>Frontend Developer enfocado en productos digitales.</p>
          </div>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                <i className={link.icon} />
              </a>
            ))}
          </div>
          <p className="site-footer__copyright">© {new Date().getFullYear()} Kendall Contreras</p>
        </div>
      </footer>

      <Modal
        show={Boolean(selectedProject)}
        onHide={() => setSelectedProject(null)}
        dialogClassName="project-modal"
        centered
        aria-labelledby="project-modal-title"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <div>
                <p>{selectedProject.client}</p>
                <Modal.Title id="project-modal-title">{selectedProject.title}</Modal.Title>
              </div>
            </Modal.Header>
            <Modal.Body>
              <Carousel interval={null} className="project-gallery">
                {selectedProject.gallery.map((image, index) => (
                  <Carousel.Item key={`${selectedProject.id}-${index}`}>
                    <img src={image} alt={`${selectedProject.title}, evidencia ${index + 1}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="project-modal__details">
                <div>
                  <p className="project-modal__label">El proyecto</p>
                  {selectedProject.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <aside>
                  <div><span>Rol</span><strong>{selectedProject.role}</strong></div>
                  <div><span>Plataforma</span><strong>{selectedProject.type}</strong></div>
                  <div>
                    <span>Tecnologías</span>
                    <div className="project-modal__tags">
                      {selectedProject.stack.map((technology) => <b key={technology}>{technology}</b>)}
                    </div>
                  </div>
                </aside>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>

      <Toaster position="bottom-right" toastOptions={{ duration: 3500 }} />
    </div>
  );
}

export default App;
