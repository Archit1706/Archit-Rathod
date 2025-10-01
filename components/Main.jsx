import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BsMedium } from "react-icons/bs";
import { FiMail, FiArrowDown } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { firstname, lastname, tagline, SocialLinks } from "../config";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const Main = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const controls = useAnimation();

    const rotatingTexts = [
        "Full Stack Developer",
        "UI/UX Designer",
        "Problem Solver",
        "Tech Enthusiast"
    ];

    // Typewriter effect
    useEffect(() => {
        const currentText = rotatingTexts[currentTextIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText !== currentText) {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayedText !== "") {
                    setDisplayedText(displayedText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentTextIndex((prevIndex) =>
                        prevIndex === rotatingTexts.length - 1 ? 0 : prevIndex + 1
                    );
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentTextIndex, rotatingTexts]);

    // Floating animation for background elements
    useEffect(() => {
        controls.start({
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        });
    }, [controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const nameVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const letterVariants = {
        hidden: { y: 50, opacity: 0, rotateX: -90 },
        visible: (index) => ({
            y: 0,
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.8,
                delay: index * 0.05,
                ease: "easeOut"
            }
        })
    };

    const socialVariants = {
        hidden: { scale: 0, rotate: 180 },
        visible: (index) => ({
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 1.5 + index * 0.1
            }
        }),
        hover: {
            scale: 1.2,
            y: -8,
            rotate: [0, -10, 10, 0],
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const backgroundShapes = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: Math.random() * 100 + 50,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        duration: Math.random() * 20 + 10
    }));

    const socialLinks = [
        { href: SocialLinks.linkedIn, icon: FaLinkedinIn, color: "#0A66C2", label: "LinkedIn" },
        { href: SocialLinks.github, icon: FaGithub, color: "#333", label: "GitHub" },
        { href: SocialLinks.twitter, icon: RiTwitterXFill, color: "#1DA1F2", label: "Twitter" },
        { href: SocialLinks.medium, icon: BsMedium, color: "#00AB6C", label: "Blogs" },
        { href: SocialLinks.leetcode, icon: SiLeetcode, color: "#FFA116", label: "LeetCode" },
        { href: SocialLinks.mail, icon: FiMail, color: "#EA4335", label: "Email" }
    ];

    return (
        <section id="home" className="relative w-full overflow-hidden flex items-center justify-center" style={{
            minHeight: "calc(100vh - 4rem)"
        }}>
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                {/* Gradient Background */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 60% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 60%, rgba(120, 200, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 60%, rgba(120, 200, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%)"
                        ]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />

                {/* Floating Geometric Shapes */}
                {backgroundShapes.map((shape) => (
                    <motion.div
                        key={shape.id}
                        className="absolute rounded-full opacity-5"
                        style={{
                            width: shape.size,
                            height: shape.size,
                            left: `${shape.initialX}%`,
                            top: `${shape.initialY}%`,
                            background: "linear-gradient(45deg, #8B5CF6, #EC4899, #3B82F6)"
                        }}
                        animate={{
                            x: [0, Math.random() * 200 - 100],
                            y: [0, Math.random() * 200 - 100],
                            rotate: [0, 360],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: shape.duration,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: "50px 50px"
                    }}
                />
            </div>

            {/* Main Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center px-4 max-w-6xl mx-auto"
            >
                {/* Greeting */}
                <motion.div
                    variants={itemVariants}
                    className="mb-8"
                >
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                        Hello There 👋
                    </span>
                </motion.div>

                {/* Name with Letter Animation */}
                <motion.div variants={nameVariants} className="mb-6">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                        <span className="block">
                            {`${firstname} ${lastname}`.split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterVariants}
                                    custom={index}
                                    className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
                                    style={{
                                        textShadow: "0 0 50px rgba(139, 92, 246, 0.3)"
                                    }}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </span>
                    </h1>
                </motion.div>

                {/* Dynamic Title with Typewriter Effect */}
                <motion.div
                    variants={itemVariants}
                    className="mb-8"
                >
                    <div className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300 min-h-[60px] flex items-center justify-center">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                            {displayedText}
                        </span>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="ml-1 text-purple-500"
                        >
                            |
                        </motion.span>
                    </div>
                </motion.div>

                {/* Tagline */}
                <motion.div
                    variants={itemVariants}
                    className="mb-12"
                >
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {tagline || "Passionate about creating innovative digital experiences that bridge creativity and technology. Let's build something amazing together."}
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="mb-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(139, 92, 246, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform"
                    >
                        Get In Touch
                    </motion.a>

                    <motion.a
                        href="/projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                    >
                        View My Work
                    </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center items-center space-x-4 mb-16"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={socialVariants}
                            custom={index}
                            whileHover="hover"
                            className="group relative p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                        >
                            <social.icon
                                size={24}
                                className="text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300"
                            />

                            {/* Tooltip */}
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                {social.label}
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                {/* <motion.div
                    variants={itemVariants}
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center text-gray-400 dark:text-gray-500 cursor-pointer"
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="text-sm mb-2 font-medium">Scroll Down</span>
                        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center relative">
                            <motion.div
                                animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1 h-3 bg-current rounded-full mt-2"
                            />
                        </div>
                    </motion.div>
                </motion.div> */}
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
                animate={controls}
                className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"
            />
            <motion.div
                animate={controls}
                className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"
                style={{ animationDelay: "3s" }}
            />
        </section>
    );
};

export default Main;