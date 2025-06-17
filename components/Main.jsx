import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BsMedium } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { firstname, lastname, tagline, SocialLinks } from "../config";
import { motion } from "framer-motion";

const Main = () => {
    return (
        <section id="home" className="relative w-full h-screen text-center overflow-hidden">
            {/* Hero Background Gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-transparent to-transparent" />

            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center relative z-10">
                <div className="space-y-6">
                    {/* Greeting Animation */}
                    <motion.p
                        className="mt-32 md:mt-16 uppercase tracking-widest text-sm text-purple-300 font-light"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block animate-bounce mr-2">🚀</span>
                        Welcome to the Digital Cosmos
                    </motion.p>

                    {/* Name Animation with Cosmic Effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1 className="py-4 text-white text-4xl md:text-6xl lg:text-7xl font-bold relative">
                            I&apos;m{" "}
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-gradient-x font-extrabold">
                                    {firstname + " " + lastname}
                                </span>
                                {/* Cosmic glow effect */}
                                <motion.div
                                    className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 blur-sm"
                                    animate={{
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {firstname + " " + lastname}
                                </motion.div>
                            </span>
                        </h1>
                    </motion.div>

                    {/* Title with Galaxy Effect */}
                    <motion.h1
                        className="py-2 text-white text-2xl md:text-4xl lg:text-5xl font-semibold"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        A{" "}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 animate-pulse">
                                Full-Stack
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 opacity-20 blur-xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                            Web Developer
                        </span>
                    </motion.h1>

                    {/* Tagline with Floating Animation */}
                    <motion.p
                        className="py-4 text-gray-300 max-w-[70%] m-auto text-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        {tagline}
                    </motion.p>

                    {/* Enhanced Social Links */}
                    <motion.div
                        className="flex items-center justify-center gap-6 max-w-md mx-auto py-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        {/* LinkedIn */}
                        <motion.a
                            href={SocialLinks.linkedIn}
                            target="_blank"
                            rel="noreferrer"
                            className="group"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <div className="relative p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-[#0A66C2] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#0A66C2]/50">
                                <FaLinkedinIn className="text-xl text-purple-300 group-hover:text-[#0A66C2] transition-colors duration-300" />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0A66C2]/0 to-[#0A66C2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.a>

                        {/* GitHub */}
                        <motion.a
                            href={SocialLinks.github}
                            target="_blank"
                            rel="noreferrer"
                            className="group"
                            whileHover={{ scale: 1.2, rotate: -360 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <div className="relative p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-gray-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-400/50">
                                <FaGithub className="text-xl text-purple-300 group-hover:text-gray-300 transition-colors duration-300" />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400/0 to-gray-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            href={"mailto:" + SocialLinks.mail}
                            target="_blank"
                            rel="noreferrer"
                            className="group"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <div className="relative p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-red-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/50">
                                <FiMail className="text-xl text-purple-300 group-hover:text-red-400 transition-colors duration-300" />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/0 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.a>

                        {/* Twitter */}
                        <motion.a
                            href={SocialLinks.twitter}
                            target="_blank"
                            rel="noreferrer"
                            className="group"
                            whileHover={{ scale: 1.2, rotate: -360 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <div className="relative p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-gray-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-400/50">
                                <RiTwitterXFill className="text-xl text-purple-300 group-hover:text-gray-300 transition-colors duration-300" />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400/0 to-gray-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.a>

                        {/* LeetCode */}
                        <motion.a
                            href={SocialLinks.leetcode}
                            target="_blank"
                            rel="noreferrer"
                            className="group"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <div className="relative p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-orange-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/50">
                                <SiLeetcode className="text-xl text-purple-300 group-hover:text-orange-400 transition-colors duration-300" />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/0 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.a>

                        {/* Medium */}
                        <motion.a
                            href={SocialLinks.medium}
                            target="_blank"
                            rel="noreferrer"
                            className="group"
                            whileHover={{ scale: 1.2, rotate: -360 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <div className="relative p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-green-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/50">
                                <BsMedium className="text-xl text-purple-300 group-hover:text-green-400 transition-colors duration-300" />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/0 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                    >
                        <motion.div
                            className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.div
                                className="w-1 h-3 bg-purple-400 rounded-full mt-2"
                                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Main;