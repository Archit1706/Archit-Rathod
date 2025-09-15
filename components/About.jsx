import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaGraduationCap, FaTrophy, FaHeart, FaArrowRight } from 'react-icons/fa';
import { about } from '../config';
import AnimationWrapper from './AnimationWrapper';

const About = () => {
    const [activeTab, setActiveTab] = useState('story');
    const [hoveredAchievement, setHoveredAchievement] = useState(null);

    const tabs = {
        story: {
            title: 'My Story',
            icon: FaHeart,
            content: about
        },
        education: {
            title: 'Education',
            icon: FaGraduationCap,
            content: [
                {
                    title: "Master's in Computer Science",
                    institution: "University of Illinois at Chicago (UIC)",
                    period: "2024 - Present",
                    description: "Focusing on advanced algorithms, machine learning, and software engineering principles."
                },
                {
                    title: "Bachelor's in Information Technology",
                    institution: "University of Mumbai",
                    period: "2020 - 2024",
                    description: "Comprehensive foundation in computer science, web development, and database management."
                }
            ]
        },
        achievements: {
            title: 'Achievements',
            icon: FaTrophy,
            content: [
                {
                    title: "6x Hackathon Winner",
                    description: "Champion in multiple competitive programming and innovation challenges",
                    icon: "🏆"
                },
                {
                    title: "2+ Years Experience",
                    description: "Full-stack development with MERN stack and modern frameworks",
                    icon: "💼"
                },
                {
                    title: "Open Source Contributor",
                    description: "Active contributor to various open-source projects and community initiatives",
                    icon: "🌟"
                },
                {
                    title: "AI/ML Enthusiast",
                    description: "Exploring cutting-edge technologies in artificial intelligence and machine learning",
                    icon: "🤖"
                }
            ]
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.02,
            rotateY: 5,
            transition: {
                duration: 0.3
            }
        }
    };

    const tabVariants = {
        inactive: {
            scale: 1,
            backgroundColor: "rgba(255, 255, 255, 0.1)"
        },
        active: {
            scale: 1.05,
            backgroundColor: "rgba(139, 69, 19, 0.2)",
            transition: {
                duration: 0.3
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <section id="about" className="w-full min-h-screen py-16 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full blur-2xl"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [-20, 20, -20],
                            y: [-20, 20, -20],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="max-w-[1240px] mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Side - Image and Stats */}
                    <div className="space-y-8">
                        <AnimationWrapper direction="left" duration={0.8}>
                            <div className="relative">
                                {/* Profile Image */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="relative w-80 h-80 mx-auto lg:mx-0 mb-8"
                                >
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full opacity-20 blur-2xl animate-pulse" />
                                    <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-full p-2 shadow-2xl">
                                        <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                                            {/* Replace with actual profile image */}
                                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                                                AR
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { number: '50+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
                                        { number: '6', label: 'Hackathon Wins', color: 'from-purple-500 to-pink-500' },
                                        { number: '2+', label: 'Years Experience', color: 'from-green-500 to-emerald-500' },
                                        { number: '100%', label: 'Passion', color: 'from-orange-500 to-red-500' }
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05, rotate: 2 }}
                                            className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20 text-center`}
                                        >
                                            <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                                {stat.number}
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </AnimationWrapper>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <AnimationWrapper direction="right" duration={0.8}>
                            {/* Section Header */}
                            <div className="text-center lg:text-left mb-12">
                                <motion.p
                                    variants={itemVariants}
                                    className="uppercase text-xl tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-4"
                                >
                                    About Me
                                </motion.p>
                                <motion.h2
                                    variants={itemVariants}
                                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
                                >
                                    Passionate Developer &amp; Innovator
                                </motion.h2>
                                <motion.div
                                    variants={itemVariants}
                                    className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto lg:mx-0"
                                />
                            </div>

                            {/* Tab Navigation */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap gap-2 mb-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-2"
                            >
                                {Object.entries(tabs).map(([key, tab]) => {
                                    const IconComponent = tab.icon;
                                    return (
                                        <motion.button
                                            key={key}
                                            variants={tabVariants}
                                            animate={activeTab === key ? "active" : "inactive"}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setActiveTab(key)}
                                            className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === key
                                                ? 'text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-gray-700/80 shadow-lg'
                                                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                                                }`}
                                        >
                                            <IconComponent size={16} />
                                            <span className="hidden sm:inline">{tab.title}</span>
                                        </motion.button>
                                    );
                                })}
                            </motion.div>

                            {/* Tab Content */}
                            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 min-h-[400px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        variants={contentVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        {activeTab === 'story' && (
                                            <div className="space-y-6">
                                                {tabs.story.content.map((paragraph, index) => (
                                                    <motion.p
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.2 }}
                                                        className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
                                                    >
                                                        {paragraph}
                                                    </motion.p>
                                                ))}

                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.6 }}
                                                    className="flex flex-wrap gap-3 mt-6"
                                                >
                                                    {['React', 'Next.js', 'Node.js', 'Python', 'AI/ML', 'TypeScript'].map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </motion.div>
                                            </div>
                                        )}

                                        {activeTab === 'education' && (
                                            <div className="space-y-6">
                                                {tabs.education.content.map((edu, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.2 }}
                                                        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border-l-4 border-blue-500"
                                                    >
                                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                                            {edu.title}
                                                        </h3>
                                                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                                                            {edu.institution}
                                                        </p>
                                                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                                                            {edu.period}
                                                        </p>
                                                        <p className="text-gray-700 dark:text-gray-300">
                                                            {edu.description}
                                                        </p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}

                                        {activeTab === 'achievements' && (
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {tabs.achievements.content.map((achievement, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        whileHover={{ scale: 1.02, rotate: 1 }}
                                                        onHoverStart={() => setHoveredAchievement(index)}
                                                        onHoverEnd={() => setHoveredAchievement(null)}
                                                        className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 shadow-lg border border-white/20 relative overflow-hidden"
                                                    >
                                                        <div className="relative z-10">
                                                            <div className="text-3xl mb-3">{achievement.icon}</div>
                                                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                                                                {achievement.title}
                                                            </h3>
                                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                                {achievement.description}
                                                            </p>
                                                        </div>

                                                        {hoveredAchievement === index && (
                                                            <motion.div
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"
                                                            />
                                                        )}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* CTA Button */}
                            <motion.div
                                variants={itemVariants}
                                className="text-center lg:text-left mt-8"
                            >
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Let's Work Together
                                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                                </motion.a>
                            </motion.div>
                        </AnimationWrapper>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;