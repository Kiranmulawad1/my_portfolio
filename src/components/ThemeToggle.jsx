import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <motion.button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 shadow-md flex items-center justify-center group"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="group-hover:rotate-180 transition-transform duration-500"
            >
                {theme === 'light' ? (
                    // Sun icon - Material Design style
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="4" strokeWidth="2" fill="currentColor"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/>
                    </svg>
                ) : (
                    // Moon icon - Material Design style
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05z"/>
                    </svg>
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
