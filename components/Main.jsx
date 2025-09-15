import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BsMedium } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { firstname, lastname, tagline, SocialLinks } from "../config";
import { motion, AnimatePresence } from "framer-motion";

const Main = () => {
    const [currentText, setCurrentText] = useState(0);
    const dynamicTexts = [
        "Full-Stack Web Developer",
        "MERN Stack Developer",
        "Next.js Specialist",
        "AI/ML Enthusiast"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const socialIconVariants = {
        hidden: { scale: 0, rotate: 180 },
        visible: (i) => ({
            scale: 1,
            rotate: 0,
            transition: {
                delay: 1.2 + i * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }),
        hover: {
            scale: 1.2,
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const backgroundVariants = {
        animate: {
            background: [
                "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.3) 0%, transparent 50%)"
            ],
            transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        }
    };

    const socialLinks = [
        { href: SocialLinks.linkedIn, icon: FaLinkedinIn, color: "#0A66C2", label: "LinkedIn" },
        { href: SocialLinks.github, icon: FaGithub, color: "#333", label: "GitHub" },
        { href: SocialLinks.twitter, icon: RiTwitterXFill, color: "#1DA1F2", label: "Twitter" },
        { href: SocialLinks.medium, icon: BsMedium, color: "#00AB6C", label: "Medium" },
        { href: SocialLinks.leetcode, icon: SiLeetcode, color: "#FFA116", label: "LeetCode" },
        { href: SocialLinks.mail, icon: FiMail, color: "#EA4335", label: "Email" }
    ];

    return (
        <section id="home" className="relative w-full h-screen text-center overflow-hidden">
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0 -z-10"
                variants={backgroundVariants}
                animate="animate"
            />

            {/* Floating Particles */}
            <div className="absolute inset-0 -z-5">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="backdrop-blur-sm bg-white/5 dark:bg-gray-900/10 rounded-3xl p-8 shadow-2xl border border-white/10"
                >
                    <motion.p
                        variants={itemVariants}
                        className="mt-32 md:mt-16 uppercase tracking-widest text-sm text-gray-600 dark:text-gray-400 font-medium"
                    >
                        Hello There 🤟!
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="py-4 text-gray-700 dark:text-gray-200 text-4xl md:text-6xl font-bold"
                    >
                        I&apos;m{" "}
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                            {firstname + " " + lastname}
                        </span>
                    </motion.h1>

                    <motion.div
                        variants={itemVariants}
                        className="py-2 text-gray-700 dark:text-gray-200 text-2xl md:text-4xl font-semibold h-20"
                    >
                        A{" "}
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentText}
                                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                                transition={{ duration: 0.5 }}
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-pink-600 to-cyan-500 font-bold"
                            >
                                {dynamicTexts[currentText]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="py-4 text-gray-600 dark:text-gray-400 max-w-[70%] m-auto leading-relaxed"
                    >
                        {tagline}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-4 max-w-[450px] m-auto py-4 flex-wrap"
                    >
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon;
                            return (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    custom={index}
                                    variants={socialIconVariants}
                                    whileHover="hover"
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative"
                                >
                                    <div
                                        className="rounded-full cursor-pointer backdrop-blur-md bg-white/10 dark:bg-gray-800/30 p-4 border border-white/20 shadow-lg transition-all duration-300 group-hover:shadow-2xl"
                                        style={{
                                            '--hover-color': social.color
                                        }}
                                    >
                                        <IconComponent
                                            size={24}
                                            className="text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300"
                                            style={{
                                                filter: 'drop-shadow(0 0 10px var(--hover-color))'
                                            }}
                                        />
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        {social.label}
                                    </div>
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex justify-center"
                        >
                            <motion.div
                                animate={{ y: [0, 16, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1 h-3 bg-gray-400 dark:bg-gray-300 rounded-full mt-2"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Main;