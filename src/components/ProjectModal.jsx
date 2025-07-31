// src/components/ProjectModal.jsx
import React, { useEffect } from 'react';

function ProjectModal({ project, onClose, isOpen }) {
    // Add effect to control body scroll when modal is open/closed
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        // Cleanup function
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen || !project) {
        return null;
    }

    return (
        // The modal overlay. It's hidden/shown based on 'isOpen' state.
        // The 'opacity-0 pointer-events-none' classes are for the hidden state,
        // allowing smooth transition when 'isOpen' becomes true.
        <div className={`modal fixed inset-0 flex items-center justify-center z-50 p-4 ${isOpen ? '' : 'opacity-0 pointer-events-none'}`}>
            {/* The modal content box. It scales and fades in/out. */}
            <div className={`modal-content bg-white rounded-xl shadow-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-300 ease-in-out`}>
                <div className="flex justify-between items-center mb-6">
                    <h3 id="modal-project-title" className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    <button id="close-modal-btn" onClick={onClose} className="text-gray-500 hover:text-gray-800 text-3xl leading-none">&times;</button>
                </div>
                <img id="modal-project-image" src={project.image} alt={project.title} className="rounded-md mb-6 w-full h-64 object-cover" />
                <p id="modal-project-description" className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                <div className="mb-4">
                    <p className="font-semibold text-gray-800">Technologies Used:</p>
                    <p id="modal-project-tech" className="text-gray-600">{project.tech}</p>
                </div>
                <div className="mb-4">
                    <p className="font-semibold text-gray-800">My Role:</p>
                    <p id="modal-project-role" className="text-gray-600">{project.role}</p>
                </div>
                <div className="mb-4">
                    <p className="font-semibold text-gray-800">Challenges & Solutions:</p>
                    <p id="modal-project-challenges" className="text-gray-600">{project.challenges}</p>
                </div>
                <div className="mb-6">
                    <p className="font-semibold text-gray-800">Key Outcomes:</p>
                    <p id="modal-project-outcomes" className="text-gray-600">{project.outcomes}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    {/* Conditionally render Live Demo link only if liveLink exists and is not '#' */}
                    {project.liveLink && project.liveLink !== "#" && (
                        <a id="modal-project-live" href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#DAA520] text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2">
                            Live Demo <span className="text-lg">🔗</span>
                        </a>
                    )}
                    {/* Conditionally render GitHub Repo link only if githubLink exists and is not '#' */}
                    {project.githubLink && project.githubLink !== "#" && (
                        <a id="modal-project-github" href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2">
                            GitHub Repo <span className="text-lg">🐙</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
