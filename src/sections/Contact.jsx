// src/sections/Contact.jsx
import React from 'react';

function Contact() {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Contact</h2>
                <p className="max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">Feel free to reach out to me via email for any inquiries or collaborations.</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="mailto:kiranmulawad1@gmail.com" className="bg-[#DAA520] text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors flex items-center gap-2">
                        Email Me <span className="text-lg">✉️</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
