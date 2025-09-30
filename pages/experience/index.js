import Head from "next/head";
import Experience from "../../components/Experience";
import AnimationWrapper from "../../components/AnimationWrapper";

export default function ExperiencePage() {
    return (
        <>
            <Head>
                <title>Experience | Archit Rathod</title>
                <meta
                    name="description"
                    content="My professional experience, internships, and career journey in software development."
                />
                <meta property="og:title" content="Experience | Archit Rathod" />
                <meta property="og:description" content="My professional experience and career" />
            </Head>

            <AnimationWrapper>
                <Experience />
            </AnimationWrapper>
        </>
    );
}