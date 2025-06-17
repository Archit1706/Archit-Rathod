import Image from "next/image";
import Head from "next/head";

import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Research from "../components/Research";
import Contact from "../components/Contact";
import AnimationWrapper from "../components/AnimationWrapper";
import StarField from "../components/StarField";
import FloatingParticles from "../components/FloatingParticles";
import CosmicCursor from "../components/CosmicCursor";
import CosmicNavigation from "../components/CosmicNavigation";
import PerformanceSettings from "../components/PerformanceSettings";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
                <meta name="theme-color" content="#7c3aed" />

                <meta
                    name="keywords"
                    content="Archit Rathod, Archit, Rathod, architrathod, architrathod.in, architrathod.com, architrathod.me, architrathod.github.io, architrathod.netlify.app, architrathod.vercel.app, architrathod.herokuapp.com, architrathod.000webhostapp.com, architrathod.pythonanywhere.com, architrathod.web.app, architrathod.web.az"
                />

                <title>Archit Rathod | Cosmic Portfolio</title>
                <meta name="title" content="Archit Rathod | Cosmic Portfolio" />
                <meta
                    name="description"
                    content="Full-Stack Web Developer, MERN Stack, Next.js, Proficient in Python and C++. Exploring the digital cosmos one project at a time."
                />
                <meta name="role" content="full stack developer" />

                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.architrathod.codes/"
                />
                <meta property="og:title" content="Archit Rathod | Cosmic Portfolio" />
                <meta
                    property="og:description"
                    content="Full-Stack Web Developer, MERN Stack, Next.js, Proficient in Python and C++. Exploring the digital cosmos one project at a time."
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
                    content="Archit Rathod | Cosmic Portfolio"
                />
                <meta
                    property="twitter:description"
                    content="Full-Stack Web Developer, MERN Stack, Next.js, Proficient in Python and C++. Exploring the digital cosmos one project at a time."
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

                {/* Preload critical fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            {/* Cosmic Background Layers */}
            <StarField />
            <FloatingParticles count={25} />
            <CosmicCursor />
            <CosmicNavigation />
            <PerformanceSettings />

            {/* Cosmic gradient overlay */}
            <div className="fixed inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/20 pointer-events-none z-5" />

            {/* Content with enhanced animations */}
            <div className="relative z-20">
                <AnimationWrapper animationType="cosmic" delay={0.2}>
                    <Main />
                </AnimationWrapper>

                <AnimationWrapper animationType="fadeUp" delay={0.4}>
                    <About />
                </AnimationWrapper>

                <AnimationWrapper animationType="fadeLeft" delay={0.3}>
                    <Skills />
                </AnimationWrapper>

                <AnimationWrapper animationType="scaleIn" delay={0.5}>
                    <Projects />
                </AnimationWrapper>

                <AnimationWrapper animationType="fadeRight" delay={0.4}>
                    <Research />
                </AnimationWrapper>

                <AnimationWrapper animationType="fadeUp" delay={0.6}>
                    <Contact />
                </AnimationWrapper>
            </div>

            {/* Cosmic border glow effect */}
            <div className="fixed inset-0 pointer-events-none z-30">
                <div className="absolute inset-0 border border-purple-500/20 rounded-3xl m-4 animate-pulse" />
                <div className="absolute inset-0 border border-blue-500/10 rounded-2xl m-8 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
        </div>
    );
}