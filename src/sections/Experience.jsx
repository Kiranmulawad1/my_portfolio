// src/sections/Experience.jsx
import React from 'react';

function Experience() {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Experience</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">My professional journey.</p>
                </div>
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-gray-800 dark:text-white">
                        <h3 className="text-xl font-bold">Thesis Intern - AI Funding Finder</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">iiterate Technologies GmbH | April 2025 – Present</p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
                            <li>Built custom ETL pipelines for ingesting and embedding grant metadata.</li>
                            <li>Used Pinecone for vector search, Streamlit for UI, Llama for GPT recommendations.</li>
                            <li>Simulated real-world data engineering tasks: chunking, translation, reranking, citation.</li>
                            <li>Deployed and tested app in cloud-like dev setup.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
