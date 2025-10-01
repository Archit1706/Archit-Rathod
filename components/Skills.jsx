import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { languages, databases, tools } from "../config";
import AnimationWrapper from "./AnimationWrapper";

const Skills = () => {
    const [activeTab, setActiveTab] = useState("languages");
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillCategories = {
        languages: { data: languages, title: "Languages & Frameworks", icon: "💻" },
        databases: { data: databases, title: "Databases & Storage", icon: "🗄️" },
        tools: { data: tools, title: "Tools & Platforms", icon: "🛠️" }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.8,
            rotateY: -45
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        hover: {
            y: -8,
            scale: 1.05,
            rotateY: 5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.2
            }
        }
    };

    const backgroundVariants = {
        animate: {
            background: [
                "linear-gradient(45deg, rgba(139,69,19,0.1) 0%, rgba(255,119,198,0.1) 100%)",
                "linear-gradient(135deg, rgba(120,119,198,0.1) 0%, rgba(139,69,19,0.1) 100%)",
                "linear-gradient(225deg, rgba(255,119,198,0.1) 0%, rgba(120,119,198,0.1) 100%)"
            ],
            transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    return (
        <section id="skills" className="w-full p-2 pt-20 relative overflow-hidden"
            style={{ minHeight: "calc(100vh - 4rem)" }}
        >
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0 -z-10"
                variants={backgroundVariants}
                animate="animate"
            />

            {/* Floating Elements */}
            <div className="absolute inset-0 -z-5">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-30, 30, -30],
                            x: [-20, 20, -20],
                            rotate: [0, 360],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-[1240px] mx-auto flex flex-col justify-center relative z-10">
                {/* Section Header */}
                <AnimationWrapper direction="up" duration={0.8}>
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="uppercase text-xl tracking-widest text-[#5651e5] dark:text-[#a29bfe] font-semibold"
                        >
                            Skills
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="py-4 dark:text-white text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                        >
                            Technologies I Work With
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        />
                    </div>
                </AnimationWrapper>

                {/* Tab Navigation */}
                <AnimationWrapper direction="scale" delay={0.3}>
                    <div className="flex justify-center mb-12">
                        <div className="flex bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-2 border border-white/20">
                            {Object.entries(skillCategories).map(([key, category]) => (
                                <motion.button
                                    key={key}
                                    variants={tabVariants}
                                    whileHover="hover"
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === key
                                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                                        : "text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                                        }`}
                                >
                                    <span>{category.icon}</span>
                                    <span className="hidden md:inline">{category.title}</span>
                                    <span className="md:hidden">{key}</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </AnimationWrapper>

                {/* Skills Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8"
                    >
                        {skillCategories[activeTab].data.map((skill, index) => (
                            <motion.div
                                key={`${activeTab}-${index}`}
                                variants={itemVariants}
                                whileHover="hover"
                                onHoverStart={() => setHoveredSkill(`${activeTab}-${index}`)}
                                onHoverEnd={() => setHoveredSkill(null)}
                                className="relative group"
                            >
                                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                    {/* Skill Content */}
                                    <div className="relative z-10">
                                        <div className="flex flex-col items-center text-center">
                                            {/* Skill Icon/Image */}
                                            <div className="relative mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
                                                <Image
                                                    src={skill.img}
                                                    width={60}
                                                    height={60}
                                                    alt={skill.alt}
                                                    className="relative z-10 filter drop-shadow-lg"
                                                />
                                            </div>

                                            {/* Skill Name */}
                                            <h3 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                                {skill.name}
                                            </h3>

                                            {/* Skill Level Indicator */}
                                            {skill.level && (
                                                <div className="mt-3 w-full">
                                                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${skill.level}%` }}
                                                            transition={{ duration: 1, delay: index * 0.1 }}
                                                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                                        />
                                                    </div>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 text-center">
                                                        {skill.level}% Proficiency
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <AnimatePresence>
                                        {hoveredSkill === `${activeTab}-${index}` && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-2xl"
                                            />
                                        )}
                                    </AnimatePresence>

                                    {/* Border Glow */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
                                </div>

                                {/* Floating Badge */}
                                <AnimatePresence>
                                    {hoveredSkill === `${activeTab}-${index}` && skill.experience && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                            className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg z-20"
                                        >
                                            {skill.experience}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Skills;