import Head from "next/head";
import Skills from "../../components/Skills";
import AnimationWrapper from "../../components/AnimationWrapper";

export default function SkillsPage() {
    return (
        <>
            <Head>
                <title>Skills | Archit Rathod</title>
                <meta
                    name="description"
                    content="Explore my technical skills including MERN Stack, Next.js, Python, AI/ML, and more."
                />
                <meta property="og:title" content="Skills | Archit Rathod" />
                <meta property="og:description" content="My technical skills and expertise" />
            </Head>

            <AnimationWrapper>
                <Skills />
            </AnimationWrapper>
        </>
    );
}