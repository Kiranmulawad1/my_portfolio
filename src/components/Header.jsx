import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle.jsx';
import AnimatedName from './AnimatedName.jsx'; // Import the new component

const Header = ({ theme, toggleTheme }) => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="glass-card backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200/20 dark:border-gray-700/20"
        >
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Use the new AnimatedName component here */}
                <AnimatedName firstName="Kiran" lastName="Mulawad" />
                <div className="hidden md:flex space-x-8 items-center">
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#about"
                        className="nav-link animated-underline text-gray-600 dark:text-gray-300 font-medium cursor-hover"
                    >
                        About
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#skills"
                        className="nav-link animated-underline text-gray-600 dark:text-gray-300 font-medium cursor-hover"
                    >
                        Skills
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#projects"
                        className="nav-link animated-underline text-gray-600 dark:text-gray-300 font-medium cursor-hover"
                    >
                        Projects
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#experience"
                        className="nav-link animated-underline text-gray-600 dark:text-gray-300 font-medium cursor-hover"
                    >
                        Experience
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#education"
                        className="nav-link animated-underline text-gray-600 dark:text-gray-300 font-medium cursor-hover"
                    >
                        Education
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#contact"
                        className="nav-link animated-underline text-gray-600 dark:text-gray-300 font-medium cursor-hover"
                    >
                        Contact
                    </motion.a>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#contact"
                    className="hidden md:inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold py-2.5 px-6 rounded-full hover:shadow-glow transition-all duration-300 cursor-hover"
                >
                    Let's Connect
                </motion.a>
            </nav>
        </motion.header>
    );
};

export default Header;
