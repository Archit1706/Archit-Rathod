import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
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

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="md:hidden fixed top-20 right-6 z-50 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg border border-white/20"
                aria-label="Toggle menu"
            >
                <motion.div
                    animate={isOpen ? "open" : "closed"}
                    className="w-6 h-5 flex flex-col justify-between"
                >
                    <motion.span
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: 45, y: 8 }
                        }}
                        className="w-full h-0.5 bg-gray-800 dark:bg-white block"
                    />
                    <motion.span
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        className="w-full h-0.5 bg-gray-800 dark:bg-white block"
                    />
                    <motion.span
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: -45, y: -8 }
                        }}
                        className="w-full h-0.5 bg-gray-800 dark:bg-white block"
                    />
                </motion.div>
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden"
                        >
                            <div className="flex flex-col h-full pt-24 px-6">
                                {/* Navigation Links */}
                                <nav className="flex-1">
                                    {navItems.map((item, index) => (
                                        <Link key={item.path} href={item.path}>
                                            <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                onClick={toggleMenu}
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
        </>
    );
};

export default MobileMenu;