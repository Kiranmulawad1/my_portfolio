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
        <section id="skills" ref={skillsRef} className="py-20 bg-white dark:bg-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Skills</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">A blend of technical expertise and creative problem-solving.</p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                >
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center text-gray-800 dark:text-white"
                            variants={itemVariants}
                        >
                            <div className="text-4xl mb-4">{skill.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
