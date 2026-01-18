import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Background = ({ theme }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Draw dot grid pattern
        const drawDotGrid = () => {
            const dotSpacing = 30;
            const dotRadius = 1;
            const dotColor = theme === 'dark'
                ? 'rgba(139, 92, 246, 0.15)'
                : 'rgba(139, 92, 246, 0.12)';

            for (let x = 0; x < canvas.width; x += dotSpacing) {
                for (let y = 0; y < canvas.height; y += dotSpacing) {
                    ctx.beginPath();
                    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
                    ctx.fillStyle = dotColor;
                    ctx.fill();
                }
            }
        };

        // Aurora/gradient effect
        const drawAurora = () => {
            const gradients = theme === 'dark'
                ? [
                    { x: 0.15, y: 0.2, color: 'rgba(139, 92, 246, 0.12)', size: 0.6 },
                    { x: 0.85, y: 0.15, color: 'rgba(124, 58, 237, 0.08)', size: 0.5 },
                    { x: 0.5, y: 0.85, color: 'rgba(167, 139, 250, 0.06)', size: 0.7 },
                    { x: 0.1, y: 0.75, color: 'rgba(109, 40, 217, 0.1)', size: 0.4 },
                ]
                : [
                    { x: 0.15, y: 0.2, color: 'rgba(139, 92, 246, 0.08)', size: 0.6 },
                    { x: 0.85, y: 0.15, color: 'rgba(124, 58, 237, 0.06)', size: 0.5 },
                    { x: 0.5, y: 0.85, color: 'rgba(167, 139, 250, 0.05)', size: 0.7 },
                    { x: 0.1, y: 0.75, color: 'rgba(109, 40, 217, 0.07)', size: 0.4 },
                ];

            gradients.forEach((grad, index) => {
                // Gentle floating motion
                const offsetX = Math.sin(time + index * 1.5) * 80;
                const offsetY = Math.cos(time * 0.8 + index * 2) * 60;

                const x = canvas.width * grad.x + offsetX;
                const y = canvas.height * grad.y + offsetY;

                const gradient = ctx.createRadialGradient(
                    x, y, 0,
                    x, y, canvas.width * grad.size
                );

                gradient.addColorStop(0, grad.color);
                gradient.addColorStop(0.5, grad.color.replace(/[\d.]+\)$/, '0.02)'));
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            });
        };

        const animate = () => {
            time += 0.002;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw aurora first (underneath)
            drawAurora();

            // Draw dot grid on top
            drawDotGrid();

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
            transition={{ duration: 1.2 }}
        />
    );
};

export default Background;
