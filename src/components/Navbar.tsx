// src/components/Navbar.tsx
import type { FC, RefObject } from 'react';
import { motion } from 'framer-motion';

type NavbarProps = {
  scrollToSection: (ref: RefObject<HTMLElement | null>) => void;
  refs: {
    aboutRef: RefObject<HTMLElement | null>;
    projectsRef: RefObject<HTMLElement | null>;
    contactRef: RefObject<HTMLElement | null>;
  };
};

const Navbar: FC<NavbarProps> = ({ scrollToSection, refs }) => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md py-4 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-blue-600">Luis Ángel</h1>
        <div className="space-x-4">
          <button
            onClick={() => scrollToSection(refs.aboutRef)}
            className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
          >
            Sobre mí
          </button>
          <button
            onClick={() => scrollToSection(refs.projectsRef)}
            className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection(refs.contactRef)}
            className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
          >
            Contáctame
          </button>
          <motion.a
            href="/cv-luis-angel-almazan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            CV
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
