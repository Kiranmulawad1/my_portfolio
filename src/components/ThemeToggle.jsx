    // src/components/ThemeToggle.jsx
    import React, { useState, useEffect } from 'react';

    function ThemeToggle() {
        // Initialize theme based on localStorage or system preference
        const [theme, setTheme] = useState(() => {
            if (localStorage.getItem('theme')) {
                return localStorage.getItem('theme');
            }
            // Check system preference if no theme is set in localStorage
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        });

        // Effect to apply the theme class to the html element and update localStorage
        useEffect(() => {
            const root = document.documentElement; // This is the <html> element
            if (theme === 'dark') {
                root.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                root.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        }, [theme]); // Re-run effect whenever theme state changes

        // Function to toggle the theme
        const toggleTheme = () => {
            setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
        };

        return (
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 shadow-md flex items-center justify-center"
                aria-label="Toggle theme"
            >
                {theme === 'light' ? (
                    // Sun icon for light mode
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-13 0a1 1 0 100-2H2a1 1 0 100 2h1zm-.464-4.95l-.707-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414zm2.12 10.607a1 1 0 010-1.414l.706-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                ) : (
                    // Moon icon for dark mode
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                )}
            </button>
        );
    }

    export default ThemeToggle;
    