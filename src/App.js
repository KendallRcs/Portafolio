import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import {
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  FolderOpen,
  Mail,
  MessageCircle,
  Send,
  Target,
} from 'lucide-react';
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
    shortLabel: 'in',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/KendallRcs',
    icon: 'devicon-github-original',
    shortLabel: 'gh',
  },
];

const craftPrinciples = [
  ['Product thinking', 'Entender el contexto antes de decidir interfaz.'],
  ['Frontend craft', 'Sistemas visuales sólidos, accesibles y mantenibles.'],
  ['Delivery', 'Código listo para evolucionar con equipos reales.'],
];

const caseNotes = [
  ['Challenge', Target],
  ['Approach', ClipboardList],
  ['Outcome', CheckCircle2],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
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
    const { name, value } = event.target;

    setForm((current) => ({ ...current, [name]: value }));
    setFormErrors((current) => ({ ...current, [name]: '' }));
  };

  const validateForm = () => {
    const errors = {};

    if (!form.name.trim()) errors.name = 'Indica tu nombre para saber con quién conversar.';
    if (!form.email.trim()) {
      errors.email = 'Indica un correo para poder responderte.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = 'Usa un correo válido, por ejemplo nombre@dominio.com.';
    }
    if (!form.message.trim()) errors.message = 'Cuéntame el objetivo o contexto del proyecto.';

    return errors;
  };

  const sendForm = async (event) => {
    event.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
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
      setFormErrors({});
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
                    <span>{link.shortLabel}</span>
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
              <div className="availability"><span /> <p>Disponible para nuevos proyectos</p></div>
              <p className="eyebrow">Frontend Developer · Lima, Perú</p>
              <h1>Kendall<br /><span>Contreras.</span></h1>
              <p className="hero__lead">
                Diseño y construyo productos digitales que equilibran una interfaz cuidada,
                código mantenible y objetivos reales de negocio.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#projects">
                  <FolderOpen size={16} strokeWidth={1.9} aria-hidden="true" />
                  Explorar proyectos
                </a>
                <a
                  className="button button--ghost"
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1hFmZ3LKIjCNEJoZiqzijrBpctmRULaWQ/view?usp=sharing"
                >
                  <Download size={16} strokeWidth={1.9} aria-hidden="true" />
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
                      <dl className="project-card__specs">
                        <div>
                          <dt>Rol</dt>
                          <dd>{project.role}</dd>
                        </div>
                        <div>
                          <dt>Plataforma</dt>
                          <dd>{project.type}</dd>
                        </div>
                      </dl>
                      <div className="project-card__stack">
                        {project.stack.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
                      </div>
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
              <div className="craft-principles" aria-label="Principios de trabajo">
                {craftPrinciples.map(([title, description]) => (
                  <div key={title}>
                    <span>{title}</span>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
              <div className="contact-details">
                <a href="mailto:kendallramiro@gmail.com">
                  <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
                  <span>Correo</span>
                  <strong>kendallramiro@gmail.com</strong>
                </a>
                <a href="https://wa.me/51970569642" target="_blank" rel="noreferrer">
                  <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" />
                  <span>WhatsApp</span>
                  <strong>+51 970 569 642</strong>
                </a>
              </div>
            </div>

            <form className="contact-form" ref={formRef} onSubmit={sendForm}>
              <div className="contact-form__row">
                <label>
                  <span>Nombre</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    type="text"
                    placeholder="Tu nombre"
                    autoComplete="name"
                    aria-invalid={Boolean(formErrors.name)}
                    aria-describedby={formErrors.name ? 'name-error' : undefined}
                  />
                  {formErrors.name && <small className="field-error" id="name-error">{formErrors.name}</small>}
                </label>
                <label>
                  <span>Correo</span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    type="email"
                    placeholder="tu@correo.com"
                    autoComplete="email"
                    aria-invalid={Boolean(formErrors.email)}
                    aria-describedby={formErrors.email ? 'email-error' : undefined}
                  />
                  {formErrors.email && <small className="field-error" id="email-error">{formErrors.email}</small>}
                </label>
              </div>
              <label>
                <span>Cuéntame sobre tu proyecto</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleForm}
                  placeholder="Objetivo, alcance y cómo puedo ayudarte..."
                  rows="6"
                  aria-invalid={Boolean(formErrors.message)}
                  aria-describedby={formErrors.message ? 'message-error' : undefined}
                />
                {formErrors.message && <small className="field-error" id="message-error">{formErrors.message}</small>}
              </label>
              <button className="button button--primary contact-form__submit" type="submit">
                <Send size={16} strokeWidth={1.9} aria-hidden="true" />
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
                <i className={link.icon} aria-hidden="true" />
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
              <div className="project-modal__heading">
                <p><FileText size={14} strokeWidth={2} aria-hidden="true" /> case file / {selectedProject.client}</p>
                <Modal.Title id="project-modal-title">{selectedProject.title}</Modal.Title>
              </div>
            </Modal.Header>
            <Modal.Body>
              <div className="project-modal__hero">
                <div className="project-modal__summary">
                  <p className="project-modal__label">Resumen</p>
                  <h3>{selectedProject.summary}</h3>
                </div>
                <aside className="project-modal__spec-sheet" aria-label="Ficha técnica del proyecto">
                  <div><span>Rol</span><strong>{selectedProject.role}</strong></div>
                  <div><span>Plataforma</span><strong>{selectedProject.type}</strong></div>
                  <div><span>Cliente</span><strong>{selectedProject.client}</strong></div>
                  <div>
                    <span>Tecnologías</span>
                    <div className="project-modal__tags">
                      {selectedProject.stack.map((technology) => <b key={technology}>{technology}</b>)}
                    </div>
                  </div>
                </aside>
              </div>
              <div className="project-modal__body-grid">
                <Carousel interval={null} className="project-gallery">
                  {selectedProject.gallery.map((image, index) => (
                    <Carousel.Item key={`${selectedProject.id}-${index}`}>
                      <img src={image} alt={`${selectedProject.title}, evidencia ${index + 1}`} />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="project-modal__case-notes">
                  {caseNotes.map(([label, Icon]) => (
                    <div key={label}>
                      <span><Icon size={14} strokeWidth={2} aria-hidden="true" /> {label}</span>
                      <p>{selectedProject[label.toLowerCase()]}</p>
                    </div>
                  ))}
                </div>
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
