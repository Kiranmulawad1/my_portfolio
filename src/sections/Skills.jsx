// src/sections/Skills.jsx
import React from 'react';

function Skills() {
    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Skills</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">A blend of technical expertise and creative problem-solving.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center text-gray-800 dark:text-white">
                        <div className="text-4xl mb-4">💻</div>
                        <h3 className="text-xl font-bold mb-2">Programming</h3>
                        <p className="text-gray-600 dark:text-gray-300">Python, SQL, R, HTML, JS</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center text-gray-800 dark:text-white">
                        <div className="text-4xl mb-4">🧠</div>
                        <h3 className="text-xl font-bold mb-2">ML & DL</h3>
                        <p className="text-gray-600 dark:text-gray-300">Scikit-learn, PyTorch, TensorFlow, Hugging Face Transformers</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center text-gray-800 dark:text-white">
                        <div className="text-4xl mb-4">⚙️</div>
                        <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
                        <p className="text-gray-600 dark:text-gray-300">ETL, Data Pipelines, Apache Airflow, APIs, PostgreSQL, MySQL, SQLite</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center text-gray-800 dark:text-white">
                        <div className="text-4xl mb-4">☁️</div>
                        <h3 className="text-xl font-bold mb-2">Cloud & Tools</h3>
                        <p className="text-gray-600 dark:text-gray-300">GCP, BigQuery, Azure, Docker, Git, Streamlit, Pinecone</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center text-gray-800 dark:text-white">
                        <div className="text-4xl mb-4">📈</div>
                        <h3 className="text-xl font-bold mb-2">Visualization</h3>
                        <p className="text-gray-600 dark:text-gray-300">Tableau, Excel, SAS Visual Analytics</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center text-gray-800 dark:text-white">
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="text-xl font-bold mb-2">Soft Skills</h3>
                        <p className="text-gray-600 dark:text-gray-300">Collaboration, Agile, Communication</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center text-gray-800 dark:text-white">
                        <div className="text-4xl mb-4">🗣️</div>
                        <h3 className="text-xl font-bold mb-2">Languages</h3>
                        <p className="text-gray-600 dark:text-gray-300">English (Fluent), German (A2), Kannada (Fluent), Hindi (Fluent)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
