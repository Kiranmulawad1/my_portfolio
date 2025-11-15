import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ item, index, isLast }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-center mb-12 md:mb-16"
        >
            {/* Timeline line */}
            {!isLast && (
                <div className="absolute left-4 md:left-1/2 top-12 w-0.5 h-full bg-gradient-to-b from-gold-500 to-transparent md:transform md:-translate-x-1/2"></div>
            )}

            {/* Content container */}
            <div className="flex flex-col md:flex-row items-start md:items-center w-full">
                {/* Left side (for even items on desktop) */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-3 md:pl-8'}`}>
                    <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="glass-card p-6 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-3 md:justify-end">
                            {item.icon && (
                                <span className="text-3xl">{item.icon}</span>
                            )}
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                {item.title}
                            </h3>
                        </div>

                        {item.company && (
                            <p className="text-gold-600 dark:text-gold-400 font-semibold mb-2">
                                {item.company}
                            </p>
                        )}

                        {item.institution && (
                            <p className="text-gold-600 dark:text-gold-400 font-semibold mb-2">
                                {item.institution}
                            </p>
                        )}

                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {item.period}
                        </p>

                        {item.description && (
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                {item.description}
                            </p>
                        )}

                        {item.achievements && item.achievements.length > 0 && (
                            <ul className="space-y-2">
                                {item.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {item.skills && item.skills.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                                {item.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-full text-xs font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Outer glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gold-500/30 animate-ping"></div>
                        {/* Main dot */}
                        <div className="relative w-8 h-8 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Right side spacer (for odd items on desktop) */}
                <div className="hidden md:block md:w-5/12"></div>
            </div>
        </motion.div>
    );
};

export default TimelineItem;
