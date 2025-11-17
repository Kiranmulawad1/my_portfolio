import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectModal = ({ project, onClose, isOpen }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen || !project) {
        return null;
    }

    const modalVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            className="modal fixed inset-0 flex items-center justify-center z-50 p-4"
        >
            <div className="modal-content bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 dark:hover:text-white text-3xl leading-none">&times;</button>
                </div>
                <img src={project.image} alt={project.title} className="rounded-md mb-6 w-full h-64 object-cover" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{project.description}</p>
                <div className="mb-4">
                    <p className="font-semibold text-gray-800 dark:text-white">Technologies Used:</p>
                    <p className="text-gray-600 dark:text-gray-300">{project.tech}</p>
                </div>
                <div className="mb-4">
                    <p className="font-semibold text-gray-800 dark:text-white">My Role:</p>
                    <p className="text-gray-600 dark:text-gray-300">{project.role}</p>
                </div>
                <div className="mb-4">
                    <p className="font-semibold text-gray-800 dark:text-white">Challenges & Solutions:</p>
                    <p className="text-gray-600 dark:text-gray-300">{project.challenges}</p>
                </div>
                <div className="mb-6">
                    <p className="font-semibold text-gray-800 dark:text-white">Key Outcomes:</p>
                    <p className="text-gray-600 dark:text-gray-300">{project.outcomes}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    {project.liveLink && project.liveLink !== "#" && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#3B82F6] text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2">
                            Live Demo <span className="text-lg">🔗</span>
                        </a>
                    )}
                    {project.githubLink && project.githubLink !== "#" && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2">
                            GitHub Repo <span className="text-lg">🐙</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectModal;
