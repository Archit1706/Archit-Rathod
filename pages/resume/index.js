import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaDownload, FaEye, FaFilePdf, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import AnimationWrapper from "../../components/AnimationWrapper";

const ResumePage = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = () => {
        setIsDownloading(true);
        const fileName = "Archit_Rathod.pdf";
        const fileUrl = "/resume/Archit_Rathod.pdf";

        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => setIsDownloading(false), 2000);
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Resume | Archit Rathod</title>
                <meta name="title" content="Resume | Archit Rathod" />
                <meta
                    name="description"
                    content="View and download Archit Rathod's resume. Full-Stack Developer with expertise in MERN Stack, Next.js, and modern web technologies."
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Resume | Archit Rathod" />
                <meta property="og:description" content="View and download my resume" />
            </Head>

            <AnimationWrapper>
                <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-6xl mx-auto"
                    >
                        {/* Header Section */}
                        <motion.div variants={itemVariants} className="mb-8">
                            {/* Back Button */}
                            <Link href="/">
                                <motion.button
                                    className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                    whileHover={{ x: -5 }}
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    Back to Home
                                </motion.button>
                            </Link>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                                My{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                    Resume
                                </span>
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                                View my professional experience, skills, and qualifications. Download a copy for your records.
                            </p>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            <motion.button
                                onClick={handleDownload}
                                disabled={isDownloading}
                                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative flex items-center gap-2">
                                    {isDownloading ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            />
                                            Downloading...
                                        </>
                                    ) : (
                                        <>
                                            <FaDownload className="w-5 h-5" />
                                            Download Resume
                                        </>
                                    )}
                                </span>
                            </motion.button>

                            <a
                                href="/resume/Archit_Rathod.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.button
                                    className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-purple-600 dark:border-purple-400 rounded-xl font-semibold hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="flex items-center gap-2">
                                        <FaEye className="w-5 h-5" />
                                        Open in New Tab
                                    </span>
                                </motion.button>
                            </a>
                        </motion.div>

                        {/* Resume Preview Card */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
                        >
                            {/* Card Header */}
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <FaFilePdf className="text-white text-2xl" />
                                    <div>
                                        <h2 className="text-white font-bold text-lg">
                                            Archit_Rathod.pdf
                                        </h2>
                                        <p className="text-white/80 text-sm">
                                            Professional Resume
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* PDF Viewer */}
                            <div className="relative bg-gray-100 dark:bg-gray-900">
                                {/* Loading Skeleton */}
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 animate-pulse" />

                                {/* PDF Iframe */}
                                <iframe
                                    src="/resume/Archit_Rathod.pdf#view=FitH"
                                    title="Archit Rathod Resume"
                                    className="relative w-full h-[800px] md:h-[1000px] lg:h-[1200px] border-0"
                                    style={{
                                        backgroundColor: 'transparent'
                                    }}
                                />
                            </div>

                            {/* Card Footer */}
                            <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Last updated: January 2025
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium">
                                            Full-Stack Developer
                                        </span>
                                        <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 rounded-full text-xs font-medium">
                                            MERN Stack
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Info Cards */}
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                        >
                            <motion.div
                                variants={itemVariants}
                                className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg"
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="text-4xl mb-3">🎓</div>
                                <h3 className="font-bold text-lg mb-2">Education</h3>
                                <p className="text-white/90 text-sm">
                                    Computer Science & Engineering
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white shadow-lg"
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="text-4xl mb-3">💼</div>
                                <h3 className="font-bold text-lg mb-2">Experience</h3>
                                <p className="text-white/90 text-sm">
                                    Full-Stack Development
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg"
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="text-4xl mb-3">🚀</div>
                                <h3 className="font-bold text-lg mb-2">Projects</h3>
                                <p className="text-white/90 text-sm">
                                    10+ Completed Projects
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white shadow-2xl"
                        >
                            <h2 className="text-3xl font-bold mb-4">
                                Let's Work Together
                            </h2>
                            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                                I'm always interested in hearing about new opportunities and collaborations.
                                Feel free to reach out!
                            </p>
                            <Link href="/contact">
                                <motion.button
                                    className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get in Touch
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </AnimationWrapper>
        </>
    );
};

export default ResumePage;