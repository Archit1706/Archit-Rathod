import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { firstname, SocialLinks } from '../config';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    const { scrollYProgress } = useScroll();

    // Transform scroll progress to width for a clean progress bar
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Experience', href: '/experience' },
        { name: 'Skills', href: '/skills' },
        { name: 'Projects', href: '/projects' },
        { name: 'Research', href: '/research' },
        { name: 'Experience', href: '/experience' },
        { name: 'Resume', href: '/resume' },
        { name: 'Contact', href: '/contact' }
    ];

    const socialLinks = [
        { href: SocialLinks.github, icon: FaGithub, label: 'GitHub' },
        { href: SocialLinks.linkedIn, icon: FaLinkedinIn, label: 'LinkedIn' },
        { href: SocialLinks.mail, icon: FaEnvelope, label: 'Email' }
    ];

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarVariants = {
        top: {
            backgroundColor: "rgba(255, 255, 255, 0)",
            backdropFilter: "blur(0px)",
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            borderBottom: "1px solid rgba(255, 255, 255, 0)",
        },
        scrolled: {
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }
    };

    const logoVariants = {
        initial: { opacity: 0, x: -50 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        }
    };

    const menuItemVariants = {
        initial: { opacity: 0, y: -20 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.1 * index,
                ease: "easeOut"
            }
        }),
        hover: {
            y: -2,
            transition: { duration: 0.2 }
        }
    };

    const mobileMenuVariants = {
        hidden: {
            x: "100%",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        visible: {
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const mobileItemVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                delay: 0.1 * index,
                ease: "easeOut"
            }
        })
    };

    return (
        <>
            <motion.nav
                initial="top"
                animate={isScrolled ? "scrolled" : "top"}
                variants={navbarVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 w-full z-50 border-b border-transparent"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <motion.div
                            variants={logoVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                        >
                            <Link href="/">
                                <div className="relative cursor-pointer">
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                                        {firstname}
                                    </h2>
                                    <motion.div
                                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    variants={menuItemVariants}
                                    initial="initial"
                                    animate="animate"
                                    whileHover="hover"
                                    custom={index}
                                >
                                    <Link href={item.href}>
                                        <div className="relative group cursor-pointer">
                                            <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                                                {item.name}
                                            </span>
                                            <motion.div
                                                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                                                initial={{ width: 0 }}
                                                whileHover={{ width: "100%" }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <motion.button
                            onClick={handleNav}
                            className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatePresence mode="wait">
                                {nav ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: 0, opacity: 0 }}
                                        animate={{ rotate: 90, opacity: 1 }}
                                        exit={{ rotate: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <AiOutlineClose size={24} className="text-gray-700 dark:text-gray-300" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 0, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <AiOutlineMenu size={24} className="text-gray-700 dark:text-gray-300" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* Progress Bar */}
                <motion.div
                    className="h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 origin-left"
                    style={{ width: progressWidth }}
                />
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {nav && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                        onClick={handleNav}
                    >
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 pt-24">
                                {/* Mobile Logo */}
                                <div className="mb-8 text-center">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        {firstname}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                                        Full Stack Developer
                                    </p>
                                </div>

                                {/* Mobile Navigation */}
                                <nav className="space-y-6">
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            variants={mobileItemVariants}
                                            initial="hidden"
                                            animate="visible"
                                            custom={index}
                                        >
                                            <Link href={item.href}>
                                                <motion.div
                                                    onClick={handleNav}
                                                    className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                                                    whileHover={{ x: 10 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                        {item.name}
                                                    </span>
                                                </motion.div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Mobile Social Links */}
                                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex justify-center space-x-6">
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variants={mobileItemVariants}
                                                initial="hidden"
                                                animate="visible"
                                                custom={index + navItems.length}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 group"
                                            >
                                                <social.icon size={20} />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <motion.div
                                    variants={mobileItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={navItems.length + socialLinks.length}
                                    className="mt-8"
                                >
                                    <Link href="/#contact">
                                        <motion.button
                                            onClick={handleNav}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            Let's Work Together
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;