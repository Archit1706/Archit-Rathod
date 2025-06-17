"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimationWrapper from "./AnimationWrapper";
import { projects } from "../config";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(6);

    const loadMoreProjects = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
    };

    const ProjectCard = ({ project, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
                y: -10,
                scale: 1.02,
                rotateY: 5,
            }}
            className="group relative"
        >
            <div className="relative flex items-center justify-center h-auto rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25">
                {/* Animated background gradient */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-cyan-600/0 group-hover:from-purple-600/20 group-hover:via-pink-600/10 group-hover:to-cyan-600/20 transition-all duration-700"
                    animate={{
                        background: [
                            'linear-gradient(135deg, rgba(139, 92, 246, 0) 0%, rgba(236, 72, 153, 0) 50%, rgba(6, 182, 212, 0) 100%)',
                            'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(6, 182, 212, 0.1) 100%)',
                            'linear-gradient(135deg, rgba(139, 92, 246, 0) 0%, rgba(236, 72, 153, 0) 50%, rgba(6, 182, 212, 0) 100%)',
                        ]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Project Image */}
                <div className="relative w-full h-64 overflow-hidden">
                    <Image
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-30"
                        src={project.img}
                        alt={project.alt}
                        fill
                    />

                    {/* Cosmic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Project Info Overlay */}
                <motion.div
                    className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ y: 50 }}
                    whileHover={{ y: 0 }}
                >
                    <div className="text-center space-y-4">
                        <motion.h3
                            className="text-2xl font-bold text-white tracking-wider"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {project.title}
                        </motion.h3>

                        <motion.p
                            className="text-gray-200 text-sm leading-relaxed max-w-xs"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {project.description}
                        </motion.p>

                        {/* Tech Stack */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-2 mt-3"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {project.tech?.slice(0, 3).map((tech, i) => (
                                <span key={i} className="px-2 py-1 text-xs bg-purple-600/50 text-purple-200 rounded-full border border-purple-400/30">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            className="flex gap-4 justify-center mt-6"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {project.liveUrl && (
                                <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                                    <motion.button
                                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt className="text-sm" />
                                        Live Demo
                                    </motion.button>
                                </Link>
                            )}

                            {project.githubUrl && (
                                <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                                    <motion.button
                                        className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-gray-500/50 transition-all duration-300 flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub className="text-sm" />
                                        Code
                                    </motion.button>
                                </Link>
                            )}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Floating cosmic elements */}
                <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full blur-sm opacity-60"
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full blur-sm opacity-70"
                    animate={{
                        y: [0, 10, 0],
                        opacity: [0.7, 1, 0.7],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>
        </motion.div>
    );

    return (
        <section id="projects" className="relative w-full min-h-screen p-2 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
            {/* Background cosmic effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
            </div>

            <div className="max-w-[1240px] mx-auto px-2 py-16 relative z-10">
                <motion.p
                    className="py-4 uppercase text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.p>

                <motion.h2
                    className="py-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    What I&apos;ve Built in the Digital Universe
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* Load More Button */}
                {visibleProjects < projects.length && (
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            onClick={loadMoreProjects}
                            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🚀 Explore More Projects
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;