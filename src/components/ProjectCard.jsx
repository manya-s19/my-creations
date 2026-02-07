
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    // INCREASED SIZE: max-w-md -> max-w-lg to scale with the larger book
    <motion.div
      className="relative bg-white p-6 shadow-lg paper-texture w-full max-w-lg mx-auto flex flex-col gap-5"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        scale: 1.01,
        rotate: 0.5
      }}
      style={{
        border: `5px solid ${project.color}`,
        transform: 'rotate(-0.5deg)',
        boxShadow: '10px 10px 0px rgba(0,0,0,0.1)' // Solid shadow
      }}
    >
      {/* Image section with polaroid style - Top (Vertical Layout) */}
      <div className="w-full shrink-0">
          <div className="bg-[#F4F1BB] p-4 pt-10 pb-4 shadow-sm border border-gray-200 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200 border-[3px] border-[#031927]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
      </div>

      {/* Content section - Bottom (Vertical Layout) */}
      <div className="w-full flex flex-col space-y-4">
        <div>
            {/* Title Block */}
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h3 className="handwritten text-3xl md:text-4xl font-bold text-[#031927] leading-none">
                {project.title}
                </h3>
                <span className="bg-[#031927] text-[#F4F1BB] text-sm font-bold px-3 py-1 rounded">
                    {project.date || "2026"}
                </span>
            </div>
            
            <div className="h-[2px] w-full bg-[#031927] opacity-20 mb-3" />

            {/* Description */}
            <p className="text-[#22333B] text-base leading-relaxed font-medium mb-4">
            {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-4">
            <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, index) => (
                <span
                    key={index}
                    className="px-3 py-1 bg-[#22333B] text-[#F4F1BB] text-sm font-bold border border-[#031927] shadow-[2px_2px_0px_#031927]"
                >
                    {tech}
                </span>
                ))}
            </div>
            </div>
        </div>

        {/* Key features */}
        <div className="bg-[#f0f9fa] p-4 border-l-[4px] border-[#9BC1BC]">
          <h4 className="handwritten text-xl font-semibold text-[#031927] mb-2">
            Highlights:
          </h4>
          <ul className="grid grid-cols-1 gap-2">
            {project.keyFeatures.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-[#22333B] flex items-center truncate">
                <span className="text-[#ED6A5A] mr-2 text-xl leading-none">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
