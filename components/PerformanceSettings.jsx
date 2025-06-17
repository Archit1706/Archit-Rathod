"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCog, FaTimes, FaRocket, FaBolt, FaEye } from 'react-icons/fa';

const PerformanceSettings = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        particleCount: 'medium', // low, medium, high
        animationSpeed: 'normal', // slow, normal, fast
        effects: 'all', // minimal, some, all
        autoOptimize: true
    });

    useEffect(() => {
        // Load settings from localStorage
        const savedSettings = localStorage.getItem('cosmicSettings');
        if (savedSettings) {
            setSettings(JSON.parse(savedSettings));
        }

        // Auto-detect performance
        if (settings.autoOptimize) {
            detectPerformance();
        }
    }, []);

    useEffect(() => {
        // Save settings to localStorage
        localStorage.setItem('cosmicSettings', JSON.stringify(settings));
        applySettings();
    }, [settings]);

    const detectPerformance = () => {
        // Simple performance detection
        const isLowEnd = navigator.hardwareConcurrency <= 2 ||
            navigator.deviceMemory <= 4 ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isLowEnd) {
            setSettings(prev => ({
                ...prev,
                particleCount: 'low',
                animationSpeed: 'slow',
                effects: 'minimal'
            }));
        }
    };

    const applySettings = () => {
        const root = document.documentElement;

        // Apply particle count
        const particleCounts = { low: 15, medium: 25, high: 40 };
        root.style.setProperty('--particle-count', particleCounts[settings.particleCount]);

        // Apply animation speed
        const animationSpeeds = { slow: '2s', normal: '1s', fast: '0.5s' };
        root.style.setProperty('--animation-speed', animationSpeeds[settings.animationSpeed]);

        // Apply effects level
        if (settings.effects === 'minimal') {
            document.body.classList.add('minimal-effects');
            document.body.classList.remove('some-effects', 'all-effects');
        } else if (settings.effects === 'some') {
            document.body.classList.add('some-effects');
            document.body.classList.remove('minimal-effects', 'all-effects');
        } else {
            document.body.classList.add('all-effects');
            document.body.classList.remove('minimal-effects', 'some-effects');
        }
    };

    const resetToDefaults = () => {
        setSettings({
            particleCount: 'medium',
            animationSpeed: 'normal',
            effects: 'all',
            autoOptimize: true
        });
    };

    return (
        <>
            {/* Settings Toggle Button */}
            <motion.button
                className="fixed top-4 right-4 z-[60] p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Performance Settings"
            >
                <FaCog className="text-purple-300 text-lg" />
            </motion.button>

            {/* Settings Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Settings Panel */}
                        <motion.div
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[80] w-96 max-w-[90vw] p-6 rounded-2xl bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-lg border border-purple-500/30"
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                    <FaRocket className="text-purple-400" />
                                    Performance Settings
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    <FaTimes className="text-gray-400" />
                                </button>
                            </div>

                            {/* Settings */}
                            <div className="space-y-6">
                                {/* Particle Count */}
                                <div>
                                    <label className="block text-white font-medium mb-2">
                                        Particle Count
                                    </label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {['low', 'medium', 'high'].map((level) => (
                                            <button
                                                key={level}
                                                onClick={() => setSettings(prev => ({ ...prev, particleCount: level }))}
                                                className={`p-2 rounded-lg text-sm font-medium transition-all ${settings.particleCount === level
                                                    ? 'bg-purple-600 text-white'
                                                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                                    }`}
                                            >
                                                {level.charAt(0).toUpperCase() + level.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Animation Speed */}
                                <div>
                                    <label className="block text-white font-medium mb-2">
                                        Animation Speed
                                    </label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {['slow', 'normal', 'fast'].map((speed) => (
                                            <button
                                                key={speed}
                                                onClick={() => setSettings(prev => ({ ...prev, animationSpeed: speed }))}
                                                className={`p-2 rounded-lg text-sm font-medium transition-all ${settings.animationSpeed === speed
                                                    ? 'bg-purple-600 text-white'
                                                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                                    }`}
                                            >
                                                {speed.charAt(0).toUpperCase() + speed.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Effects Level */}
                                <div>
                                    <label className="block text-white font-medium mb-2">
                                        Visual Effects
                                    </label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {[
                                            { key: 'minimal', label: 'Minimal', icon: FaBolt },
                                            { key: 'some', label: 'Balanced', icon: FaEye },
                                            { key: 'all', label: 'Maximum', icon: FaRocket }
                                        ].map((effect) => (
                                            <button
                                                key={effect.key}
                                                onClick={() => setSettings(prev => ({ ...prev, effects: effect.key }))}
                                                className={`p-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1 ${settings.effects === effect.key
                                                    ? 'bg-purple-600 text-white'
                                                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                                    }`}
                                            >
                                                <effect.icon className="text-xs" />
                                                {effect.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Auto Optimize */}
                                <div>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={settings.autoOptimize}
                                            onChange={(e) => setSettings(prev => ({ ...prev, autoOptimize: e.target.checked }))}
                                            className="sr-only"
                                        />
                                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${settings.autoOptimize
                                            ? 'bg-purple-600 border-purple-600'
                                            : 'border-gray-400'
                                            }`}>
                                            {settings.autoOptimize && (
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-white">Auto-optimize for device</span>
                                    </label>
                                </div>

                                {/* Reset Button */}
                                <button
                                    onClick={resetToDefaults}
                                    className="w-full p-3 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium hover:from-gray-500 hover:to-gray-600 transition-all"
                                >
                                    Reset to Defaults
                                </button>
                            </div>

                            {/* Performance Tips */}
                            <div className="mt-6 p-4 rounded-lg bg-black/20 border border-purple-500/20">
                                <h3 className="text-sm font-medium text-purple-300 mb-2">💡 Performance Tips</h3>
                                <ul className="text-xs text-gray-400 space-y-1">
                                    <li>• Use "Low" particles on mobile devices</li>
                                    <li>• "Minimal" effects for older browsers</li>
                                    <li>• Enable auto-optimize for best experience</li>
                                </ul>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default PerformanceSettings;