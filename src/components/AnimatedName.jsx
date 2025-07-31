import React from 'react';
import { motion } from 'framer-motion';

const AnimatedName = ({ firstName, lastName }) => {
    return (
        <div className="flex items-center text-xl font-bold">
            <motion.span
                whileHover={{ scale: 1.1 }}
                className="text-gray-800 dark:text-blue-300"
            >
                {firstName}
            </motion.span>
            <motion.span
                whileHover={{ scale: 1.1 }}
                className="text-gray-800 dark:text-blue-300 ml-1"
            >
                {lastName}
            </motion.span>
        </div>
    );
};

export default AnimatedName;
