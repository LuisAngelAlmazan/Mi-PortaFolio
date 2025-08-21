import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tecnologias: string[];
  projectLink: string;
  imageUrl?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tecnologias,
  projectLink,
  imageUrl,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
  className="flex flex-col bg-white rounded-lg shadow-md p-6 h-full w-full max-w-sm mx-auto"
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full aspect-video object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 flex-grow">{description}</p>
      <div className="mt-4 mb-6">
        {tecnologias.map((tech, idx) => (
          <span
            key={idx}
            className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
      >
        Ver Proyecto
      </a>
    </motion.div>
  );
};

export default ProjectCard;
