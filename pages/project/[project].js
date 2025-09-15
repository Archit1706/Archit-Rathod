"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendarAlt, FaCode, FaTags } from 'react-icons/fa';
import { projects } from '../../config';
import AnimationWrapper from '../../components/AnimationWrapper';

const ProjectDetail = () => {
    const router = useRouter();
    const { project } = router.query;

    // Find the project based on the slug
    const projectData = projects.find(p => {
        const projectSlug = p.url.split('/').pop();
        return projectSlug === project;
    });


    useEffect(() => {
        document.title = projectData.title + " | Archit Rathod";
    }, [projectData])

    // If project not found, show 404
    if (!projectData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Project Not Found
                    </h1>
                    <Link href="/#projects">
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                            Back to Projects
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <>
            <Head>
                <title>{projectData.title} | Archit Rathod Portfolio</title>
                <meta name="description" content={projectData.desc} />
                <meta property="og:title" content={`${projectData.title} | Archit Rathod Portfolio`} />
                <meta property="og:description" content={projectData.desc} />
                <meta property="og:image" content={projectData.img} />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-20">
                <div className="max-w-[1240px] mx-auto px-4 py-16">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Back Button */}
                        <motion.div variants={itemVariants} className="mb-8">
                            <Link href="/#projects">
                                <motion.button
                                    whileHover={{ scale: 1.05, x: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors duration-300"
                                >
                                    <FaArrowLeft />
                                    Back to Projects
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Project Header */}
                        <motion.div variants={itemVariants} className="text-center mb-12">
                            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
                                {projectData.title}
                            </h1>
                            {/* <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                {projectData.desc}
                            </p> */}
                        </motion.div>

                        {/* Project Image */}
                        <motion.div variants={itemVariants} className="mb-12">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src={projectData.img}
                                    alt={projectData.alt}
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </motion.div>

                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Project Details */}
                            <div className="lg:col-span-2">
                                <motion.div variants={itemVariants}>
                                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                                        Project Overview
                                    </h2>
                                    <div className="prose prose-lg dark:prose-invert max-w-none">
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                            {projectData.desc}
                                        </p>


                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                                            Key Features
                                        </h3>
                                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                            {projectData.features && projectData.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Project Sidebar */}
                            <div className="lg:col-span-1">
                                <motion.div variants={itemVariants}>
                                    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 sticky top-24">
                                        {/* Project Links */}
                                        <div className="mb-8">
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                                                Project Links
                                            </h3>
                                            <div className="space-y-3">
                                                {projectData.github && (
                                                    <a
                                                        href={projectData.github}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                                                    >
                                                        <FaGithub className="text-gray-800 dark:text-white" />
                                                        <span className="text-gray-800 dark:text-white font-medium">
                                                            View Code
                                                        </span>
                                                    </a>
                                                )}
                                                {projectData.link && (
                                                    <a
                                                        href={projectData.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center gap-3 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors duration-300"
                                                    >
                                                        <FaExternalLinkAlt className="text-purple-600 dark:text-purple-400" />
                                                        <span className="text-purple-600 dark:text-purple-400 font-medium">
                                                            Live Demo
                                                        </span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        <div className="mb-8">
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                                <FaCode />
                                                Technologies
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {projectData.tech.map((technology, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium"
                                                    >
                                                        {technology}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Project Info */}
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                                                Project Info
                                            </h3>

                                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                                <FaCalendarAlt className="text-purple-600 dark:text-purple-400" />
                                                <span>Completed: 2024</span>
                                            </div>

                                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                                <FaTags className="text-purple-600 dark:text-purple-400" />
                                                <span>Category: {projectData.category || 'Web Development'}</span>
                                            </div>

                                            {projectData.featured && (
                                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                                    <span>Featured Project</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* CTA */}
                                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                                            <Link href="/#contact">
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                                >
                                                    Discuss Your Project
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Related Projects */}
                        <motion.div variants={itemVariants} className="mt-16">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                                Other Projects
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {projects
                                    .filter(p => p.url !== projectData.url) // ✅ Fixed: Filter by URL instead of ID
                                    .slice(0, 3)
                                    .map((relatedProject, index) => (
                                        <Link key={relatedProject.url} href={`/project/${relatedProject.url}`}>
                                            <motion.div
                                                whileHover={{ scale: 1.02, y: -5 }}
                                                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 cursor-pointer"
                                            >
                                                <Image
                                                    src={relatedProject.img}
                                                    alt={relatedProject.alt}
                                                    width={400}
                                                    height={200}
                                                    className="w-full h-48 object-cover"
                                                />
                                                <div className="p-6">
                                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                                                        {relatedProject.title}
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                                                        {relatedProject.desc.substring(0, 100)}...
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </Link>
                                    ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

// This function gets called at build time
export async function getStaticPaths() {
    // Extract the slug from the url field (remove the leading slash)
    const paths = projects
        .filter(project => project.url && typeof project.url === 'string') // Ensure url exists and is a string
        .map((project) => ({
            params: {
                project: project.url.startsWith('/') ? project.url.slice(1) : project.url // Remove leading slash
            }
        }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const { project } = params;

    // Find the project by matching the slug
    const projectData = projects.find(p => {
        const slug = p.url.startsWith('/') ? p.url.slice(1) : p.url;
        return slug === project;
    });

    if (!projectData) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            project: projectData
        }
    };
}

export default ProjectDetail;