// src/views/Portfolio.tsx
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import { projects } from '../data/projects';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Portfolio() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar scrollToSection={scrollToSection} refs={{ aboutRef, projectsRef, contactRef }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
        {/* Hero */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
          }}
          className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
        >
          <motion.img
            src="/fotoperfil.jpg"
            alt="Luis Ángel Almazán De Jesús"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold">Luis Ángel Almazán De Jesús</h1>
            <p className="text-xl text-gray-600 mt-2">Full Stack Developer</p>
            <p className="text-md text-gray-500 mt-1">
              Construyo soluciones digitales eficientes, seguras y escalables.
            </p>
          </motion.div>
        </motion.section>

        {/* Sobre Mí */}
        <motion.section
          ref={aboutRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center scroll-mt-32"
        >
          <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Soy Ingeniero en Mecatrónica con formación especializada en desarrollo web Full Stack.
            Me gradué del bootcamp Henry, donde desarrollé aplicaciones modernas usando tecnologías como
            React, NestJS, TypeScript, PostgreSQL, Docker, Auth0 y más. Me apasiona construir soluciones escalables
            centradas en el usuario y con buenas prácticas de arquitectura y seguridad.
          </p>
        </motion.section>

        {/* Sección de Proyectos */}
        <motion.section
          ref={projectsRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="scroll-mt-32"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.section>

       {/* Contacto */}
<motion.section
  ref={contactRef}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeUp}
  className="text-center space-y-6"
>
  <h2 className="text-3xl font-bold mb-4">Contáctame</h2>
  <p className="text-gray-700 mb-4">
    ¿Quieres trabajar conmigo? ¡Estoy disponible para nuevas oportunidades!
  </p>

  <div className="flex justify-center gap-8 text-blue-600 text-2xl">
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/luis-angel-almazán-de-jesús-1404181a9"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="hover:text-blue-800 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.23 8.14h4.5v11.36h-4.5V8.14zm7.5 0h4.31v1.58h.06c.6-1.14 2.07-2.34 4.25-2.34 4.55 0 5.39 2.99 5.39 6.88v7.24h-4.5v-6.41c0-1.53-.03-3.49-2.13-3.49-2.13 0-2.46 1.66-2.46 3.38v6.52h-4.5V8.14z" />
      </svg>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/LuisAngelAlmazan"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="hover:text-gray-800 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4-1.61-4-1.61a3.15 3.15 0 00-1.32-1.74c-1.08-.74.08-.72.08-.72a2.5 2.5 0 011.83 1.23 2.57 2.57 0 003.5 1 2.58 2.58 0 01.76-1.61c-2.66-.3-5.47-1.34-5.47-5.93a4.63 4.63 0 011.23-3.2 4.3 4.3 0 01.12-3.16s1-.32 3.3 1.23a11.4 11.4 0 016 0c2.31-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 01.12 3.16 4.63 4.63 0 011.23 3.2c0 4.6-2.81 5.62-5.49 5.92a2.88 2.88 0 01.82 2.23v3.3c0 .32.22.7.83.58A12 12 0 0012 0z" />
      </svg>
    </a>

    {/* Gmail */}
    <a
      href="mailto:almazanluis23@gmail.com"
      aria-label="Correo Electrónico"
      className="hover:text-red-600 transition text-red-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      </svg>
    </a>
  </div>
</motion.section>

      </div>
    </div>
  );
}
