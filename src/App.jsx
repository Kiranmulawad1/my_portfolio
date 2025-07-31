// src/App.jsx
import React, { useEffect } from 'react';
// Import your components and sections
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Sections
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Education from './sections/Education.jsx';
import Contact from './sections/Contact.jsx';

function App() {
    // For smooth scrolling and active nav links in React
    useEffect(() => {
        const sections = document.querySelectorAll('main section');
        const navLinks = document.querySelectorAll('.nav-link');

        const handleScroll = () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                // Adjust this offset based on your sticky header height (e.g., 80px)
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
        // Initial call to set active link if page is loaded scrolled
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="antialiased">
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
