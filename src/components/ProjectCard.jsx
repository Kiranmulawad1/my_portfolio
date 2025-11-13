import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onDetailsClick, variants }) => {
    return (
        <motion.div
            className="glass-card p-6 rounded-2xl shadow-xl project-card max-w-xs mx-auto cursor-hover overflow-hidden group"
            whileHover={{ scale: 1.05, y: -5 }}
            variants={variants}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Image container with overlay effect */}
            <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-gold-500 transition-colors duration-300">
                {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                {project.description.split('.')[0] + '.'}
            </p>

            {/* Button with gradient effect */}
            <button
                onClick={() => onDetailsClick(project.id)}
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold py-2.5 px-4 rounded-lg text-sm hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
                View Details
            </button>
        </motion.div>
    );
};

export default ProjectCard;
