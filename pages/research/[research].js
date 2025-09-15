import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaFilePdf, FaExternalLinkAlt, FaArrowLeft, FaCalendarAlt, FaUser, FaTags, FaPlay, FaUniversity } from 'react-icons/fa';
import { researchs } from '../../config';
import AnimationWrapper from '../../components/AnimationWrapper';

const ResearchDetail = () => {
    const router = useRouter();
    const { slug } = router.query;

    // Find the research based on the slug
    const research = researchs.find(r => {
        const researchSlug = r.url.split('/').pop();
        return researchSlug === slug;
    });

    // If research not found, show 404
    if (!research) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Research Not Found
                    </h1>
                    <Link href="/#research">
                        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                            Back to Research
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
                <title>{research.title} | Archit Rathod Research</title>
                <meta name="description" content={research.desc} />
                <meta property="og:title" content={`${research.title} | Archit Rathod Research`} />
                <meta property="og:description" content={research.desc} />
                <meta property="og:image" content={research.img} />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 pt-20">
                <div className="max-w-[1240px] mx-auto px-4 py-16">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Back Button */}
                        <motion.div variants={itemVariants} className="mb-8">
                            <Link href="/#research">
                                <motion.button
                                    whileHover={{ scale: 1.05, x: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold transition-colors duration-300"
                                >
                                    <FaArrowLeft />
                                    Back to Research
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Research Header */}
                        <motion.div variants={itemVariants} className="text-center mb-12">
                            <div className="mb-4">
                                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${research.status === 'Published'
                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                    }`}>
                                    {research.status}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
                                {research.title}
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                                {research.desc}
                            </p>
                        </motion.div>

                        {/* Research Image */}
                        <motion.div variants={itemVariants} className="mb-12">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src={research.img}
                                    alt={research.alt}
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </motion.div>

                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Research Content */}
                            <div className="lg:col-span-2">
                                <motion.div variants={itemVariants}>
                                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                                        Abstract
                                    </h2>
                                    <div className="prose prose-lg dark:prose-invert max-w-none">
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                            {research.desc}
                                        </p>

                                        {/* Extended description based on research type */}
                                        {research.category === 'machine-learning' && (
                                            <div className="space-y-4">
                                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                    This research investigates novel approaches to machine learning applications in healthcare settings,
                                                    focusing on improving predictive accuracy while maintaining interpretability of results. The study
                                                    employs advanced neural network architectures and ensemble methods.
                                                </p>
                                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                    Our methodology includes comprehensive data preprocessing, feature engineering, and cross-validation
                                                    techniques to ensure robust model performance across diverse healthcare scenarios.
                                                </p>
                                            </div>
                                        )}

                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                                            Key Contributions
                                        </h3>
                                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                            <li className="flex items-start gap-2">
                                                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                                                Novel algorithmic approach with improved efficiency
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                                                Comprehensive experimental validation
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                                                Open-source implementation for reproducibility
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                                                Practical applications and case studies
                                            </li>
                                        </ul>

                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                                            Methodology
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            Our research methodology follows a systematic approach combining theoretical analysis
                                            with empirical validation. We employed both quantitative and qualitative evaluation
                                            metrics to assess the effectiveness of our proposed solutions.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Research Sidebar */}
                            <div className="lg:col-span-1">
                                <motion.div variants={itemVariants}>
                                    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 sticky top-24">
                                        {/* Research Links */}
                                        <div className="mb-8">
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                                                Research Resources
                                            </h3>
                                            <div className="space-y-3">
                                                {research.links?.pdf && (
                                                    <a
                                                        href={research.links.pdf}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center gap-3 p-3 bg-red-100 dark:bg-red-900/30 rounded-xl hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors duration-300"
                                                    >
                                                        <FaFilePdf className="text-red-600 dark:text-red-400" />
                                                        <span className="text-red-600 dark:text-red-400 font-medium">
                                                            Download PDF
                                                        </span>
                                                    </a>
                                                )}
                                                {research.links?.slides && (
                                                    <a
                                                        href={research.links.slides}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center gap-3 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                                                    >
                                                        <FaFilePdf className="text-blue-600 dark:text-blue-400" />
                                                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                                                            Presentation Slides
                                                        </span>
                                                    </a>
                                                )}
                                                {research.links?.demo && (
                                                    <a
                                                        href={research.links.demo}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center gap-3 p-3 bg-green-100 dark:bg-green-900/30 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors duration-300"
                                                    >
                                                        <FaExternalLinkAlt className="text-green-600 dark:text-green-400" />
                                                        <span className="text-green-600 dark:text-green-400 font-medium">
                                                            Live Demo
                                                        </span>
                                                    </a>
                                                )}
                                                {research.links?.video && (
                                                    <a
                                                        href={research.links.video}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center gap-3 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors duration-300"
                                                    >
                                                        <FaPlay className="text-purple-600 dark:text-purple-400" />
                                                        <span className="text-purple-600 dark:text-purple-400 font-medium">
                                                            Video Presentation
                                                        </span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Authors */}
                                        {research.authors && (
                                            <div className="mb-8">
                                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                                    <FaUser />
                                                    Authors
                                                </h3>
                                                <div className="space-y-2">
                                                    {research.authors.map((author, index) => (
                                                        <div
                                                            key={index}
                                                            className="text-gray-600 dark:text-gray-400 py-1"
                                                        >
                                                            {author}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Keywords */}
                                        {research.keywords && (
                                            <div className="mb-8">
                                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                                    <FaTags />
                                                    Keywords
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {research.keywords.map((keyword, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium"
                                                        >
                                                            {keyword}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Research Info */}
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                                                Publication Info
                                            </h3>

                                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                                <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400" />
                                                <span>Published: {research.date}</span>
                                            </div>

                                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                                <FaTags className="text-indigo-600 dark:text-indigo-400" />
                                                <span>Category: {research.category?.replace('-', ' ') || 'Research'}</span>
                                            </div>

                                            {research.venue && (
                                                <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                                    <FaUniversity className="text-indigo-600 dark:text-indigo-400 mt-1" />
                                                    <span>{research.venue}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* CTA */}
                                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                                            <Link href="/#contact">
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                                >
                                                    Discuss This Research
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Related Research */}
                        <motion.div variants={itemVariants} className="mt-16">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                                Related Research
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {researchs
                                    .filter(r => r.id !== research.id)
                                    .slice(0, 3)
                                    .map((relatedResearch, index) => (
                                        <Link key={relatedResearch.id} href={relatedResearch.url}>
                                            <motion.div
                                                whileHover={{ scale: 1.02, y: -5 }}
                                                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 cursor-pointer"
                                            >
                                                <Image
                                                    src={relatedResearch.img}
                                                    alt={relatedResearch.alt}
                                                    width={400}
                                                    height={200}
                                                    className="w-full h-48 object-cover"
                                                />
                                                <div className="p-6">
                                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                                                        {relatedResearch.title}
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                                                        {relatedResearch.desc.substring(0, 100)}...
                                                    </p>
                                                    <div className="mt-3">
                                                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${relatedResearch.status === 'Published'
                                                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                            }`}>
                                                            {relatedResearch.status}
                                                        </span>
                                                    </div>
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
    // Get the paths we want to pre-render based on research
    const paths = researchs.map((research) => {
        const slug = research.url.split('/').pop();
        return {
            params: { slug }
        };
    });

    return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the research slug
    const research = researchs.find(r => {
        const researchSlug = r.url.split('/').pop();
        return researchSlug === params.slug;
    });

    // If no research found, return 404
    if (!research) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            research,
        },
    };
}

export default ResearchDetail;