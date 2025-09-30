import Head from "next/head";
import Projects from "../../components/Projects";
import AnimationWrapper from "../../components/AnimationWrapper";

export default function ProjectsPage() {
    return (
        <>
            <Head>
                <title>Projects | Archit Rathod</title>
                <meta
                    name="description"
                    content="Check out my latest web development projects, applications, and open-source contributions."
                />
                <meta property="og:title" content="Projects | Archit Rathod" />
                <meta property="og:description" content="My development projects and work" />
            </Head>

            <AnimationWrapper>
                <Projects />
            </AnimationWrapper>
        </>
    );
}