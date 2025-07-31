import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gray-800 text-white dark:bg-gray-950"
        >
            <div className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
                <p className="max-w-2xl mx-auto mb-8 text-gray-300">Connect with me on my social platforms:</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="https://www.linkedin.com/in/kiran-mulawad-4573b8229/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 dark:bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                        LinkedIn
                    </a>
                    <a href="https://github.com/Kiranmulawad1" target="_blank" rel="noopener noreferrer" className="bg-gray-700 dark:bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.799 8.205 11.387.6.111.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.49.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.13-3.18 0 0 1-.322 3.3-.998 1.125-.313 2.32-.47 3.515-.47.195 0 .39.01.585.03 1.2.14 2.385.45 3.515.998 2.3.676 3.3.998 3.3.998.67 1.657.265 2.877.13 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.21.69.825.57C20.565 21.802 24 17.305 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" />
                        </svg>
                        GitHub
                    </a>
                    <a href="https://www.instagram.com/kiran_mulawad1/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 dark:bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-1.691 4.919-1.691 4.919-4.919 4.919-1.265.058-1.645-.069-4.849-.069-3.204 0-3.584-.012-4.849-.069-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849 1.691-4.919 1.691-4.919 4.919-4.919zm0 2.163c-3.204 0-3.584.012-4.85.07-3.252.148-4.771 1.691-4.919 4.919-.058 1.265-.069 1.645-.069 4.849 0 3.204.012 3.584.069 4.849 1.691 4.919 1.691 4.919 4.919 4.919 1.265-.058 1.645-.069 4.849-.069 3.204 0 3.584.012 4.849-.069 3.252-.148 4.771-1.691 4.919-4.919.058-1.265.069-1.645.069-4.849 0-3.204-.012-3.584-.069-4.849-1.691-4.919-1.691-4.919-4.919-4.919zm0 5.838c-2.32 0-4.2 1.88-4.2 4.2s1.88 4.2 4.2 4.2 4.2-1.88 4.2-4.2-1.88-4.2-4.2-4.2zm0 2.163c1.015 0 1.837.822 1.837 1.837s-.822 1.837-1.837 1.837-1.837-.822-1.837-1.837.822-1.837 1.837-1.837zm6.262-7.272c-.817 0-1.48-.665-1.48-1.48s.663-1.48 1.48-1.48 1.48.665 1.48 1.48-.663 1.48-1.48 1.48z" />
                        </svg>
                        Instagram
                    </a>
                </div>
                <p className="mt-12 text-gray-400 text-sm">&copy; 2025 Kiran Mulawad. All rights reserved.</p>
            </div>
        </motion.footer>
    );
};

export default Footer;
