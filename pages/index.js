import Image from "next/image";
import Head from "next/head";
import "../styles/globals.css";

import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Research from "../components/Research";
import Contact from "../components/Contact";
import AnimationWrapper from "../components/AnimationWrapper";

export default function Home() {
    return (
        <div className="">
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
                <meta name="theme-color" content="#fc4c8d" />

                <meta
                    name="keywords"
                    content="Archit Rathod, Archit, Rathod, architrathod, architrathod.in, architrathod.com, architrathod.me, architrathod.github.io, architrathod.netlify.app, architrathod.vercel.app, architrathod.herokuapp.com, architrathod.000webhostapp.com, architrathod.pythonanywhere.com, architrathod.web.app, architrathod.web.az"
                />

                <title>Archit Rathod | Portfolio</title>
                <meta name="title" content="Archit Rathod | Portfolio" />
                <meta
                    name="description"
                    content="Full-Stack Web Developer, MERN Stack, Next.js, Proficient in Python and C++."
                />
                <meta name="role" content="full stack developer" />

                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.architrathod.codes/"
                />
                <meta property="og:title" content="Archit Rathod | Portfolio" />
                <meta
                    property="og:description"
                    content="Full-Stack Web Developer, MERN Stack, Next.js, Proficient in Python and C++."
                />
                <meta
                    property="og:image"
                    content="https://www.architrathod.codes/assets/portfolio.jpg"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Archit Rathod" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.architrathod.codes/"
                />
                <meta
                    property="twitter:title"
                    content="Archit Rathod | Portfolio"
                />
                <meta
                    property="twitter:description"
                    content="Full-Stack Web Developer, MERN Stack, Next.js, Proficient in Python and C++."
                />
                <meta
                    property="twitter:image"
                    content="https://www.architrathod.codes/assets/portfolio.jpg"
                />
                <meta name="twitter:site" content="@ArchitRathod_17" />
                <meta name="twitter:creator" content="@ArchitRathod_17" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="en_GB" />
                <meta property="og:locale:alternate" content="en_CA" />
                <meta property="og:locale:alternate" content="en_IN" />
            </Head>
            <AnimationWrapper>
                <Main />
            </AnimationWrapper>
            <AnimationWrapper>
                <About />
            </AnimationWrapper>
            {/* <AnimationWrapper> */}
            <Skills />
            {/* </AnimationWrapper> */}
            {/* <AnimationWrapper> */}
            <Projects />
            {/* </AnimationWrapper> */}
            {/* <AnimationWrapper> */}
            <Research />
            {/* </AnimationWrapper> */}
            <AnimationWrapper>
                <Contact />
            </AnimationWrapper>
        </div>
    );
}
