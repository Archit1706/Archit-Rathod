import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaAward, FaUsers, FaCode } from 'react-icons/fa';
import { experiences } from '../config';
import AnimationWrapper from './AnimationWrapper';

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(0);
    const [activeTab, setActiveTab] = useState('overview');

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
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.02,
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

    const tabVariants = {
        inactive: {
            scale: 1,
            backgroundColor: "rgba(255, 255, 255, 0.1)"
        },
        active: {
            scale: 1.05,
            backgroundColor: "rgba(99, 102, 241, 0.2)",
            transition: {
                duration: 0.3
            }
        }
    };

    const backgroundVariants = {
        animate: {
            background: [
                "linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 69, 19, 0.1) 100%)",
                "linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)",
                "linear-gradient(225deg, rgba(34, 197, 94, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)"
            ],
            transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    const currentExperience = experiences[selectedExperience];

    return (
        <section id="experience" className="w-full min-h-screen py-16 relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0 -z-10"
                variants={backgroundVariants}
                animate="animate"
            />

            {/* Floating Work Icons */}
            <div className="absolute inset-0 -z-5">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-2xl opacity-5 dark:opacity-10"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-30, 30, -30],
                            x: [-20, 20, -20],
                            rotate: [0, 360],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{
                            duration: 6 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    >
                        {['💼', '🚀', '💻', '⚡', '🎯', '🔧'][Math.floor(Math.random() * 6)]}
                    </motion.div>
                ))}
            </div>

            <div className="max-w-[1240px] mx-auto px-4 relative z-10">
                {/* Section Header */}
                <AnimationWrapper direction="up" duration={0.8}>
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="py-4 uppercase text-xl tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold"
                        >
                            Professional Experience
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="py-4 dark:text-white text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                        >
                            My Professional Journey
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"
                        />
                    </div>
                </AnimationWrapper>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-3 gap-8"
                >
                    {/* Experience Timeline */}
                    <div className="lg:col-span-1  overflow-y-scroll h-[600px] lg:h-[650px] pr-2">
                        <AnimationWrapper direction="left" duration={0.8}>
                            <div className="space-y-4">
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={exp.id}
                                        variants={cardVariants}
                                        whileHover="hover"
                                        onClick={() => setSelectedExperience(index)}
                                        className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${selectedExperience === index
                                            ? 'bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 border-emerald-300 dark:border-emerald-600 shadow-lg'
                                            : 'bg-white/60 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600'
                                            } backdrop-blur-md`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-full ${selectedExperience === index
                                                ? 'bg-emerald-100 dark:bg-emerald-900/30'
                                                : 'bg-gray-100 dark:bg-gray-700'
                                                }`}>
                                                <FaBriefcase className={`${selectedExperience === index
                                                    ? 'text-emerald-600 dark:text-emerald-400'
                                                    : 'text-gray-600 dark:text-gray-400'
                                                    }`} />
                                            </div>

                                            <div className="flex-1">
                                                <h3 className={`font-bold text-lg mb-1 ${selectedExperience === index
                                                    ? 'text-emerald-700 dark:text-emerald-300'
                                                    : 'text-gray-800 dark:text-white'
                                                    }`}>
                                                    {exp.title}
                                                </h3>
                                                <p className={`font-medium mb-1 ${selectedExperience === index
                                                    ? 'text-emerald-600 dark:text-emerald-400'
                                                    : 'text-gray-600 dark:text-gray-300'
                                                    }`}>
                                                    {exp.company}
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                                    {exp.startDate} - {exp.endDate}
                                                </p>
                                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${exp.type === 'Full-time'
                                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                    : exp.type === 'Internship'
                                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                                        : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                                                    }`}>
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </AnimationWrapper>
                    </div>

                    {/* Experience Details */}
                    <div className="lg:col-span-2">
                        <AnimationWrapper direction="right" duration={0.8}>
                            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                                {/* Tab Navigation */}
                                <div className="flex flex-wrap gap-2 mb-8 bg-gray-100/60 dark:bg-gray-700/60 backdrop-blur-md rounded-2xl p-2">
                                    {[
                                        { key: 'overview', label: 'Overview', icon: FaBriefcase },
                                        { key: 'responsibilities', label: 'Responsibilities', icon: FaCode },
                                        { key: 'achievements', label: 'Achievements', icon: FaAward }
                                    ].map((tab) => {
                                        const IconComponent = tab.icon;
                                        return (
                                            <motion.button
                                                key={tab.key}
                                                variants={tabVariants}
                                                animate={activeTab === tab.key ? "active" : "inactive"}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => setActiveTab(tab.key)}
                                                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === tab.key
                                                    ? 'text-emerald-600 dark:text-emerald-400 bg-white/80 dark:bg-gray-600/80 shadow-lg'
                                                    : 'text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                                                    }`}
                                            >
                                                <IconComponent size={16} />
                                                <span className="hidden sm:inline">{tab.label}</span>
                                            </motion.button>
                                        );
                                    })}
                                </div>

                                {/* Tab Content */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`${selectedExperience}-${activeTab}`}
                                        variants={contentVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        {activeTab === 'overview' && (
                                            <div className="space-y-6">
                                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                                                        {currentExperience.title}
                                                    </h3>
                                                    {currentExperience.companyUrl && (
                                                        <a
                                                            href={currentExperience.companyUrl}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                                                        >
                                                            <FaExternalLinkAlt />
                                                        </a>
                                                    )}
                                                </div>

                                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                                        <FaBriefcase className="text-emerald-600 dark:text-emerald-400" />
                                                        <span>{currentExperience.company}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                                        <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400" />
                                                        <span>{currentExperience.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                                        <FaCalendarAlt className="text-emerald-600 dark:text-emerald-400" />
                                                        <span>{currentExperience.duration}</span>
                                                    </div>
                                                </div>

                                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                                                    {currentExperience.description}
                                                </p>

                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                                                        Technologies Used
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {currentExperience.technologies.map((tech, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-3 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'responsibilities' && (
                                            <div className="space-y-4">
                                                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                                                    Key Responsibilities
                                                </h4>
                                                <ul className="space-y-4">
                                                    {currentExperience.responsibilities.map((responsibility, index) => (
                                                        <motion.li
                                                            key={index}
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-xl"
                                                        >
                                                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                                {responsibility}
                                                            </p>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {activeTab === 'achievements' && (
                                            <div className="space-y-4">
                                                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                                                    Key Achievements
                                                </h4>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    {currentExperience.achievements.map((achievement, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-700"
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                <FaAward className="text-emerald-600 dark:text-emerald-400 text-xl mt-1" />
                                                                <p className="text-gray-700 dark:text-gray-300 font-medium">
                                                                    {achievement}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </AnimationWrapper>
                    </div>
                </motion.div>

                {/* Experience Statistics */}
                <AnimationWrapper direction="scale" delay={0.6} className="mt-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { number: '2+', label: 'Years Experience', icon: '⏱️' },
                            { number: '3', label: 'Companies', icon: '🏢' },
                            { number: '50+', label: 'Projects Completed', icon: '🚀' },
                            { number: '20+', label: 'Clients Served', icon: '👥' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 shadow-lg"
                            >
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </AnimationWrapper>
            </div>
        </section>
    );
};

export default Experience;