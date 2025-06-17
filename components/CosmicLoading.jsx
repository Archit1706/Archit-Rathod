"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CosmicLoading = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing...');

    const loadingStages = [
        'Initializing cosmic engine...',
        'Loading stellar particles...',
        'Calibrating nebula effects...',
        'Synchronizing galaxy rotation...',
        'Activating warp drive...',
        'Welcome to the cosmos!'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + Math.random() * 15 + 5;

                // Update loading text based on progress
                const stageIndex = Math.floor((newProgress / 100) * loadingStages.length);
                if (stageIndex < loadingStages.length) {
                    setLoadingText(loadingStages[stageIndex]);
                }

                if (newProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        onLoadingComplete && onLoadingComplete();
                    }, 1000);
                    return 100;
                }

                return newProgress;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Animated background stars */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 text-center space-y-8">
                    {/* Main logo/title */}
                    <motion.div
                        initial={{ scale: 0, rotateY: 180 }}
                        animate={{ scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mb-4">
                            COSMIC PORTFOLIO
                        </h1>
                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        />
                    </motion.div>

                    {/* Loading animation */}
                    <div className="relative">
                        {/* Central orb */}
                        <motion.div
                            className="w-32 h-32 mx-auto relative"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            {/* Outer ring */}
                            <div className="absolute inset-0 rounded-full border-4 border-purple-500/30">
                                <motion.div
                                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-400 border-r-pink-400"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </div>

                            {/* Middle ring */}
                            <motion.div
                                className="absolute inset-4 rounded-full border-2 border-pink-500/40"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-transparent border-b-pink-400 border-l-cyan-400"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>

                            {/* Inner core */}
                            <motion.div
                                className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-600/50 to-pink-600/50 backdrop-blur-sm"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            {/* Center dot */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
                                animate={{
                                    boxShadow: [
                                        '0 0 10px rgba(255, 255, 255, 0.5)',
                                        '0 0 20px rgba(139, 92, 246, 0.8)',
                                        '0 0 10px rgba(255, 255, 255, 0.5)',
                                    ],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </motion.div>

                        {/* Orbiting particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-4px',
                                    marginLeft: '-4px',
                                }}
                                animate={{
                                    x: Math.cos((i / 8) * Math.PI * 2) * 80,
                                    y: Math.sin((i / 8) * Math.PI * 2) * 80,
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.5,
                                }}
                            />
                        ))}
                    </div>

                    {/* Progress bar */}
                    <div className="w-80 mx-auto space-y-4">
                        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 rounded-full"
                                initial={{ width: '0%' }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Glowing effect */}
                            <motion.div
                                className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm"
                                animate={{ x: (progress / 100) * 320 - 32 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        <div className="flex justify-between text-sm text-gray-400">
                            <span>{Math.round(progress)}%</span>
                            <span>Loading Complete</span>
                        </div>
                    </div>

                    {/* Loading text */}
                    <motion.p
                        className="text-purple-300 text-lg font-medium"
                        key={loadingText}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {loadingText}
                    </motion.p>

                    {/* Floating elements */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-3 h-3 bg-purple-400/30 rounded-full blur-sm"
                            style={{
                                left: `${20 + i * 10}%`,
                                top: `${30 + (i % 2) * 40}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CosmicLoading;