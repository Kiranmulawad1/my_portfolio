// src/sections/Education.jsx
import React from 'react';

function Education() {
    return (
        <section id="education" className="py-20 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Education</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">My academic background.</p>
                </div>
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-gray-800 dark:text-white">
                        <h3 className="text-xl font-bold">M.Sc. Applied Data Science & Analytics</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">SRH Hochschule Heidelberg, Germany | October 2023 – Present</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-gray-800 dark:text-white">
                        <h3 className="text-xl font-bold">Bachelors of Computer Applications (BCA)</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">P.C. Jabin Science College, Hubballi, India | June 2019 – August 2022</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
