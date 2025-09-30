import Head from "next/head";
import Main from "../components/Main";
import AnimationWrapper from "../components/AnimationWrapper";

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="Archit Rathod" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#8b45f7" />
                <meta
                    name="keywords"
                    content="Archit Rathod, Full Stack Developer, MERN Stack, Next.js, React Developer"
                />
                <title>Archit Rathod | Full-Stack Developer Portfolio</title>
                <meta name="title" content="Archit Rathod | Full-Stack Developer Portfolio" />
                <meta
                    name="description"
                    content="Full-Stack Web Developer specializing in MERN Stack, Next.js, and modern web technologies."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.architrathod.codes/" />
                <meta property="og:title" content="Archit Rathod | Full-Stack Developer Portfolio" />
                <meta
                    property="og:description"
                    content="Full-Stack Web Developer specializing in MERN Stack, Next.js, and modern web technologies."
                />
                <meta property="og:image" content="https://www.architrathod.codes/assets/portfolio.jpg" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.architrathod.codes/" />
                <meta property="twitter:title" content="Archit Rathod | Full-Stack Developer Portfolio" />
                <meta
                    property="twitter:description"
                    content="Full-Stack Web Developer specializing in MERN Stack, Next.js, and modern web technologies."
                />
                <meta property="twitter:image" content="https://www.architrathod.codes/assets/portfolio.jpg" />
                <meta name="twitter:site" content="@ArchitRathod_17" />
            </Head>

            <AnimationWrapper>
                <Main />
            </AnimationWrapper>
        </>
    );
}