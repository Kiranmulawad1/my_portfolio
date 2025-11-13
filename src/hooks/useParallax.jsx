import { useEffect, useState, useRef } from 'react';

const useParallax = (speed = 0.5) => {
    const [offset, setOffset] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const scrolled = window.scrollY;
                const elementTop = rect.top + scrolled;
                const elementHeight = rect.height;
                const viewportHeight = window.innerHeight;

                // Only apply parallax when element is in viewport
                if (scrolled + viewportHeight > elementTop && scrolled < elementTop + elementHeight) {
                    const offset = (scrolled - elementTop) * speed;
                    setOffset(offset);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return { ref, offset };
};

export default useParallax;
