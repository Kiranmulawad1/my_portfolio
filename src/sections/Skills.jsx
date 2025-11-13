import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.js'; // Ensure the import path and file extension are correct

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

const Skills = () => {
    const skillsRef = useRef(null);
    const inView = useInView(skillsRef);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" ref={skillsRef} className="py-20 bg-transparent relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">My Skills</span>
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A blend of technical expertise and creative problem-solving.
                    </p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-6 rounded-2xl text-center text-gray-800 dark:text-white group cursor-hover hover:shadow-neu-light dark:hover:shadow-neu-dark transition-all duration-300"
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <motion.div
                                className="text-5xl mb-4 inline-block"
                                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                                transition={{ duration: 0.5 }}
                            >
                                {skill.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-gold-500 transition-colors duration-300">
                                {skill.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
