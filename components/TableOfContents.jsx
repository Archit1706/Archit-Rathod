import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TableOfContents = () => {
    const [headings, setHeadings] = useState([]);
    const [activeId, setActiveId] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        // Extract all headings from the page
        const elements = Array.from(document.querySelectorAll('h2, h3, h4'));
        const headingData = elements.map((elem, index) => {
            // Generate ID if not present
            if (!elem.id) {
                const id = elem.textContent
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
                elem.id = id || `heading-${index}`;
            }

            return {
                id: elem.id,
                text: elem.textContent,
                level: parseInt(elem.tagName.charAt(1))
            };
        });

        setHeadings(headingData);

        // Set up Intersection Observer to track active section
        const observerOptions = {
            rootMargin: '-80px 0px -80% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        elements.forEach((elem) => observer.observe(elem));

        return () => observer.disconnect();
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Account for any fixed headers
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    if (headings.length === 0) return null;

    return (
        <div className="hidden xl:block fixed right-8 top-24 w-64 max-h-[calc(100vh-120px)] z-40">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl border border-purple-200 dark:border-purple-800 overflow-hidden"
            >
                {/* Header */}
                <div
                    className="flex items-center justify-between p-4 border-b border-purple-200 dark:border-purple-800 cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <h3 className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent uppercase tracking-wide">
                        Contents
                    </h3>
                    <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5 text-purple-600 dark:text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                </div>

                {/* Table of Contents List */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="py-2 px-3 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
                                <ul className="space-y-1">
                                    {headings.map((heading, index) => {
                                        const isActive = activeId === heading.id;
                                        const paddingLeft = (heading.level - 2) * 12;

                                        return (
                                            <motion.li
                                                key={heading.id}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                style={{ paddingLeft: `${paddingLeft}px` }}
                                            >
                                                <a
                                                    href={`#${heading.id}`}
                                                    onClick={(e) => handleClick(e, heading.id)}
                                                    className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 group ${isActive
                                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md'
                                                        : 'text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400'
                                                        }`}
                                                >
                                                    <span className="flex items-center gap-2">
                                                        {isActive && (
                                                            <motion.span
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                className="w-1.5 h-1.5 rounded-full bg-white"
                                                            />
                                                        )}
                                                        <span className="line-clamp-2">
                                                            {heading.text}
                                                        </span>
                                                    </span>
                                                </a>
                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>

                {/* Footer with scroll progress */}
                <div className="p-3 border-t border-purple-200 dark:border-purple-800">
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>{headings.length} sections</span>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            Top
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Toggle Button - Shows on smaller screens */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden fixed bottom-20 right-6 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
                aria-label="Toggle table of contents"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    );
};

export default TableOfContents;