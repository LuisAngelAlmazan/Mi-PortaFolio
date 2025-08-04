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
          {/* ... el resto de tus iconos y links */}
        </motion.section>
      </div>
    </div>
  );
}
