import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onShowResume }) => {
    return (
        <section id="hero" className="bg-transparent min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Floating decorative blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-gold-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gold-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 py-24 text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-extrabold leading-tight"
                >
                    <span className="text-gray-800 dark:text-white">Hi, I'm </span>
                    <span className="gradient-text">Kiran Mulawad</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium"
                >
                    Applied Data Science & Analytics Master's Student | AI/Data Engineer
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-3 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
                >
                    Crafting intuitive experiences and insightful solutions.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="group relative inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold py-4 px-10 rounded-full text-lg overflow-hidden transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-hover"
                    >
                        <span className="relative z-10">View My Work</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <button
                        onClick={onShowResume}
                        className="group relative inline-block bg-transparent border-2 border-gray-700 dark:border-gray-300 text-gray-700 dark:text-gray-300 font-bold py-4 px-10 rounded-full text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-hover"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">View CV 📄</span>
                        <div className="absolute inset-0 bg-gray-700 dark:bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;