import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -8 }}
            className="group"
        >
            <div className="glass-card p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-violet-500/20 transition-all duration-300 border border-transparent hover:border-violet-500/20">
                {/* Header with icon and period */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                        {item.icon && (
                            <motion.span
                                className="text-3xl"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {item.icon}
                            </motion.span>
                        )}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                {item.title}
                            </h3>
                            {item.company && (
                                <p className="text-violet-600 dark:text-violet-400 font-semibold">
                                    {item.company}
                                </p>
                            )}
                            {item.institution && (
                                <p className="text-violet-600 dark:text-violet-400 font-semibold">
                                    {item.institution}
                                </p>
                            )}
                        </div>
                    </div>
                    <span className="inline-flex items-center px-4 py-1.5 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-full text-sm font-medium whitespace-nowrap">
                        {item.period}
                    </span>
                </div>

                {/* Description */}
                {item.description && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {item.description}
                    </p>
                )}

                {/* Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                    <ul className="space-y-2 mb-4">
                        {item.achievements.map((achievement, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm"
                            >
                                <span className="text-violet-500 mt-0.5 flex-shrink-0">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span>{achievement}</span>
                            </motion.li>
                        ))}
                    </ul>
                )}

                {/* Skills */}
                {item.skills && item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                        {item.skills.map((skill, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-violet-500/20 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default TimelineItem;
