import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";

import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Research from "../components/Research";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import AnimationWrapper from "../components/AnimationWrapper";
import PageTransition from "../components/PageTransition";
import CustomCursor from "../components/CustomCursor";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or default to dark mode
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    };

    return (
        <PageTransition>
            <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-all duration-500">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />

                    <meta name="author" content="Archit Rathod" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#8b45f7" />

                    <meta
                        name="keywords"
                        content="Archit Rathod, Archit, Rathod, architrathod, Full Stack Developer, MERN Stack, Next.js, React Developer, Web Developer, Portfolio"
                    />

                    <title>Archit Rathod | Full-Stack Developer Portfolio</title>
                    <meta name="title" content="Archit Rathod | Full-Stack Developer Portfolio" />
                    <meta
                        name="description"
                        content="Full-Stack Web Developer specializing in MERN Stack, Next.js, and modern web technologies. Passionate about creating innovative digital experiences and AI/ML solutions."
                    />
                    <meta name="role" content="full stack developer" />

                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://www.architrathod.codes/"
                    />
                    <meta property="og:title" content="Archit Rathod | Full-Stack Developer Portfolio" />
                    <meta
                        property="og:description"
                        content="Full-Stack Web Developer specializing in MERN Stack, Next.js, and modern web technologies. Passionate about creating innovative digital experiences."
                    />
                    <meta
                        property="og:image"
                        content="https://www.architrathod.codes/assets/portfolio.jpg"
                    />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta property="og:site_name" content="Archit Rathod Portfolio" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta
                        property="twitter:url"
                        content="https://www.architrathod.codes/"
                    />
                    <meta
                        property="twitter:title"
                        content="Archit Rathod | Full-Stack Developer Portfolio"
                    />
                    <meta
                        property="twitter:description"
                        content="Full-Stack Web Developer specializing in MERN Stack, Next.js, and modern web technologies."
                    />
                    <meta
                        property="twitter:image"
                        content="https://www.architrathod.codes/assets/portfolio.jpg"
                    />
                    <meta name="twitter:site" content="@ArchitRathod_17" />
                    <meta name="twitter:creator" content="@ArchitRathod_17" />

                    <meta property="og:locale" content="en_US" />

                    {/* Preload critical fonts */}
                    <link
                        rel="preload"
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
                        as="style"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                {/* Custom Cursor */}
                <CustomCursor />

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="fixed top-6 right-6 z-50 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/20"
                    aria-label="Toggle dark mode"
                >
                    {isDarkMode ? (
                        <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                </button>

                {/* Scroll Progress Indicator */}
                <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
                    <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-150 ease-out"
                        style={{
                            width: typeof window !== 'undefined'
                                ? `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
                                : '0%'
                        }}
                    />
                </div>

                {/* Smooth Scrolling Container */}
                <div className="overflow-x-hidden">
                    {/* Hero Section */}
                    <Main />

                    {/* About Section */}
                    <AnimationWrapper direction="up" delay={0.2}>
                        <About />
                    </AnimationWrapper>

                    {/* Experience Section */}
                    <AnimationWrapper direction="fade" delay={0.1}>
                        <Experience />
                    </AnimationWrapper>

                    {/* Skills Section */}
                    <AnimationWrapper direction="fade" delay={0.1}>
                        <Skills />
                    </AnimationWrapper>

                    {/* Projects Section */}
                    <AnimationWrapper direction="up" delay={0.1}>
                        <Projects />
                    </AnimationWrapper>

                    {/* Research Section */}
                    <AnimationWrapper direction="scale" delay={0.1}>
                        <Research />
                    </AnimationWrapper>

                    {/* Contact Section */}
                    <AnimationWrapper direction="up" delay={0.2}>
                        <Contact />
                    </AnimationWrapper>

                    {/* Footer */}
                    <footer className="bg-gray-900 dark:bg-black text-white py-12">
                        <div className="max-w-[1240px] mx-auto px-4 text-center">
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                                    Archit Rathod
                                </h3>
                                <p className="text-gray-400 max-w-md mx-auto">
                                    Building the future, one line of code at a time.
                                </p>
                            </div>

                            <div className="border-t border-gray-800 pt-8">
                                <p className="text-gray-500 text-sm">
                                    © 2024 Archit Rathod. All rights reserved. Built with ❤️ using Next.js
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </PageTransition>
    );
}