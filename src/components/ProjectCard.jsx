// src/components/ProjectCard.jsx
import React from 'react';

function ProjectCard({ project, onDetailsClick }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg project-card max-w-xs mx-auto">
            <img src={project.image} alt={project.title} className="rounded-md mb-3 w-full h-32 object-cover" />
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">{project.description.split('.')[0] + '.'}</p>
            <button
                onClick={() => onDetailsClick(project.id)}
                className="view-details-btn bg-[#DAA520] text-white font-bold py-1.5 px-3 rounded-lg text-sm hover:bg-opacity-90 transition-colors"
            >
                View Details
            </button>
        </div>
    );
}

export default ProjectCard;
