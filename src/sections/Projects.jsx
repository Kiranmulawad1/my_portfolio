import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import projectsData from '../data/projects.js';

const useInView = (ref) => {
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
            }
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, [ref]);
    return inView;
};

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
        <section id="projects" ref={projectsRef} className="py-20 bg-transparent relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">My Projects</span>
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A selection of my work demonstrating my skills and problem-solving approach.
                    </p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-2"
                >
                    {projectsData.map(project => (
                        <ProjectCard key={project.id} project={project} onDetailsClick={handleDetailsClick} variants={itemVariants} />
                    ))}
                </motion.div>
            </motion.div>
            <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    );
};

export default Projects;
