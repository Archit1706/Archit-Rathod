import React from "react";
import Image from "next/image";
import { about } from "../config";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="relative w-full min-h-screen p-2 flex items-center pt-16 py-8 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"
        >
            {/* Cosmic background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 relative z-10">
                <div className="col-span-2 space-y-6">
                    <motion.p
                        className="py-4 uppercase text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        About
                    </motion.p>

                    <motion.h2
                        className="py-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Who I Am
                    </motion.h2>

                    <div className="space-y-4">
                        {about.map((para, index) => {
                            return (
                                <motion.p
                                    key={index}
                                    className="py-2 text-gray-300 leading-relaxed text-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                >
                                    {para}
                                </motion.p>
                            );
                        })}
                    </div>

                    <motion.a
                        href="#projects"
                        className="inline-block group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                            <p className="text-purple-300 group-hover:text-purple-200 transition-colors duration-300 font-medium">
                                🚀 Explore My Cosmic Projects
                            </p>
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300" />
                        </div>
                    </motion.a>
                </div>

                <motion.div
                    className="w-[60%] md:w-[90%] my-auto mx-auto relative"
                    initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {/* Cosmic frame */}
                    <div className="relative p-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 shadow-2xl shadow-purple-500/25">
                        {/* Animated border glow */}
                        <motion.div
                            className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 p-[2px]"
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-900 to-purple-900" />
                        </motion.div>

                        {/* Image container */}
                        <motion.div
                            className="relative z-10 rounded-xl overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                height={500}
                                width={500}
                                className="rounded-xl transition-all duration-500 group-hover:scale-110"
                                src={"/assets/about.jpg"}
                                alt="about-pc-pic"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>

                        {/* Floating cosmic elements */}
                        <motion.div
                            className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full blur-sm"
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        <motion.div
                            className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full blur-sm"
                            animate={{
                                y: [0, 10, 0],
                                opacity: [0.5, 1, 0.5],
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
            </div>
        </section>
    );
};

export default About;