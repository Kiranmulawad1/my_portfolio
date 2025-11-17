// src/components/ResumeViewer.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";

// ✅ Serve the pdf.js worker from your own app (no CORS/CSP issues)
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

// (optional) nicer text/selection layers
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export default function ResumeViewer({ onClose }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(800);
  const [err, setErr] = useState(null);
  const [numPages, setNumPages] = useState(0); // 👈 track pages

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setWidth(Math.min(containerRef.current.clientWidth - 24, 1100));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Public asset path-safe URL
  const base =
    (typeof import.meta !== "undefined" && import.meta.env?.BASE_URL) ||
    (typeof process !== "undefined" && process.env?.PUBLIC_URL) ||
    "/";
  const cvUrl = `${base.replace(/\/+$/, "")}/Kiran_Mulawad_CV.pdf`;

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl max-w-4xl w-full h-[80vh] flex flex-col overflow-hidden"
        initial={{ scale: .96, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96, y: 8 }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Kiran&apos;s CV</h2>
          <button onClick={onClose} className="text-3xl leading-none text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">&times;</button>
        </div>

        <div ref={containerRef} className="flex-grow overflow-auto border rounded-md bg-gray-50 dark:bg-gray-800">
          {err ? (
            <div className="p-6 text-center space-y-3">
              <p className="text-red-600">Couldn’t render the PDF.</p>
              <a className="underline" href={cvUrl} target="_blank" rel="noreferrer">Open PDF in new tab</a>
            </div>
          ) : (
            <Document
                file={cvUrl}
                onLoadSuccess={({ numPages }) => {
                    // optional: log or clamp if fewer than 2 pages
                    if (numPages < 2) console.warn(`PDF has only ${numPages} page(s).`);
                }}
                onLoadError={(e) => { console.error("onLoadError:", e); setErr(e); }}
                onSourceError={(e) => { console.error("onSourceError:", e); setErr(e); }}
                loading={<div className="p-6 text-center">Loading PDF…</div>}
                >
                {/* Page 1 */}
                <Page
                    pageNumber={1}
                    width={Math.max(320, Math.floor(width))}
                    renderTextLayer
                    renderAnnotationLayer
                    className="m-0"
                />

                {/* Page 2 (only if exists) */}
                <Page
                    pageNumber={2}
                    width={Math.max(320, Math.floor(width))}
                    renderTextLayer
                    renderAnnotationLayer
                    className="mt-6"   // normal visual gap, not seamless
                />
            </Document>

          )}
        </div>

        <div className="mt-4 text-center">
          <a href={cvUrl} download="Kiran_Mulawad_CV.pdf"
             className="inline-block bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
            Download PDF
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
