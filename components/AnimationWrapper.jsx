"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimationWrapper = ({ children, className = '', animationType = 'fadeUp', delay = 0 }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        fadeUp: {
            hidden: {
                opacity: 0,
                y: 60,
                scale: 0.9,
                filter: 'blur(10px)'
            },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                transition: {
                    duration: 0.8,
                    delay: delay,
                    ease: [0.25, 0.25, 0.25, 0.75],
                }
            }
        },
        fadeLeft: {
            hidden: {
                opacity: 0,
                x: -100,
                rotateY: -45,
                filter: 'blur(8px)'
            },
            visible: {
                opacity: 1,
                x: 0,
                rotateY: 0,
                filter: 'blur(0px)',
                transition: {
                    duration: 0.9,
                    delay: delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }
            }
        },
        fadeRight: {
            hidden: {
                opacity: 0,
                x: 100,
                rotateY: 45,
                filter: 'blur(8px)'
            },
            visible: {
                opacity: 1,
                x: 0,
                rotateY: 0,
                filter: 'blur(0px)',
                transition: {
                    duration: 0.9,
                    delay: delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }
            }
        },
        scaleIn: {
            hidden: {
                opacity: 0,
                scale: 0.3,
                rotate: -180,
                filter: 'blur(15px)'
            },
            visible: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                filter: 'blur(0px)',
                transition: {
                    duration: 1,
                    delay: delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }
            }
        },
        float: {
            hidden: {
                opacity: 0,
                y: 30,
                scale: 0.8
            },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.8,
                    delay: delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }
            }
        },
        cosmic: {
            hidden: {
                opacity: 0,
                scale: 0.5,
                rotate: -90,
                filter: 'blur(20px) hue-rotate(180deg)'
            },
            visible: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                filter: 'blur(0px) hue-rotate(0deg)',
                transition: {
                    duration: 1.2,
                    delay: delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }
            }
        }
    };

    const floatingAnimation = {
        y: [-5, 5, -5],
        rotate: [-1, 1, -1],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const glowAnimation = {
        boxShadow: [
            '0 0 20px rgba(139, 92, 246, 0.3)',
            '0 0 40px rgba(139, 92, 246, 0.6)',
            '0 0 20px rgba(139, 92, 246, 0.3)'
        ],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants[animationType]}
            className={`relative ${className}`}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
        >
            <motion.div
                animate={floatingAnimation}
                className="relative z-10"
            >
                {children}
            </motion.div>

            {/* Cosmic glow effect */}
            <motion.div
                className="absolute inset-0 rounded-xl opacity-20 pointer-events-none -z-10"
                animate={glowAnimation}
            />
        </motion.div>
    );
};

export default AnimationWrapper;