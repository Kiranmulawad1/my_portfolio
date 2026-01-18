import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
    const isDark = theme === 'dark';

    // Sun rays animation
    const rayVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i) => ({
            scale: 1,
            opacity: 1,
            transition: { delay: i * 0.05, duration: 0.2 }
        })
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full p-1 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            style={{
                backgroundColor: isDark ? '#1e1b4b' : '#fef3c7',
            }}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Background gradient overlay */}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                    background: isDark
                        ? 'linear-gradient(to right, #312e81, #4c1d95)'
                        : 'linear-gradient(to right, #fde68a, #fbbf24)',
                }}
                initial={false}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.3 }}
            />

            {/* Sliding circle */}
            <motion.div
                className="relative w-6 h-6 rounded-full shadow-lg flex items-center justify-center overflow-hidden"
                style={{
                    backgroundColor: isDark ? '#8b5cf6' : '#f59e0b',
                }}
                initial={false}
                animate={{
                    x: isDark ? 32 : 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                }}
            >
                {/* Sun icon - Modern style with animated rays */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={false}
                    animate={{
                        opacity: isDark ? 0 : 1,
                        rotate: isDark ? -45 : 0,
                        scale: isDark ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Sun center */}
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />

                    {/* Sun rays */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-0.5 h-1 bg-white rounded-full"
                            style={{
                                transform: `rotate(${i * 45}deg) translateY(-6px)`,
                            }}
                            custom={i}
                            variants={rayVariants}
                            initial="hidden"
                            animate={isDark ? "hidden" : "visible"}
                        />
                    ))}
                </motion.div>

                {/* Moon icon - Crescent with stars */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={false}
                    animate={{
                        opacity: isDark ? 1 : 0,
                        rotate: isDark ? 0 : 45,
                        scale: isDark ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Crescent moon */}
                    <div className="relative">
                        <div className="w-3 h-3 bg-white rounded-full" />
                        <motion.div
                            className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: '#8b5cf6' }}
                            animate={{
                                x: isDark ? 0 : 5,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    {/* Tiny stars on moon */}
                    <motion.div
                        className="absolute top-1 right-1.5 w-0.5 h-0.5 bg-white rounded-full"
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Twinkling stars for dark mode */}
            {isDark && (
                <>
                    <motion.div
                        className="absolute w-1 h-1 bg-yellow-200 rounded-full"
                        style={{ top: '20%', left: '12%' }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.div
                        className="absolute w-0.5 h-0.5 bg-violet-200 rounded-full"
                        style={{ top: '65%', left: '20%' }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.4, 1],
                        }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 0.3,
                        }}
                    />
                    <motion.div
                        className="absolute w-0.5 h-0.5 bg-white rounded-full"
                        style={{ top: '35%', left: '28%' }}
                        animate={{
                            opacity: [0.4, 0.9, 0.4],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 0.7,
                        }}
                    />
                </>
            )}

            {/* Floating clouds for light mode */}
            {!isDark && (
                <motion.div
                    className="absolute w-2 h-1 bg-white/60 rounded-full"
                    style={{ top: '30%', right: '15%' }}
                    animate={{
                        x: [0, 3, 0],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            )}
        </motion.button>
    );
};

export default ThemeToggle;
