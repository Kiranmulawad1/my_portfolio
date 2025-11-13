import { useRef, useEffect } from 'react';

const useTilt = (options = {}) => {
    const ref = useRef(null);
    const { max = 15, perspective = 1000, scale = 1.05, speed = 400 } = options;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let timeout;

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * max;
            const rotateY = ((centerX - x) / centerX) * max;

            element.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
        };

        const handleMouseEnter = () => {
            clearTimeout(timeout);
            element.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
        };

        const handleMouseLeave = () => {
            timeout = setTimeout(() => {
                element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            }, 100);
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            clearTimeout(timeout);
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [max, perspective, scale, speed]);

    return ref;
};

export default useTilt;
