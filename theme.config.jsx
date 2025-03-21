import { article, body } from "framer-motion/client";
import Cusdis from "nextra-theme-blog/cusdis";
// import "./styles/theme.module.css";

const YEAR = new Date().getFullYear();

export default {
    // comments: (
    //     <>
    //         <div
    //             className="w-5/6 mx-auto"
    //             dangerouslySetInnerHTML={{
    //                 __html: '<script src="https://giscus.app/client.js" data-repo="officialrajdeepsingh/officialrajdeepsingh.dev" data-repo-id="R_kgDOIs4gPw" data-category="Q&A" data-category-id="DIC_kwDOIs4gP84CTV3Q" data-mapping="pathname" data-strict="1" data-reactions-enabled="1"data-emit-metadata="0" data-input-position="top" data-theme="dark_protanopia" data-lang="en" data-loading="lazy" crossorigin="anonymous" async></script>',
    //             }}
    //         ></div>  
    //     </>
    // ),
    // navs: [
    // {
    //     url: "/feed.xml",
    //     name: "RSS",
    //     newWindow: true,
    // },
    // ],
    comments: (
        <div className="w-full max-w-4xl mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Add a Comment</h2>
            <div className="min-h-[300px] [&_iframe]:!h-[350px] [&_iframe]:!min-h-full [&_textarea]:!h-[150px] [&_textarea]:!min-h-full">
                <Cusdis />
            </div>
        </div>
    ),
    components: {
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-300 dark:to-purple-300 bg-clip-text text-transparent">
                {children}
            </h2>
        ),
        img: ({ src, alt }) => (
            <img
                src={src}
                alt={alt}
                className="max-w-full rounded-lg border border-gray-200 dark:border-gray-700 transition-all"
            />
        ),
        p: ({ children }) => (
            <p className="text-gray-800 dark:text-gray-200 mb-4">
                {children}
            </p>
        ),
        a: ({ href, children }) => (
            <a
                href={href}
                className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
            >
                {children}
            </a>
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-4">
                {children}
            </ul>
        ),
        li: ({ children }) => (
            <li className="text-gray-800 dark:text-gray-200">
                {children}
            </li>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 my-4 italic text-gray-700 dark:text-gray-300">
                {children}
            </blockquote>
        ),
        body: ({ children }) => (
            <body className="text-gray-800 dark:text-gray-200 dark:bg-gray-900">{children}</body>
        ),
        article: ({ children }) => (
            <article className="prose dark:prose-dark max-w-none m-2 p-2 dark:bg-gray-900">{children}</article>
        ),
    },
    cusdis: {
        appId: "0ef50a7d-37e0-4d00-a269-397b79156b21",
    },
    footer: (
        // <p className="text-center text-gray-600 dark:text-gray-400">
        //     <abbr title="This site and all it's content are licensed under the MIT License">
        //         MIT
        //     </abbr>{" "}
        //     <time>{YEAR}</time> © Archit Rathod.
        // </p>
        <div className="flex items-center gap-4 max-w-4xl mx-auto bg-gradient-to-r from-purple-400 to-pink-300 dark:from-purple-800 dark:to-pink-700 px-4 rounded-md shadow-lg">
            <img
                src="/assets/headshot.jpg" // Replace with your photo path
                alt="Archit Rathod"
                className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    Archit Rathod
                </h3>
                <p className="text-gray-800 dark:text-gray-400">
                    Software Developer and tech enthusiast. Passionate about web development and creating user-friendly experiences.
                </p>
            </div>
            <a
                href="/blogs/posts"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
                Read More
            </a>
        </div>
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
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Archit Blog's!" />
            <meta property="og:title" content={title} />
            {meta.description && (
                <meta property="og:description" content={meta.description} />
            )}
            {meta.image && <meta property="og:image" content={meta.image} />}
            <meta name="theme-color" content="#000" />

            <title>{`${title} | Archit Blog's!`}</title>
        </>
    ),
    readMore: "Read More →",
    postFooter: null,
    // dateFormatter: (date) => `Last updated at ${date.toDateString()}`,
    darkMode: true,
    // navs: [
    //     {
    //         url: "https://github.com/shuding/nextra",
    //         name: "Nextra",
    //     },
    // ],
    // primaryHue: 100,
    layoutDark: true,
    toggleButton: {
        position: 'right',
        className: 'p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
    },
    primaryHue: {
        light: 270, // purple in light mode
        dark: 250,  // slightly different purple in dark mode
    },
};
