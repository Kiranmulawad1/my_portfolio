import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const increment = end / (duration * 60); // 60 fps
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, 1000 / 60);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return (
        <span ref={counterRef}>
            {prefix}{count}{suffix}
        </span>
    );
};

const StatsSection = () => {
    const stats = [
        { icon: '🚀', label: 'Projects Completed', value: 4, suffix: '+' },
        { icon: '💼', label: 'Years Experience', value: 2, suffix: '+' },
        { icon: '🎓', label: 'Certifications', value: 5, suffix: '+' },
        { icon: '⭐', label: 'Client Satisfaction', value: 100, suffix: '%' }
    ];

    return (
        <section className="py-16 bg-transparent relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-3xl p-8 md:p-12"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl mb-3">{stat.icon}</div>
                                <div className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                                    <AnimatedCounter
                                        end={stat.value}
                                        duration={2}
                                        suffix={stat.suffix}
                                    />
                                </div>
                                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export { AnimatedCounter, StatsSection };
