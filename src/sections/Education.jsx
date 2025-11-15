// src/sections/Education.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../components/TimelineItem';
import educationData from '../data/education';

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

function Education() {
    const educationRef = useRef(null);
    const inView = useInView(educationRef);

    return (
        <section id="education" ref={educationRef} className="py-20 bg-transparent relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Education</span>
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        My academic background and achievements.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto relative">
                    {educationData.map((item, index) => (
                        <TimelineItem
                            key={item.id}
                            item={item}
                            index={index}
                            isLast={index === educationData.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
