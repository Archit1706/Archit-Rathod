import { useEffect, useState } from 'react';
import CustomCursor from './CustomCursor';
import TableOfContents from './TableOfContents';
import Navbar from './Navbar';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const BlogLayout = ({ children, isDarkMode, setIsDarkMode }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [showTOC, setShowTOC] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const router = useRouter();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Research', path: '/research' },
        { name: 'Experience', path: '/experience' },
        { name: 'Resume', path: '/resume' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // FIXED: Update TOC visibility whenever the route changes
    useEffect(() => {
        // Check if the current path is a blog post page
        const isBlogPost = router.pathname.startsWith('/blogs/posts/') &&
            router.pathname !== '/blogs/posts' &&
            router.pathname !== '/blogs/posts/';
        setShowTOC(isBlogPost);
    }, [router.pathname]); // Added router.pathname as dependency

    useEffect(() => {
        const handleScroll = () => {
            // Calculate reading progress
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = (window.scrollY / documentHeight) * 100;
            setScrollProgress(scrolled);

            // Show/hide back to top button
            setShowBackToTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="blog-layout min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 transition-colors duration-500">
            {/* Custom Cursor */}
            <CustomCursor />

            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="fixed bottom-6 right-6 z-50 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label="Toggle dark mode"
            >
                {isDarkMode ? (
                    <svg className="w-6 h-6 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6 text-purple-800" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                )}
            </button>

            {/* Scroll Progress Indicator */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
                <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>

            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/50 dark:border-gray-700/50 mt-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Brand */}
                        <Link href="/">
                            <motion.div
                                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                AR
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link key={item.path} href={item.path}>
                                    <motion.div
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${router.pathname === item.path
                                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.name}
                                    </motion.div>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMobileMenu}
                            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="md:hidden fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
                        >
                            <div className="flex flex-col h-full p-6">
                                {/* Close Button */}
                                <button
                                    onClick={toggleMobileMenu}
                                    className="self-end p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {/* Navigation Links */}
                                <nav className="flex-1">
                                    {navItems.map((item, index) => (
                                        <Link key={item.path} href={item.path}>
                                            <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                onClick={toggleMobileMenu}
                                                className={`block py-4 px-4 rounded-lg mb-2 transition-all cursor-pointer ${router.pathname === item.path
                                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                    }`}
                                            >
                                                <span className="text-lg font-medium">{item.name}</span>
                                            </motion.div>
                                        </Link>
                                    ))}
                                </nav>

                                {/* Footer */}
                                <div className="py-6 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                        © 2025 Archit Rathod
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Table of Contents - Sticky on Right */}
            {showTOC && <TableOfContents />}

            {/* Reading Progress Bar */}
            <div
                className="reading-progress"
                style={{ width: `${scrollProgress}%` }}
            />

            {/* Main Content */}
            <div className="blog-content relative z-10 pt-20">
                {children}
            </div>

            {/* Back to Top Button */}
            <button
                className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Back to top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>

            {/* Floating Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
        </div>
    );
};

export default BlogLayout;