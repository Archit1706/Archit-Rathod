"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaFlask, FaEnvelope } from 'react-icons/fa';

const CosmicNavigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { id: 'home', icon: FaHome, label: 'Home' },
        { id: 'about', icon: FaUser, label: 'About' },
        { id: 'skills', icon: FaCode, label: 'Skills' },
        { id: 'projects', icon: FaProjectDiagram, label: 'Projects' },
        { id: 'research', icon: FaFlask, label: 'Research' },
        { id: 'contact', icon: FaEnvelope, label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(navItems[index].id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <motion.div
                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${scrolled
                        ? 'bg-black/20 backdrop-blur-lg border border-purple-500/30'
                        : 'bg-purple-900/10 backdrop-blur-sm border border-purple-500/20'
                        }`}
                    animate={{
                        scale: scrolled ? 0.95 : 1,
                        boxShadow: scrolled
                            ? '0 0 30px rgba(139, 92, 246, 0.3)'
                            : '0 0 20px rgba(139, 92, 246, 0.2)'
                    }}
                >
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative p-3 rounded-full transition-all duration-300 group ${activeSection === item.id
                                ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300'
                                : 'text-gray-400 hover:text-purple-300'
                                }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <item.icon className="text-lg" />

                            {/* Tooltip */}
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                {item.label}
                            </div>

                            {/* Active indicator */}
                            {activeSection === item.id && (
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-purple-400/50"
                                    layoutId="activeNavItem"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>
            </motion.nav>

            {/* Mobile Navigation */}
            <motion.nav
                className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-black/20 backdrop-blur-lg border border-purple-500/30">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative p-3 rounded-full transition-all duration-300 ${activeSection === item.id
                                ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300'
                                : 'text-gray-400'
                                }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <item.icon className="text-sm" />

                            {/* Active indicator */}
                            {activeSection === item.id && (
                                <motion.div
                                    className="absolute inset-0 rounded-full border border-purple-400/50"
                                    layoutId="activeMobileNavItem"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>
            </motion.nav>

            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 transform origin-left z-50"
                style={{
                    scaleX: scrolled ? 0.1 : 0,
                }}
                animate={{
                    scaleX: typeof window !== 'undefined' ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0
                }}
                transition={{ duration: 0.1 }}
            />
        </>
    );
};

export default CosmicNavigation;