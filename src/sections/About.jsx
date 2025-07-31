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
        <section id="about" ref={aboutRef} className="py-20 dark:bg-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-8 items-center"
            >
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-fit mx-auto"
                >
                    <img src={profilePic} alt="Kiran Mulawad Photo" className="rounded-full w-64 h-64 shadow-lg object-cover" />
                </motion.div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        An Applied Data Science and Analytics master's student with strong experience in AI tools, LLM-based projects, data engineering, and cloud technologies. I am an AI/Data Engineer with robust experience in Python-based data workflows, cloud data handling, and AI/NLP applications. I have built scalable semantic search pipelines with Ollama, Pinecone, and Streamlit.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                        Currently, I am completing my thesis on AI-based grant discovery automation at iiterate Technologies as part of a thesis internship. I am actively seeking AI Engineer or Data Engineer roles in innovative environments where I can apply my skills to solve complex problems and contribute to cutting-edge solutions.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
