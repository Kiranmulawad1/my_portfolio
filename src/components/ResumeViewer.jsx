import React from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';

// This is a necessary step for react-pdf to work correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// The file path is a simple string that references the public folder
const resumePDF = '/Kiran_Mulawad_CV.pdf';

const ResumeViewer = ({ onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl w-full h-[80vh] flex flex-col overflow-hidden"
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">Kiran's CV</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white text-3xl leading-none"
                    >
                        &times;
                    </button>
                </div>
                <div className="flex-grow overflow-auto border rounded">
                    <Document file={resumePDF}>
                        <Page pageNumber={1} renderMode="canvas" scale={1.5} />
                    </Document>
                </div>
                <div className="mt-4 text-center">
                    <a
                        href={resumePDF}
                        download="Kiran_Mulawad_CV.pdf"
                        className="inline-block bg-[#DAA520] text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                    >
                        Download PDF
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ResumeViewer;