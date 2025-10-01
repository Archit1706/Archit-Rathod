import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const loaderVariants = {
        initial: { opacity: 1 },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    const progressVariants = {
        initial: { width: 0 },
        animate: {
            width: "100%",
            transition: {
                duration: 1.2,
                ease: "easeInOut"
            }
        }
    };

    const contentVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2
            }
        }
    };

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        variants={loaderVariants}
                        initial="initial"
                        exit="exit"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900"
                    >
                        <div className="text-center">
                            {/* Logo/Name Animation */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="mb-8"
                            >
                                <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200">
                                    AR
                                </h1>
                                <p className="text-white/80 text-lg tracking-widest mt-2">
                                    PORTFOLIO
                                </p>
                            </motion.div>

                            {/* Loading Bar */}
                            <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto">
                                <motion.div
                                    variants={progressVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                                />
                            </div>

                            {/* Loading Text */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-white/60 mt-4 text-sm tracking-wide"
                            >
                                Loading Experience...
                            </motion.p>
                        </div>

                        {/* Floating Particles */}
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-white/20 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [-20, 20, -20],
                                    opacity: [0.2, 0.8, 0.2],
                                    scale: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                variants={contentVariants}
                initial="initial"
                animate={!isLoading ? "animate" : "initial"}
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageTransition;