import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BsMedium } from "react-icons/bs";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { SocialLinks, contact } from "../config";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative w-full min-h-screen p-2 flex items-center py-16 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"
        >
            {/* Cosmic background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-[1240px] m-auto px-2 py-16 w-full relative z-10">
                <motion.p
                    className="py-4 uppercase text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Contact
                </motion.p>

                <motion.h2
                    className="py-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Let&apos;s Connect Across the Digital Galaxy
                </motion.h2>

                <motion.p
                    className="py-4 text-gray-300 text-lg text-center max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Ready to embark on a cosmic coding adventure? Let&apos;s create something extraordinary together!
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-12 mt-16">
                    {/* Contact Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                🌌 Get in Touch
                            </h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <motion.div
                                    className="flex items-center gap-4 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
                                    whileHover={{ x: 10, scale: 1.02 }}
                                >
                                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30">
                                        <FiMail className="text-purple-300 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <a
                                            href={`mailto:${SocialLinks.mail}`}
                                            className="text-white hover:text-purple-300 transition-colors duration-300 font-medium"
                                        >
                                            {SocialLinks.mail}
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    className="flex items-center gap-4 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
                                    whileHover={{ x: 10, scale: 1.02 }}
                                >
                                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30">
                                        <FiPhone className="text-purple-300 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Phone</p>
                                        <p className="text-white font-medium">+1 (555) 123-4567</p>
                                    </div>
                                </motion.div>

                                {/* Location */}
                                <motion.div
                                    className="flex items-center gap-4 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
                                    whileHover={{ x: 10, scale: 1.02 }}
                                >
                                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30">
                                        <FiMapPin className="text-purple-300 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Location</p>
                                        <p className="text-white font-medium">Earth, Milky Way Galaxy</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <motion.div
                            className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/30 backdrop-blur-sm border border-purple-500/30"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-bold text-white mb-6 text-center">
                                🚀 Follow My Journey
                            </h3>

                            <div className="flex flex-wrap justify-center gap-4">
                                {/* Social Media Icons */}
                                {[
                                    { icon: FaLinkedinIn, href: SocialLinks.linkedIn, color: '#0A66C2', name: 'LinkedIn' },
                                    { icon: FaGithub, href: SocialLinks.github, color: '#6B7280', name: 'GitHub' },
                                    { icon: RiTwitterXFill, href: SocialLinks.twitter, color: '#1DA1F2', name: 'Twitter' },
                                    { icon: SiLeetcode, href: SocialLinks.leetcode, color: '#FFA116', name: 'LeetCode' },
                                    { icon: BsMedium, href: SocialLinks.medium, color: '#00AB6C', name: 'Medium' },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative"
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <div
                                            className="p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 transition-all duration-300 group-hover:shadow-lg"
                                            style={{
                                                '--hover-shadow': `0 0 20px ${social.color}50`
                                            }}
                                        >
                                            <social.icon
                                                className="text-xl text-purple-300 transition-colors duration-300"
                                                style={{
                                                    color: 'inherit'
                                                }}
                                            />
                                        </div>

                                        {/* Tooltip */}
                                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            {social.name}
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                📨 Send a Message
                            </h3>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <motion.div whileFocus={{ scale: 1.02 }}>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full p-4 rounded-xl bg-purple-900/20 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                                        />
                                    </motion.div>

                                    <motion.div whileFocus={{ scale: 1.02 }}>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full p-4 rounded-xl bg-purple-900/20 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div whileFocus={{ scale: 1.02 }}>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full p-4 rounded-xl bg-purple-900/20 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                                    />
                                </motion.div>

                                <motion.div whileFocus={{ scale: 1.02 }}>
                                    <textarea
                                        rows={6}
                                        placeholder="Your message..."
                                        className="w-full p-4 rounded-xl bg-purple-900/20 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    🚀 Launch Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;