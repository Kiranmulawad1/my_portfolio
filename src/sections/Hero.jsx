import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import IconCloud from '../components/IconCloud.jsx';
import TypeWriter from '../components/TypeWriter.jsx';

const Hero = ({ onShowResume }) => {
    const { scrollY } = useScroll();

    // Parallax transforms
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const y3 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section id="hero" className="bg-transparent min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Floating decorative blobs with parallax */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-20 left-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute top-40 right-10 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
            />
            <motion.div
                style={{ y: y3 }}
                className="absolute -bottom-8 left-20 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
            />

            <div className="container mx-auto px-6 py-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 block mb-2">
                                Hi, I'm
                            </span>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
                                <span
                                    className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm"
                                    style={{
                                        backgroundSize: '200% 200%',
                                        animation: 'gradientShift 4s ease infinite',
                                    }}
                                >
                                    Kiran
                                </span>
                                <br />
                                <span
                                    className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 bg-clip-text text-transparent"
                                    style={{
                                        backgroundSize: '200% 200%',
                                        animation: 'gradientShift 4s ease infinite',
                                        animationDelay: '0.5s',
                                    }}
                                >
                                    Mulawad
                                </span>
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium h-8"
                        >
                            <TypeWriter
                                words={['AI Engineer', 'Data Engineer', 'Data Scientist']}
                                typingSpeed={80}
                                deletingSpeed={40}
                                pauseTime={1500}
                            />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-3 text-lg text-gray-500 dark:text-gray-400"
                        >
                            Crafting intuitive experiences and insightful solutions.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-6"
                        >
                            <a
                                href="#projects"
                                className="group relative inline-block bg-gradient-to-r from-violet-500 to-violet-600 text-white font-bold py-4 px-10 rounded-full text-lg overflow-hidden transition-all duration-300 hover:shadow-glow hover:scale-105"
                            >
                                <span className="relative z-10">View My Work</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                            <button
                                onClick={onShowResume}
                                className="group relative inline-block bg-transparent border-2 border-gray-700 dark:border-gray-300 text-gray-700 dark:text-gray-300 font-bold py-4 px-10 rounded-full text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
                            >
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">View CV 📄</span>
                                <div className="absolute inset-0 bg-gray-700 dark:bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 flex justify-center"
                    >
                        <IconCloud />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;