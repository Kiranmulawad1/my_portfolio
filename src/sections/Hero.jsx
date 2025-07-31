import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 py-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight"
                >
                    Hi, I'm Kiran Mulawad
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                >
                    Applied Data Science & Analytics Master's Student | AI/Data Engineer
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-2 text-md text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
                >
                    Crafting intuitive experiences and insightful solutions.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <a href="#projects" className="inline-block bg-[#DAA520] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">View My Work</a>
                    <a href="Kiran_Mulawad_CV.pdf" download="Kiran_Mulawad_CV.pdf" className="inline-block bg-gray-700 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">Download CV 📄</a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
