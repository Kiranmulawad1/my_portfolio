import React from 'react';
import { motion } from 'framer-motion';

const AnimatedName = ({ firstName, lastName }) => {
    const letterVariants = {
        hover: {
            y: -3,
            transition: { type: 'spring', stiffness: 500, damping: 15 }
        }
    };

    return (
        <motion.a
            href="#hero"
            className="flex items-center gap-1 text-2xl md:text-3xl font-black tracking-tight cursor-pointer"
            whileHover="hover"
        >
            {/* First Name */}
            <motion.span
                className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                variants={letterVariants}
            >
                {firstName}
            </motion.span>

            {/* Dot separator */}
            <motion.span
                className="text-violet-500 mx-0.5"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                .
            </motion.span>

            {/* Last Name */}
            <motion.span
                className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
                variants={letterVariants}
            >
                {lastName}
            </motion.span>
        </motion.a>
    );
};

export default AnimatedName;
