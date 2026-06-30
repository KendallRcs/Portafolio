import gymPoseLogo from '../img/GYMPOSE_logo.png';
import gym1 from '../img/gym1.png';
import gym3 from '../img/gym3.png';
import gym4 from '../img/gym4.png';
import gym5 from '../img/gym5.png';
import gym6 from '../img/gym6.png';
import gym7 from '../img/gym7.png';
import gym8 from '../img/gym8.png';
import gym10 from '../img/gym10.png';
import gym11 from '../img/gym11.png';
import jjcLogo from '../img/JJC_logo.png';
import rest1 from '../img/rest1.jpg';
import rest2 from '../img/rest2.jpg';
import rest3 from '../img/rest3.jpg';
import rest4 from '../img/rest4.jpg';
import rest5 from '../img/rest5.jpg';
import rest6 from '../img/rest6.jpg';
import cruzLogo from '../img/CRUZ_logo.jpg';
import csur1 from '../img/csur1.jpg';
import csur2 from '../img/csur2.jpg';
import csur3 from '../img/csur3.jpg';
import csur4 from '../img/csur4.jpg';
import csur5 from '../img/csur5.jpg';
import csur6 from '../img/csur6.jpg';
import csur7 from '../img/csur7.jpg';
import pamolsaLogo from '../img/PAMOLSA_logo.webp';
import pam1 from '../img/pam1.jpg';
import pam2 from '../img/pam2.jpg';
import pam3 from '../img/pam3.jpg';
import pam4 from '../img/pam4.jpg';

// Para agregar un proyecto, duplica un objeto y reemplaza su contenido.
// La cuadrícula, el modal y la galería se generan automáticamente desde esta lista.
const projects = [
  {
    id: 'gympose',
    title: 'GymPose',
    client: 'Proyecto personal',
    type: 'Aplicación móvil',
    cover: gymPoseLogo,
    gallery: [gym1, gym3, gym4, gym5, gym6, gym7, gym8, gym10, gym11],
    summary: 'Aplicación móvil que analiza videos de entrenamiento para ayudar a mejorar la técnica durante los ejercicios.',
    description: [
      'GymPose es una aplicación móvil creada para optimizar posturas en ejercicios de gimnasio. Permite grabar y analizar videos, evaluando su precisión mediante un modelo de Machine Learning.',
      'Desarrollé la aplicación móvil, el backend y su despliegue en DigitalOcean. También coordiné la integración con el microservicio encargado del modelo de Machine Learning.',
    ],
    stack: ['Ionic', 'Vue 3', 'NestJS', 'Prisma', 'DigitalOcean'],
    role: 'Desarrollo end-to-end',
  },
  {
    id: 'restricciones',
    title: 'Restricciones',
    client: 'JJC-SAT · Simplex Go',
    type: 'Web + Mobile',
    cover: jjcLogo,
    gallery: [rest2, rest3, rest1, rest4, rest5, rest6],
    summary: 'Sistema empresarial para centralizar, asignar y dar seguimiento a requerimientos y restricciones operativas.',
    description: [
      'Restricciones es un sistema de gestión de requerimientos desarrollado para JJC-SAT. Incluye una aplicación web y una aplicación móvil para administrar y seguir restricciones dentro de la empresa.',
      'La solución mejora la organización de los procesos y facilita una comunicación clara entre los diferentes departamentos.',
    ],
    stack: ['Nuxt', 'Ionic', 'Angular', 'NestJS'],
    role: 'Frontend web y mobile',
  },
  {
    id: 'cruz-del-sur',
    title: 'Registro de actividades',
    client: 'Cruz del Sur · Simplex Go',
    type: 'Web + Mobile',
    cover: cruzLogo,
    gallery: [csur1, csur2, csur3, csur4, csur5, csur6, csur7],
    summary: 'Plataforma multiplataforma para registrar y gestionar actividades y servicios operativos de la empresa.',
    description: [
      'La solución permite a Cruz del Sur gestionar sus actividades y servicios desde una aplicación web y una aplicación móvil, ofreciendo flexibilidad y acceso a distintos perfiles de usuario.',
      'Fue diseñada para mejorar el seguimiento de las operaciones y mantener la información centralizada entre los equipos.',
    ],
    stack: ['Nuxt', 'Ionic', 'NestJS'],
    role: 'Frontend web y mobile',
  },
  {
    id: 'accesos',
    title: 'Control de accesos',
    client: 'Pamolsa · Simplex Go',
    type: 'Web + Mobile',
    cover: pamolsaLogo,
    gallery: [pam1, pam2, pam3, pam4],
    summary: 'Solución para registrar y controlar entradas y salidas de empleados y vehículos en instalaciones corporativas.',
    description: [
      'Accesos es una solución desarrollada para Pamolsa que gestiona el ingreso y salida de empleados y vehículos mediante experiencias web y móvil.',
      'El sistema agiliza el registro de visitas, refuerza el control operativo y mantiene trazabilidad de los movimientos dentro de las instalaciones.',
    ],
    stack: ['Vue.js', 'Ionic', 'Angular', 'NestJS'],
    role: 'Frontend web y mobile',
  },
];

export default projects;
