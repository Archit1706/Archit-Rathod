"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimationWrapper from "./AnimationWrapper";
import { researchs } from "../config";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaFilePdf, FaStar } from "react-icons/fa";

const Research = () => {
    const [visibleResearchs, setVisibleResearchs] = useState(3);

    const loadMoreResearch = () => {
        setVisibleResearchs((prevVisibleResearchs) => prevVisibleResearchs + 3);
    };

    const ResearchCard = ({ research, index }) => (
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

                {/* Research Paper Image */}
                <div className="relative w-full h-64 overflow-hidden">
                    <Image
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-30"
                        src={research.img}
                        alt={research.alt}
                        fill
                    />

                    {/* Academic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Research badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm rounded-full border border-purple-400/50">
                        <span className="text-white text-xs font-semibold flex items-center gap-1">
                            <FaStar className="text-yellow-300" />
                            Published
                        </span>
                    </div>
                </div>

                {/* Research Info Overlay */}
                <motion.div
                    className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ y: 50 }}
                    whileHover={{ y: 0 }}
                >
                    <div className="text-center space-y-4">
                        <motion.h3
                            className="text-xl font-bold text-white tracking-wider leading-tight"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {research.title}
                        </motion.h3>

                        <motion.p
                            className="text-gray-200 text-sm leading-relaxed max-w-xs"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {research.description || "Cutting-edge research contributing to the advancement of technology and science."}
                        </motion.p>

                        {/* Authors */}
                        {research.authors && (
                            <motion.div
                                className="text-purple-200 text-xs"
                                initial={{ y: 20, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.25 }}
                            >
                                <span className="font-semibold">Authors: </span>
                                {research.authors}
                            </motion.div>
                        )}

                        {/* Publication Info */}
                        {research.journal && (
                            <motion.div
                                className="text-cyan-200 text-xs italic"
                                initial={{ y: 20, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Published in {research.journal}
                            </motion.div>
                        )}

                        {/* Keywords */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-2 mt-3"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.35 }}
                        >
                            {research.keywords?.slice(0, 3).map((keyword, i) => (
                                <span key={i} className="px-2 py-1 text-xs bg-indigo-600/50 text-indigo-200 rounded-full border border-indigo-400/30">
                                    {keyword}
                                </span>
                            ))}
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            className="flex gap-3 justify-center mt-6"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {research.paperUrl && (
                                <Link href={research.paperUrl} target="_blank" rel="noreferrer">
                                    <motion.button
                                        className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-2 text-sm"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaFilePdf className="text-sm" />
                                        Read Paper
                                    </motion.button>
                                </Link>
                            )}

                            {research.liveUrl && (
                                <Link href={research.liveUrl} target="_blank" rel="noreferrer">
                                    <motion.button
                                        className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 text-sm"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt className="text-sm" />
                                        View Project
                                    </motion.button>
                                </Link>
                            )}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Floating academic elements */}
                <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-indigo-400 rounded-full blur-sm opacity-60"
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
                    className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full blur-sm opacity-70"
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

                {/* Academic citation effect */}
                <motion.div
                    className="absolute top-6 left-6 w-1 h-1 bg-yellow-400 rounded-full blur-sm opacity-50"
                    animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>
        </motion.div>
    );

    return (
        <section id="research" className="relative w-full min-h-screen p-2 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
            {/* Background cosmic effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/5 left-1/5 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/5 right-1/5 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }} />
            </div>

            <div className="max-w-[1240px] mx-auto px-2 py-16 relative z-10">
                <motion.p
                    className="py-4 uppercase text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-semibold"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Research
                </motion.p>

                <motion.h2
                    className="py-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Contributions to the Knowledge Universe
                </motion.h2>

                <motion.p
                    className="py-4 text-gray-300 text-lg max-w-3xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Exploring the frontiers of technology through research and innovation, contributing to the scientific community with cutting-edge discoveries.
                </motion.p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {researchs.slice(0, visibleResearchs).map((research, index) => (
                        <ResearchCard key={index} research={research} index={index} />
                    ))}
                </div>

                {/* Load More Button */}
                {visibleResearchs < researchs.length && (
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            onClick={loadMoreResearch}
                            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)'
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🔬 Discover More Research
                        </motion.button>
                    </motion.div>
                )}

                {/* Research Stats */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6 mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    {[
                        { number: "5+", label: "Published Papers", icon: "📄" },
                        { number: "100+", label: "Citations", icon: "📚" },
                        { number: "3+", label: "Research Areas", icon: "🔬" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-900/30 via-transparent to-cyan-900/30 backdrop-blur-sm border border-indigo-500/30"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-300 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Research;