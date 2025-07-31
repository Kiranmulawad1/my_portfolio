// src/sections/About.jsx
import React from 'react';
import profilePic from '../assets/HD-Profile.png';

function About() {
    return (
        <section id="about" className="py-20 dark:bg-gray-900">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-8 items-center">
                <div className="w-fit mx-auto">
                    <img src={profilePic} alt="Kiran Mulawad Photo" className="rounded-full w-64 h-64 shadow-lg object-cover" />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        An Applied Data Science and Analytics master's student with strong experience in AI tools, LLM-based projects, data engineering, and cloud technologies. I am an AI/Data Engineer with robust experience in Python-based data workflows, cloud data handling, and AI/NLP applications. I have built scalable semantic search pipelines with Ollama, Pinecone, and Streamlit.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                        Currently, I am completing my thesis on AI-based grant discovery automation at iiterate Technologies as part of a thesis internship. I am actively seeking AI Engineer or Data Engineer roles in innovative environments where I can apply my skills to solve complex problems and contribute to cutting-edge solutions.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
