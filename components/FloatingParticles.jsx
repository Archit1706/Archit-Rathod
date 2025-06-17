"uae client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = ({ count = 30 }) => {
    const [particles, setParticles] = useState([]);
    const [optimizedCount, setOptimizedCount] = useState(count);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Performance detection and optimization
        const detectAndOptimize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            setWindowSize({ width, height });

            // Device detection
            const isMobile = width <= 768;
            const isLowEnd = navigator.hardwareConcurrency <= 2 ||
                navigator.deviceMemory <= 4 ||
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            // Calculate optimized count based on device capabilities
            let newCount = count;

            if (isLowEnd) {
                newCount = Math.min(count, 10);
            } else if (isMobile) {
                newCount = Math.min(count, 15);
            } else if (width < 1200) {
                newCount = Math.min(count, 20);
            }

            setOptimizedCount(newCount);
        };

        detectAndOptimize();

        const handleResize = () => {
            detectAndOptimize();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [count]);

    useEffect(() => {
        const newParticles = [];

        for (let i = 0; i < optimizedCount; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2.5 + 1, // Smaller particles for better performance
                duration: Math.random() * 12 + 6, // Shorter durations
                delay: Math.random() * 3,
                opacity: Math.random() * 0.3 + 0.1, // Lower opacity for subtlety
                color: Math.random() > 0.5 ?
                    'bg-purple-400/30' :
                    Math.random() > 0.5 ? 'bg-blue-400/30' : 'bg-pink-400/30'
            });
        }
        setParticles(newParticles);
    }, [optimizedCount]);

    if (windowSize.width === 0 || particles.length === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className={`absolute rounded-full ${particle.color} blur-[0.5px]`}
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: particle.opacity,
                        willChange: 'transform, opacity',
                    }}
                    animate={{
                        y: [0, -40, 0], // Reduced movement for better performance
                        x: [0, Math.random() * 20 - 10, 0], // Reduced horizontal movement
                        scale: [1, 1.1, 1], // Minimal scaling
                        opacity: [particle.opacity, particle.opacity * 0.6, particle.opacity],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Reduced cosmic dust effect - only on desktop */}
            {windowSize.width > 768 && [...Array(Math.min(8, Math.floor(optimizedCount / 3)))].map((_, i) => (
                <motion.div
                    key={`dust-${i}`}
                    className="absolute w-[1px] h-[1px] bg-white/15 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        willChange: 'transform, opacity',
                    }}
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.2, 0], // Very low opacity
                    }}
                    transition={{
                        duration: Math.random() * 5 + 4, // Longer duration for smoother animation
                        repeat: Infinity,
                        delay: Math.random() * 4,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;