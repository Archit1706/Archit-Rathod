"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CosmicCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const rafId = useRef();

    useEffect(() => {
        let timeoutId;

        const updateMousePosition = (e) => {
            // Use requestAnimationFrame for smooth updates
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }

            rafId.current = requestAnimationFrame(() => {
                setMousePosition({ x: e.clientX, y: e.clientY });
                setIsVisible(true);
            });

            // Hide cursor when not moving
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsVisible(true); // Keep visible, just reduce opacity if needed
            }, 100);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add listeners for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
            clearTimeout(timeoutId);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen">
            {/* Main cursor dot */}
            <motion.div
                className="absolute"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 28,
                    mass: 0.5,
                }}
            >
                <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-500/50"
                    style={{
                        filter: 'blur(0.5px)',
                        boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)'
                    }} />
            </motion.div>

            {/* Outer ring */}
            <motion.div
                className="absolute border border-purple-400/40 rounded-full"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.8 : 1,
                    opacity: isHovering ? 0.8 : 0.4,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    mass: 0.8,
                }}
            >
                <div className="w-10 h-10" />
            </motion.div>

            {/* Trailing glow */}
            {isHovering && (
                <motion.div
                    className="absolute bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
                    animate={{
                        x: mousePosition.x - 30,
                        y: mousePosition.y - 30,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                    }}
                >
                    <div className="w-15 h-15" />
                </motion.div>
            )}
        </div>
    );
};

export default CosmicCursor;