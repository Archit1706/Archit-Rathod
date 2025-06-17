import React from "react";
import Image from "next/image";
import { languages, databases, tools } from "../config";
import AnimationWrapper from "./AnimationWrapper";
import { motion } from "framer-motion";

const Skills = () => {
    const SkillCard = ({ skill, index, category }) => (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateY: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.05,
                rotateY: 10,
                z: 50
            }}
            className="group relative"
        >
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden">
                {/* Animated background glow */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"
                    animate={{
                        opacity: [0, 0.3, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Cosmic particles effect */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 blur-sm transition-all duration-300" />
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-80 blur-sm transition-all duration-300" />

                <div className="relative z-10 grid grid-cols-2 gap-4 justify-center items-center">
                    <motion.div
                        className="m-auto relative"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Skill icon with glow */}
                        <div className="relative p-2 rounded-lg">
                            <Image
                                src={skill.img}
                                width="80"
                                height="80"
                                alt={skill.alt}
                                className="transition-all duration-300 group-hover:drop-shadow-lg"
                            />

                            {/* Animated ring around icon */}
                            <motion.div
                                className="absolute inset-0 rounded-lg border-2 border-transparent"
                                animate={{
                                    borderColor: [
                                        'rgba(139, 92, 246, 0)',
                                        'rgba(139, 92, 246, 0.5)',
                                        'rgba(139, 92, 246, 0)'
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>

                    <div className="flex flex-col items-center justify-center">
                        <motion.h3
                            className="text-white font-semibold text-center group-hover:text-purple-200 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                        >
                            {skill.name}
                        </motion.h3>

                        {/* Skill level indicator */}
                        <motion.div
                            className="mt-2 w-16 h-1 bg-gray-700 rounded-full overflow-hidden"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                                initial={{ width: '0%' }}
                                whileInView={{ width: '90%' }}
                                transition={{ duration: 1.5, delay: index * 0.1 + 0.8 }}
                                viewport={{ once: true }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="skills" className="relative w-full p-2 pt-20 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
            {/* Background cosmic effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-[1240px] mx-auto flex flex-col justify-center relative z-10">
                <motion.p
                    className="uppercase text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Skills
                </motion.p>

                <motion.h2
                    className="py-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Technologies I&apos;ve Mastered
                </motion.h2>

                {/* Languages Section */}
                <motion.h3
                    className="text-3xl py-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    🚀 Programming Languages
                </motion.h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 mb-16">
                    {languages.map((language, index) => (
                        <SkillCard key={index} skill={language} index={index} category="language" />
                    ))}
                </div>

                {/* Databases Section */}
                <motion.h3
                    className="text-3xl py-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    🗄️ Databases & Storage
                </motion.h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 mb-16">
                    {databases.map((database, index) => (
                        <SkillCard key={index} skill={database} index={index} category="database" />
                    ))}
                </div>

                {/* Tools Section */}
                <motion.h3
                    className="text-3xl py-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    🛠️ Frameworks, Libraries & Tools
                </motion.h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
                    {tools.map((tool, index) => (
                        <SkillCard key={index} skill={tool} index={index} category="tool" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;