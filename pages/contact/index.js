import Head from "next/head";
import Contact from "../../components/Contact";
import AnimationWrapper from "../../components/AnimationWrapper";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact | Archit Rathod</title>
                <meta
                    name="description"
                    content="Get in touch with me for collaborations, projects, or just to say hi!"
                />
                <meta property="og:title" content="Contact | Archit Rathod" />
                <meta property="og:description" content="Contact me" />
            </Head>

            <AnimationWrapper>
                <Contact />
            </AnimationWrapper>
        </>
    );
}