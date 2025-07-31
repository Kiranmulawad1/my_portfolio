import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle.jsx';

const Header = ({ theme, toggleTheme }) => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-sm"
        >
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <motion.a
                    href="#"
                    className="text-xl font-bold text-gray-800 dark:text-white"
                    whileHover={{ scale: 1.1 }}
                >
                    Kiran Mulawad
                </motion.a>
                <div className="hidden md:flex space-x-8 items-center">
                    <motion.a whileHover={{ scale: 1.1, color: '#DAA520' }} href="#about" className="nav-link text-gray-600 dark:text-gray-300">About</motion.a>
                    <motion.a whileHover={{ scale: 1.1, color: '#DAA520' }} href="#skills" className="nav-link text-gray-600 dark:text-gray-300">Skills</motion.a>
                    <motion.a whileHover={{ scale: 1.1, color: '#DAA520' }} href="#projects" className="nav-link text-gray-600 dark:text-gray-300">Projects</motion.a>
                    <motion.a whileHover={{ scale: 1.1, color: '#DAA520' }} href="#experience" className="nav-link text-gray-600 dark:text-gray-300">Experience</motion.a>
                    <motion.a whileHover={{ scale: 1.1, color: '#DAA520' }} href="#education" className="nav-link text-gray-600 dark:text-gray-300">Education</motion.a>
                    <motion.a whileHover={{ scale: 1.1, color: '#DAA520' }} href="#contact" className="nav-link text-gray-600 dark:text-gray-300">Contact</motion.a>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#contact"
                    className="hidden md:inline-block bg-[#DAA520] text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                    Let's Connect
                </motion.a>
            </nav>
        </motion.header>
    );
};

export default Header;
