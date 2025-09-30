import Head from "next/head";
import About from "../../components/About"
import AnimationWrapper from "../../components/AnimationWrapper";

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About | Archit Rathod</title>
                <meta
                    name="description"
                    content="Learn more about Archit Rathod, a Full-Stack Developer passionate about creating innovative web solutions."
                />
                <meta property="og:title" content="About | Archit Rathod" />
                <meta property="og:description" content="Learn more about Archit Rathod" />
            </Head>

            <AnimationWrapper>
                <About />
            </AnimationWrapper>
        </>
    );
}