// src/sections/Hero.jsx
import React from 'react';

function Hero() {
    return (
        <section id="hero" className="bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">Hi, I'm Kiran Mulawad</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Applied Data Science & Analytics Master's Student | AI/Data Engineer</p>
                <p className="mt-2 text-md text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Crafting intuitive experiences and insightful solutions.</p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#projects" className="inline-block bg-[#DAA520] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">View My Work</a>
                    <a href="Kiran_Mulawad_CV.pdf" download="Kiran_Mulawad_CV.pdf" className="inline-block bg-gray-700 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">Download CV 📄</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
