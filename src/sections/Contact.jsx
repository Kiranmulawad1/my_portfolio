// src/sections/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <section id="contact" className="py-20 bg-transparent relative overflow-hidden">
            {/* Decorative gradient blobs */}
            <div className="absolute top-10 right-10 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Let's Connect</span>
                    </h2>
                    <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-700 dark:text-gray-300">
                        Feel free to reach out to me via email for any inquiries or collaborations.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <motion.a
                            href="mailto:kiranmulawad1@gmail.com"
                            className="group relative bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 px-10 rounded-full hover:shadow-glow transition-all duration-300 flex items-center gap-3 overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 text-lg">Email Me</span>
                            <span className="relative z-10 text-xl">✉️</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.a>
                    </div>

                    {/* Additional CTA card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-card max-w-2xl mx-auto mt-16 p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                            Let's Build Something Amazing Together
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;
