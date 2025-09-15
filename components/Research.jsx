import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaFilePdf, FaPlay, FaCalendarAlt, FaUser, FaEye } from "react-icons/fa";
import { researchs } from "../config";
import AnimationWrapper from "./AnimationWrapper";

const Research = () => {
    const [visibleResearch, setVisibleResearch] = useState(6);
    const [hoveredResearch, setHoveredResearch] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['all', 'machine-learning', 'web-development', 'data-science', 'computer-vision'];

    const filteredResearch = selectedCategory === 'all'
        ? researchs
        : researchs.filter(research => research.category === selectedCategory);

    const loadMoreResearch = () => {
        setVisibleResearch((prev) => prev + 3);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const researchVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.8,
            rotateX: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        hover: {
            y: -10,
            scale: 1.02,
            rotateX: 5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const overlayVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const categoryVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        }
    };

    const backgroundVariants = {
        animate: {
            background: [
                "linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 69, 19, 0.1) 100%)",
                "linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
                "linear-gradient(225deg, rgba(236, 72, 153, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)"
            ],
            transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    return (
        <section id="research" className="w-full min-h-screen p-2 py-16 relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0 -z-10"
                variants={backgroundVariants}
                animate="animate"
            />

            {/* Floating Research Icons */}
            <div className="absolute inset-0 -z-5">
                {[...Array(12)].map((_, i) => (
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
                        {['🔬', '📊', '🤖', '💡', '📈', '🧪'][Math.floor(Math.random() * 6)]}
                    </motion.div>
                ))}
            </div>

            <div className="max-w-[1240px] mx-auto px-2 relative z-10">
                {/* Section Header */}
                <AnimationWrapper direction="up" duration={0.8}>
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="py-4 uppercase text-xl tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold"
                        >
                            Research & Publications
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="py-4 dark:text-white text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                        >
                            Advancing Knowledge Through Research
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
                        />
                    </div>
                </AnimationWrapper>

                {/* Category Filters */}
                <AnimationWrapper direction="scale" delay={0.3}>
                    <div className="flex justify-center mb-12">
                        <div className="flex flex-wrap gap-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    variants={categoryVariants}
                                    whileHover="hover"
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${selectedCategory === category
                                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                                        : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                                        }`}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </AnimationWrapper>

                {/* Research Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredResearch.slice(0, visibleResearch).map((research, index) => (
                            <motion.div
                                key={index}
                                variants={researchVariants}
                                whileHover="hover"
                                layout
                                onHoverStart={() => setHoveredResearch(index)}
                                onHoverEnd={() => setHoveredResearch(null)}
                                className="relative group cursor-pointer"
                            >
                                <div className="relative h-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20">
                                    {/* Research Image */}
                                    <div className="relative overflow-hidden h-48">
                                        <Image
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            src={research.img}
                                            alt={research.alt}
                                            width={400}
                                            height={200}
                                        />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full">
                                                {research.category?.replace('-', ' ') || 'Research'}
                                            </span>
                                        </div>

                                        {/* Overlay with Actions */}
                                        <AnimatePresence>
                                            {hoveredResearch === index && (
                                                <motion.div
                                                    variants={overlayVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="hidden"
                                                    className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-sm flex items-center justify-center"
                                                >
                                                    <div className="flex gap-3">
                                                        <Link href={"/research" + research.url}>
                                                            <motion.button
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                                className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                                                                title="Read More"
                                                            >
                                                                <FaEye size={16} />
                                                            </motion.button>
                                                        </Link>

                                                        {research.links?.pdf && (
                                                            <motion.a
                                                                href={research.links.pdf}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                                className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                                                                title="Download PDF"
                                                            >
                                                                <FaFilePdf size={16} />
                                                            </motion.a>
                                                        )}

                                                        {research.links?.demo && (
                                                            <motion.a
                                                                href={research.links.demo}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                                className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                                                                title="Live Demo"
                                                            >
                                                                <FaExternalLinkAlt size={16} />
                                                            </motion.a>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
                                            {research.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {research.desc}
                                        </p>

                                        {/* Research Meta */}
                                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <FaCalendarAlt />
                                                <span>{research.date || '2024'}</span>
                                            </div>

                                            {research.authors && (
                                                <div className="flex items-center gap-1">
                                                    <FaUser />
                                                    <span>{research.authors.length} Author{research.authors.length > 1 ? 's' : ''}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Keywords/Tags */}
                                        {research.keywords && (
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {research.keywords.slice(0, 3).map((keyword, keyIndex) => (
                                                    <span
                                                        key={keyIndex}
                                                        className="px-2 py-1 text-xs bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-800 dark:text-indigo-300 rounded-full font-medium"
                                                    >
                                                        {keyword}
                                                    </span>
                                                ))}
                                                {research.keywords.length > 3 && (
                                                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full font-medium">
                                                        +{research.keywords.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load More Button */}
                {visibleResearch < filteredResearch.length && (
                    <AnimationWrapper direction="up" delay={0.5} className="text-center mt-12">
                        <motion.button
                            onClick={loadMoreResearch}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20"
                        >
                            Load More Research
                        </motion.button>
                    </AnimationWrapper>
                )}

                {/* Research Statistics */}
                <AnimationWrapper direction="scale" delay={0.6} className="mt-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { number: researchs.length, label: 'Research Papers', icon: '📄' },
                            { number: '5+', label: 'Publications', icon: '📚' },
                            { number: '100+', label: 'Citations', icon: '📖' },
                            { number: '3', label: 'Awards', icon: '🏆' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 shadow-lg"
                            >
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
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

export default Research;