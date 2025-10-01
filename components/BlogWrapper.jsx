import { motion } from 'framer-motion';
import Link from 'next/link';

const BlogPostWrapper = ({ children, meta }) => {
    return (
        <div className="min-h-screen">
            {/* Hero Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="blog-post-header pt-12 pb-8"
            >
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <Link
                        href="/blogs/posts"
                        className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 text-sm font-medium"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to all posts
                    </Link>
                </nav>

                {/* Title */}
                <h1 className="blog-post-title">
                    {meta?.title || 'Blog Post'}
                </h1>

                {/* Meta Information */}
                {(meta?.date || meta?.author || meta?.readTime) && (
                    <div className="post-meta">
                        {meta.date && (
                            <div className="post-meta-item">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{meta.date}</span>
                            </div>
                        )}
                        {meta.author && (
                            <>
                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                <div className="post-meta-item">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span>{meta.author}</span>
                                </div>
                            </>
                        )}
                        {meta.readTime && (
                            <>
                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                <div className="post-meta-item">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{meta.readTime}</span>
                                </div>
                            </>
                        )}
                        {meta.tag && (
                            <>
                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-semibold uppercase tracking-wide">
                                    {meta.tag}
                                </span>
                            </>
                        )}
                    </div>
                )}

                {/* Description */}
                {meta?.description && (
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mt-6">
                        {meta.description}
                    </p>
                )}
            </motion.div>

            {/* Content */}
            <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-none px-4 md:px-6"
            >
                {children}
            </motion.article>
        </div>
    );
};

export default BlogPostWrapper;