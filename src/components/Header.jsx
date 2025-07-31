// src/components/Header.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle.jsx';

function Header() {
    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">Kiran Mulawad</a>
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="#about" className="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">About</a>
                    <a href="#skills" className="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Skills</a>
                    <a href="#projects" className="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Projects</a>
                    <a href="#experience" className="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Experience</a>
                    <a href="#education" className="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Education</a>
                    <a href="#contact" className="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</a>
                    <ThemeToggle />
                </div>
                <a href="#contact" className="hidden md:inline-block bg-[#DAA520] text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors">Let's Connect</a>
            </nav>
        </header>
    );
}

export default Header;
