import Head from "next/head";
import Research from "../../components/Research";
import AnimationWrapper from "../../components/AnimationWrapper";

export default function ResearchPage() {
    return (
        <>
            <Head>
                <title>Research | Archit Rathod</title>
                <meta
                    name="description"
                    content="Explore my research work in AI/ML, computer science, and published papers."
                />
                <meta property="og:title" content="Research | Archit Rathod" />
                <meta property="og:description" content="My research publications and work" />
            </Head>

            <AnimationWrapper>
                <Research />
            </AnimationWrapper>
        </>
    );
}