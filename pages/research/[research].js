import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaFilePdf, FaExternalLinkAlt, FaArrowLeft, FaCalendarAlt, FaUser, FaTags, FaPlay, FaUniversity } from 'react-icons/fa';
import { researchs } from '../../config';
import AnimationWrapper from '../../components/AnimationWrapper';

const ResearchDetail = ({ research }) => {
    const router = useRouter();
    const { research: slug } = router.query;

    console.log("Research slug:", slug);
    console.log("Research data:", research);

    // Use the research prop from getStaticProps, fallback to finding by slug if needed
    const researchData = research || researchs.find(r => {
        const researchSlug = r.url.split('/').pop();
        return researchSlug === slug;
    });

    // If research not found, show 404
    if (!researchData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Research Not Found
                    </h1>
                    <Link href="/research">
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
                <title>{researchData.title} | Archit Rathod Research</title>
                <meta name="description" content={researchData.desc || researchData.abstract} />
                <meta property="og:title" content={`${researchData.title} | Archit Rathod Research`} />
                <meta property="og:description" content={researchData.desc || researchData.abstract} />
                <meta property="og:image" content={researchData.img} />
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
                            <Link href="/research">
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
                                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${researchData.status === 'published'
                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                    : researchData.status === 'accepted'
                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                    }`}>
                                    {researchData.status.toUpperCase()}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
                                {researchData.title}
                            </h1>
                            {/* <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                                {researchData.desc || researchData.abstract}
                            </p> */}
                        </motion.div>

                        {/* Research Image */}
                        <motion.div variants={itemVariants} className="mb-12">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src={researchData.img}
                                    alt={researchData.alt}
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
                                            {researchData.abstract}
                                        </p>

                                        {/* Key Features */}
                                        {researchData.keyFeatures && researchData.keyFeatures.length > 0 && (
                                            <>
                                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                                                    Key Contributions
                                                </h3>
                                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                                    {researchData.keyFeatures.map((feature, index) => (
                                                        <li key={index} className="flex items-start gap-2">
                                                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {/* Conclusion */}
                                        {researchData.conclusion && (
                                            <>
                                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                                                    Conclusion
                                                </h3>
                                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                    {researchData.conclusion}
                                                </p>
                                            </>
                                        )}
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
                                                {researchData.links?.pdf && (
                                                    <a
                                                        href={researchData.links.pdf}
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
                                                {researchData.links?.arxiv && (
                                                    <a
                                                        href={researchData.links.arxiv}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center gap-3 p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors duration-300"
                                                    >
                                                        <FaExternalLinkAlt className="text-orange-600 dark:text-orange-400" />
                                                        <span className="text-orange-600 dark:text-orange-400 font-medium">
                                                            ArXiv
                                                        </span>
                                                    </a>
                                                )}
                                                {researchData.links?.slides && (
                                                    <a
                                                        href={researchData.links.slides}
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
                                                {researchData.links?.code && (
                                                    <a
                                                        href={researchData.links.code}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center gap-3 p-3 bg-green-100 dark:bg-green-900/30 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors duration-300"
                                                    >
                                                        <FaExternalLinkAlt className="text-green-600 dark:text-green-400" />
                                                        <span className="text-green-600 dark:text-green-400 font-medium">
                                                            Source Code
                                                        </span>
                                                    </a>
                                                )}
                                                {researchData.links?.video && (
                                                    <a
                                                        href={researchData.links.video}
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
                                        {researchData.authors && researchData.authors.length > 0 && (
                                            <div className="mb-8">
                                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                                    <FaUser />
                                                    Authors
                                                </h3>
                                                <div className="space-y-2">
                                                    {researchData.authors.map((author, index) => (
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

                                        {/* Research Info */}
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                                                Publication Info
                                            </h3>

                                            {researchData.dates?.publication && (
                                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                                    <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400" />
                                                    <span>Published: {researchData.dates.publication}</span>
                                                </div>
                                            )}

                                            {researchData.dates?.presentation && (
                                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                                    <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400" />
                                                    <span>Presented: {researchData.dates.presentation}</span>
                                                </div>
                                            )}

                                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                                <FaTags className="text-indigo-600 dark:text-indigo-400" />
                                                <span>Status: {researchData.status}</span>
                                            </div>

                                            {researchData.conference && (
                                                <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                                    <FaUniversity className="text-indigo-600 dark:text-indigo-400 mt-1" />
                                                    <span>{researchData.conference}</span>
                                                </div>
                                            )}

                                            {researchData.workshop && (
                                                <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                                    <FaUniversity className="text-indigo-600 dark:text-indigo-400 mt-1" />
                                                    <span>{researchData.workshop}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* CTA */}
                                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                                            <Link href="/contact">
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
                                    .filter(r => r.title !== researchData.title)
                                    .slice(0, 3)
                                    .map((relatedResearch, index) => (
                                        // research/[slug]
                                        <Link key={index} href={`/research${relatedResearch.url}`}>
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
                                                        {(relatedResearch.desc || relatedResearch.abstract).substring(0, 100)}...
                                                    </p>
                                                    <div className="mt-3">
                                                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${relatedResearch.status === 'published'
                                                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                            : relatedResearch.status === 'accepted'
                                                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
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
    // Extract the slug from the url field
    const paths = researchs
        .filter(research => research.url && typeof research.url === 'string')
        .map((researchItem) => {
            // Extract slug from URL (remove leading slash if present)
            const slug = researchItem.url.startsWith('/') ? researchItem.url.slice(1) : researchItem.url;
            return {
                params: { research: slug }
            };
        });

    return {
        paths,
        fallback: false
    };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const { research: slug } = params;

    console.log('getStaticProps slug:', slug);

    // Find the research by matching the slug
    const researchData = researchs.find(r => {
        const researchSlug = r.url.startsWith('/') ? r.url.slice(1) : r.url;
        return researchSlug === slug;
    });

    if (!researchData) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            research: researchData
        }
    };
}

export default ResearchDetail;