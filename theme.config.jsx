import Cusdis from "nextra-theme-blog/cusdis";

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
    comments: <Cusdis />,
    components: {
        h1: ({ children }) => (
            <h1
                style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    backgroundImage: "linear-gradient(45deg,#7928CA,#FF0080)",
                }}
            >
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2
                style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    backgroundImage: "linear-gradient(45deg,#ec4899,#a855f7)",
                }}
            >
                {children}
            </h2>
        ),
        img: ({ src, alt }) => (
            <img
                src={src}
                alt={alt}
                style={{
                    maxWidth: "100%",
                    border: "1px solid #ddd",
                }}
            />
        ),
    },
    cusdis: {
        appId: "0ef50a7d-37e0-4d00-a269-397b79156b21",
    },
    footer: (
        <p>
            <abbr title="This site and all it's content are licensed under the MIT License">
                MIT
            </abbr>{" "}
            <time>{YEAR}</time> © Archit Rathod.
        </p>
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

            <title>{title} | Archit Blog&apos;s!</title>
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
};
