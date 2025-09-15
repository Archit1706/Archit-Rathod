import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { firstname, SocialLinks } from '../config';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();

    const navItems = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Skills', href: '/#skills' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Research', href: '/#research' },
        { name: 'Contact', href: '/#contact' }
    ];

    const socialLinks = [
        { href: SocialLinks.github, icon: FaGithub, label: 'GitHub' },
        { href: SocialLinks.linkedIn, icon: FaLinkedinIn, label: 'LinkedIn' },
        { href: `mailto:${SocialLinks.email}`, icon: FaEnvelope, label: 'Email' }
    ];

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
        return () => window.removeEventListener('scroll', handleShadow);
    }, []);

    useEffect(() => {
        // Dynamic navbar colors based on route
        if (router.asPath === '/') {
            setNavBg('rgba(255, 255, 255, 0.9)');
            setLinkColor('#1f2937');
        } else {
            setNavBg('#1f2937');
            setLinkColor('#ecf0f3');
        }
    }, [router]);

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const logoVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: 0.2
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        }
    };

    const menuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const menuItemVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        hover: {
            scale: 1.05,
            x: 10,
            transition: {
                duration: 0.2
            }
        }
    };

    const mobileMenuVariants = {
        hidden: {
            x: '100%',
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        visible: {
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    const mobileMenuItemVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.4
            }
        }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <>
            <motion.div
                variants={navVariants}
                initial="hidden"
                animate="visible"
                style={{ backgroundColor: navBg }}
                className={`fixed w-full h-20 z-50 backdrop-blur-md border-b border-white/20 ${shadow ? 'shadow-lg' : ''
                    } transition-all duration-300`}
            >
                <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
                    {/* Logo */}
                    <motion.div variants={logoVariants} whileHover="hover">
                        <Link href="/">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300">
                                {firstname}
                            </h1>
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <motion.div variants={menuVariants} className="hidden md:flex">
                        <ul className="flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={menuItemVariants}
                                    whileHover="hover"
                                >
                                    <Link href={item.href}>
                                        <span
                                            style={{ color: linkColor }}
                                            className="text-sm uppercase font-medium cursor-pointer relative group transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-400"
                                        >
                                            {item.name}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleNav}
                        className="md:hidden cursor-pointer bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <AiOutlineMenu size={25} style={{ color: linkColor }} />
                    </motion.div>
                </div>

                {/* Mobile Menu Backdrop */}
                <AnimatePresence>
                    {nav && (
                        <motion.div
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={handleNav}
                            className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/50 backdrop-blur-sm z-40"
                        />
                    )}
                </AnimatePresence>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {nav && (
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-white/20 z-50 overflow-y-auto"
                        >
                            <div className="p-6">
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Link href="/">
                                            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer">
                                                {firstname}
                                            </h2>
                                        </Link>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handleNav}
                                        className="cursor-pointer bg-red-100 dark:bg-red-900/30 p-3 rounded-full hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors duration-300"
                                    >
                                        <AiOutlineClose size={20} className="text-red-600 dark:text-red-400" />
                                    </motion.div>
                                </div>

                                {/* Tagline */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-600 dark:text-gray-400 mb-8 text-center italic"
                                >
                                    "Creating digital experiences"
                                </motion.p>

                                {/* Mobile Navigation Links */}
                                <motion.ul
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.1,
                                                delayChildren: 0.4
                                            }
                                        }
                                    }}
                                    className="space-y-4 mb-8"
                                >
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={mobileMenuItemVariants}
                                            whileHover={{ x: 10 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link href={item.href}>
                                                <span
                                                    onClick={handleNav}
                                                    className="flex items-center text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer group"
                                                >
                                                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                                    {item.name}
                                                </span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Social Links */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="border-t border-gray-200 dark:border-gray-700 pt-6"
                                >
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
                                        Connect with me
                                    </p>
                                    <div className="flex justify-center space-x-4">
                                        {socialLinks.map((social, index) => {
                                            const IconComponent = social.icon;
                                            return (
                                                <motion.a
                                                    key={index}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300 group"
                                                    aria-label={social.label}
                                                >
                                                    <IconComponent
                                                        size={20}
                                                        className="text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
                                                    />
                                                </motion.a>
                                            );
                                        })}
                                    </div>
                                </motion.div>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="mt-8"
                                >
                                    <Link href="/#contact">
                                        <motion.button
                                            onClick={handleNav}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            Let's Work Together
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed top-20 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-40"
                initial={{ scaleX: 0 }}
                style={{
                    scaleX: typeof window !== 'undefined'
                        ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight))
                        : 0,
                    transformOrigin: "left"
                }}
            >
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" />
            </motion.div>
        </>
    );
};

export default Navbar;