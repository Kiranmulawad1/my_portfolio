import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GradientMesh = ({ theme }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Gradient mesh animation
        const animate = () => {
            time += 0.003;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Create gradient meshes
            const gradients = theme === 'dark'
                ? [
                    { x: 0.2, y: 0.3, color: 'rgba(218, 165, 32, 0.08)' },
                    { x: 0.8, y: 0.2, color: 'rgba(139, 69, 19, 0.06)' },
                    { x: 0.5, y: 0.8, color: 'rgba(255, 215, 0, 0.05)' },
                    { x: 0.1, y: 0.7, color: 'rgba(184, 134, 11, 0.07)' },
                ]
                : [
                    { x: 0.2, y: 0.3, color: 'rgba(218, 165, 32, 0.12)' },
                    { x: 0.8, y: 0.2, color: 'rgba(255, 215, 0, 0.08)' },
                    { x: 0.5, y: 0.8, color: 'rgba(184, 134, 11, 0.10)' },
                    { x: 0.1, y: 0.7, color: 'rgba(139, 69, 19, 0.06)' },
                ];

            gradients.forEach((grad, index) => {
                const offsetX = Math.sin(time + index * 2) * 100;
                const offsetY = Math.cos(time + index * 2) * 100;

                const x = canvas.width * grad.x + offsetX;
                const y = canvas.height * grad.y + offsetY;

                const gradient = ctx.createRadialGradient(
                    x, y, 0,
                    x, y, canvas.width * 0.5
                );

                gradient.addColorStop(0, grad.color);
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <motion.canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    );
};

export default GradientMesh;
