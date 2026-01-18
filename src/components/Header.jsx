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
                    {[
                        { name: 'About', href: '#about' },
                        { name: 'Skills', href: '#skills' },
                        { name: 'Projects', href: '#projects' },
                        { name: 'Experience', href: '#experience' },
                        { name: 'Education', href: '#education' },
                        { name: 'Contact', href: '#contact' }
                    ].map((item) => (
                        <motion.a
                            key={item.name}
                            whileHover={{ scale: 1.1 }}
                            href={item.href}
                            className="nav-link animated-underline text-gray-600 dark:text-gray-300 font-medium"
                        >
                            {item.name}
                        </motion.a>
                    ))}
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#contact"
                    className="hidden md:inline-block bg-gradient-to-r from-violet-500 to-violet-600 text-white font-bold py-2.5 px-6 rounded-full hover:shadow-glow transition-all duration-300"
                >
                    Let's Connect
                </motion.a>
            </nav>
        </motion.header>
    );
};

export default Header;
