import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import projectsData from '../data/projects.js';

import useInView from '../hooks/useInView.jsx';

const Projects = () => {
    const projectsRef = useRef(null);
    const inView = useInView(projectsRef);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleDetailsClick = (projectId) => {
        const project = projectsData.find(p => p.id === projectId);
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" ref={projectsRef} className="py-20 dark:bg-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Projects</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">A selection of my work demonstrating my skills and problem-solving approach.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {projectsData.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className={`relative rounded-xl overflow-hidden group ${i === 0 || i === 3 ? "md:col-span-2" : ""
                                }`}
                            variants={itemVariants}
                        >
                            <ProjectCard project={project} onDetailsClick={handleDetailsClick} variants={itemVariants} isBento={true} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    );
};

export default Projects;
