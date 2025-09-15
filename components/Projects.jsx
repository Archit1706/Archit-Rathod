import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../config";
import AnimationWrapper from "./AnimationWrapper";

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(6);
    const [hoveredProject, setHoveredProject] = useState(null);

    const loadMoreProjects = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
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

    const projectVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        hover: {
            y: -10,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const overlayVariants = {
        hidden: {
            opacity: 0,
            backdrop: "blur(0px)"
        },
        visible: {
            opacity: 1,
            backdrop: "blur(10px)",
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.4,
                delay: 0.1,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.2,
                duration: 0.3
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            transition: {
                duration: 0.2
            }
        },
        tap: { scale: 0.95 }
    };

    return (
        <section id="projects" className="w-full min-h-screen p-2 py-16 dark:bg-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139,69,19,0.3) 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="max-w-[1240px] mx-auto px-2 relative z-10">
                <AnimationWrapper direction="up" duration={0.8}>
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="py-4 uppercase text-xl tracking-widest text-[#5651e5] dark:text-[#a29bfe] font-semibold"
                        >
                            Projects
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="py-4 dark:text-white text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                        >
                            What I&apos;ve Built
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        />
                    </div>
                </AnimationWrapper>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {projects.slice(0, visibleProjects).map((project, index) => (
                            <motion.div
                                key={index}
                                variants={projectVariants}
                                whileHover="hover"
                                layout
                                onHoverStart={() => setHoveredProject(index)}
                                onHoverEnd={() => setHoveredProject(null)}
                                className="relative group cursor-pointer"
                            >
                                <div className="relative h-auto bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm border border-white/10">
                                    {/* Project Image */}
                                    <div className="relative overflow-hidden">
                                        <Image
                                            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                            src={project.img}
                                            alt={project.alt}
                                            width={400}
                                            height={300}
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Content Overlay */}
                                    <AnimatePresence>
                                        {hoveredProject === index && (
                                            <motion.div
                                                variants={overlayVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-blue-600/90 backdrop-blur-sm flex items-center justify-center"
                                            >
                                                <motion.div
                                                    variants={contentVariants}
                                                    className="text-center text-white p-6"
                                                >
                                                    <motion.h3
                                                        className="text-2xl font-bold mb-4 text-white tracking-wider"
                                                    >
                                                        {project.title}
                                                    </motion.h3>

                                                    <motion.p className="text-gray-100 mb-6 text-sm leading-relaxed">
                                                        {project.desc?.substring(0, 100)}...
                                                    </motion.p>

                                                    <Link href={`/project/${project.url}`}>
                                                        <motion.button
                                                            variants={buttonVariants}
                                                            whileHover="hover"
                                                            whileTap="tap"
                                                            className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                                                        >
                                                            View Details
                                                        </motion.button>
                                                    </Link>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Bottom Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        {/* Tech Stack */}
                                        {project.tech && (
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {project.tech.slice(0, 3).map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-3 py-1 text-xs bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 rounded-full font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.tech.length > 3 && (
                                                    <span className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full font-medium">
                                                        +{project.tech.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load More Button */}
                {visibleProjects < projects.length && (
                    <AnimationWrapper direction="up" delay={0.5} className="text-center mt-12">
                        <motion.button
                            onClick={loadMoreProjects}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 30px rgba(139, 69, 19, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20"
                        >
                            Load More Projects
                        </motion.button>
                    </AnimationWrapper>
                )}
            </div>
        </section>
    );
};

export default Projects;