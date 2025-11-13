import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Education from './sections/Education.jsx';
import Contact from './sections/Contact.jsx';
import ResumeViewer from './components/ResumeViewer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import GradientMesh from './components/GradientMesh.jsx';

// Main App component
const App = () => {
    // State for light/dark theme
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        return 'dark';
    });
    
    // State to control the CV viewer modal
    const [showResume, setShowResume] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    
    // For smooth scrolling and active nav links
    useEffect(() => {
        const sections = document.querySelectorAll('main section');
        const navLinks = document.querySelectorAll('.nav-link');

        const handleScroll = () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const scrollY = window.scrollY + 80;
                if (scrollY >= sectionTop && scrollY < sectionTop + section.clientHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') && link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AnimatePresence>
            {/* Custom Cursor */}
            <CustomCursor />

            {/* Gradient Mesh Background */}
            <GradientMesh theme={theme} />

            <div className="antialiased font-inter bg-[#FDFBF7] dark:bg-gray-900 transition-colors duration-500 relative">
                <Header theme={theme} toggleTheme={toggleTheme} />
                <main className="relative z-10">
                    <Hero onShowResume={() => setShowResume(true)} />
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Education />
                    <Contact />
                </main>
                <Footer />
            </div>
            {/* The ResumeViewer is conditionally rendered here */}
            {showResume && (
                <AnimatePresence>
                    <ResumeViewer onClose={() => setShowResume(false)} />
                </AnimatePresence>
            )}
        </AnimatePresence>
    );
};

export default App;