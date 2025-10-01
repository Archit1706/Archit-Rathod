import { use, useEffect, useState } from 'react';
import CustomCursor from './CustomCursor';
import TableOfContents from './TableOfContents';

const BlogLayout = ({ children }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [showTOC, setShowTOC] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setShowTOC(window.location.pathname.startsWith('/blogs/posts/'));
        }
    }, []);

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

            {/* Table of Contents - Sticky on Right */}
            {/* only show on /blogs/posts/<post-name> pages*/}

            {showTOC && <TableOfContents />}

            {/* Reading Progress Bar */}
            <div
                className="reading-progress"
                style={{ width: `${scrollProgress}%` }}
            />

            {/* Main Content */}
            <div className="blog-content relative z-10">
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