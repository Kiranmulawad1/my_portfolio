// src/sections/Projects.jsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import projectsData from '../data/projects.js';

function Projects() {
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

    return (
        <section id="projects" className="py-20 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Projects</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">A selection of my work demonstrating my skills and problem-solving approach.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {projectsData.map(project => (
                        <ProjectCard key={project.id} project={project} onDetailsClick={handleDetailsClick} />
                    ))}
                </div>
            </div>
            <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    );
}

export default Projects;
