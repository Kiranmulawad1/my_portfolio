import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/HD-Profile.png';

const useInView = (ref) => {
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
            }
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, [ref]);
    return inView;
};

const About = () => {
    const aboutRef = useRef(null);
    const inView = useInView(aboutRef);

    return (
        <section id="about" ref={aboutRef} className="py-20 bg-transparent relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 items-center"
            >
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-fit mx-auto relative"
                >
                    {/* Decorative gradient ring */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                    <div className="relative">
                        <img
                            src={profilePic}
                            alt="Kiran Mulawad Photo"
                            className="rounded-full w-72 h-72 shadow-2xl object-cover border-4 border-white/20 dark:border-gray-700/20"
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">About Me</span>
                    </h2>
                    <div className="glass-card p-6 rounded-2xl">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                            AI/Data Engineer passionate about building intelligent systems. I specialize in <span className="text-violet-600 dark:text-violet-400 font-semibold">LLMs, data pipelines, and cloud technologies</span> — turning complex data into actionable insights.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4 text-lg">
                            Master's in Applied Data Science, actively seeking full-time opportunities as an <span className="text-violet-600 dark:text-violet-400 font-semibold">AI Engineer, Data Engineer, or Data Scientist</span>.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
