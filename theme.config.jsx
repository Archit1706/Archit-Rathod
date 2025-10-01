import Cusdis from "nextra-theme-blog/cusdis";

const YEAR = new Date().getFullYear();

export default {
    comments: (
        <div className="blog-comments w-full max-w-3xl mx-auto my-16 px-6">
            <div className="border-t border-purple-200 dark:border-purple-800 pt-12">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Join the Discussion
                </h2>
                <div className="min-h-[350px] blog-comment-container">
                    <Cusdis />
                </div>
            </div>
        </div>
    ),

    components: {
        // Main Title - Large, Spaced, Elegant
        h1: ({ children }) => (
            <h1 className="blog-h1 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-16 first:mt-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight tracking-tight max-w-4xl">
                {children}
            </h1>
        ),

        // Section Headings - Clean and Spacious
        h2: ({ children }) => (
            <h2 className="blog-h2 text-3xl md:text-4xl font-bold mb-6 mt-16 text-gray-900 dark:text-gray-100 tracking-tight max-w-4xl group">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    {children}
                </span>
                <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 rounded-full mt-4 group-hover:w-24 transition-all duration-300"></div>
            </h2>
        ),

        // Subsection Headings
        h3: ({ children }) => (
            <h3 className="blog-h3 text-2xl md:text-3xl font-semibold mb-5 mt-12 text-gray-800 dark:text-gray-200 tracking-tight max-w-4xl">
                {children}
            </h3>
        ),

        h4: ({ children }) => (
            <h4 className="blog-h4 text-xl md:text-2xl font-semibold mb-4 mt-8 text-gray-700 dark:text-gray-300 max-w-4xl">
                {children}
            </h4>
        ),

        // Images - Clean with Subtle Effects
        img: ({ src, alt }) => (
            <div className="blog-image-wrapper my-12 overflow-hidden rounded-2xl group max-w-4xl mx-auto">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {alt && (
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3 italic">
                        {alt}
                    </p>
                )}
            </div>
        ),

        // Paragraphs - Generous Spacing, Great Typography
        p: ({ children }) => (
            <p className="blog-paragraph text-lg md:text-xl leading-relaxed md:leading-relaxed mb-8 text-gray-700 dark:text-gray-300 max-w-3xl">
                {children}
            </p>
        ),

        // Links - Elegant Underline Effect
        a: ({ href, children }) => (
            <a
                href={href}
                className="blog-link relative inline text-purple-600 dark:text-purple-400 font-medium hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 group"
            >
                {children}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
        ),

        // Lists - Clean and Well-Spaced
        ul: ({ children }) => (
            <ul className="blog-list space-y-4 mb-10 ml-0 max-w-3xl">
                {children}
            </ul>
        ),

        ol: ({ children }) => (
            <ol className="blog-list-ordered space-y-4 mb-10 ml-6 list-decimal max-w-3xl">
                {children}
            </ol>
        ),

        li: ({ children }) => (
            <li className="blog-li text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 pl-8 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-2 before:rounded-full before:bg-gradient-to-br before:from-purple-600 before:to-pink-600 dark:before:from-purple-400 dark:before:to-pink-400">
                {children}
            </li>
        ),

        // Blockquotes - Minimalist and Elegant
        blockquote: ({ children }) => (
            <blockquote className="blog-quote my-12 pl-8 pr-6 py-6 border-l-4 border-purple-500 dark:border-purple-400 bg-purple-50/50 dark:bg-purple-900/10 rounded-r-xl italic text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl backdrop-blur-sm">
                {children}
            </blockquote>
        ),

        // Inline Code - Subtle and Clean
        code: ({ children, className }) => {
            const isInline = !className;
            if (isInline) {
                return (
                    <code className="blog-inline-code px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-md font-mono text-base">
                        {children}
                    </code>
                );
            }
            return (
                <code className={className}>
                    {children}
                </code>
            );
        },

        // Code Blocks - Clean and Modern
        pre: ({ children }) => (
            <pre className="blog-code-block my-10 p-6 md:p-8 bg-gray-900 dark:bg-black rounded-2xl overflow-x-auto shadow-xl max-w-4xl border border-gray-800 dark:border-gray-700">
                {children}
            </pre>
        ),

        // Tables - Clean and Minimal
        table: ({ children }) => (
            <div className="blog-table-wrapper my-10 overflow-x-auto rounded-xl max-w-4xl">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    {children}
                </table>
            </div>
        ),

        th: ({ children }) => (
            <th className="px-6 py-4 bg-gray-50 dark:bg-gray-800 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                {children}
            </th>
        ),

        td: ({ children }) => (
            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                {children}
            </td>
        ),

        // Horizontal Rule - Elegant Divider
        hr: () => (
            <hr className="my-16 border-0 h-px bg-gradient-to-r from-transparent via-purple-300 dark:via-purple-700 to-transparent max-w-md mx-auto" />
        ),

        // Strong - Subtle Emphasis
        strong: ({ children }) => (
            <strong className="font-bold text-gray-900 dark:text-gray-100">
                {children}
            </strong>
        ),

        // Emphasis - Italic
        em: ({ children }) => (
            <em className="italic text-gray-800 dark:text-gray-200">
                {children}
            </em>
        ),
    },

    footer: (
        <footer className="blog-footer mt-24 py-12 border-t border-gray-200 dark:border-gray-800 max-w-4xl mx-auto">
            <div className="px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                            <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                Archit's Blog
                            </span>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            © {YEAR} All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="/"
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            ← Back to Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    ),

    head: ({ title, meta }) => (
        <>
            {meta.description && (
                <meta name="description" content={meta.description} />
            )}
            {meta.tag && <meta name="keywords" content={meta.tag} />}
            {meta.author && <meta name="author" content={meta.author} />}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@archit_rathod17" />
            <meta name="twitter:creator" content="@archit_rathod17" />
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content="Archit's Blog" />
            <meta property="og:title" content={title} />
            {meta.description && (
                <meta property="og:description" content={meta.description} />
            )}
            {meta.image && <meta property="og:image" content={meta.image} />}
            <meta name="theme-color" content="#9333EA" />
            <title>{title} | Archit's Blog</title>
        </>
    ),

    readMore: "Continue Reading →",
    postFooter: null,
    darkMode: true,

    cusdis: {
        appId: process.env.NEXT_PUBLIC_CUSDIS_APP_ID,
        host: "https://cusdis.com",
        lang: "en",
    },

    layoutDark: true,

    primaryHue: {
        light: 270,
        dark: 250,
    },
};