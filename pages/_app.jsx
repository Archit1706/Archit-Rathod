import '../styles/globals.css';
import '../styles/blog.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import BlogLayout from '../components/BlogLayout';
import PageTransition from '../components/PageTransition';

function MyApp({ Component, pageProps }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const router = useRouter();

    // Initialize dark mode from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // Check if current route should use Layout or BlogLayout
    const isBlogPage = router.pathname.startsWith('/blogs');
    const isProjectPage = router.pathname.startsWith('/project/');
    const isResearchPage = router.pathname.startsWith('/research/');

    const useMainLayout = !isBlogPage && !isProjectPage && !isResearchPage;

    // For blog pages, use BlogLayout
    if (isBlogPage) {
        return (
            <PageTransition>
                <BlogLayout>
                    <Component {...pageProps} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                </BlogLayout>
            </PageTransition>
        );
    }

    // For main portfolio pages, use Layout
    if (useMainLayout) {
        return (
            <PageTransition>
                <Layout isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
                    <Component {...pageProps} />
                </Layout>
            </PageTransition>
        );
    }

    // For pages that don't use any layout (individual projects/research)
    return (
        <PageTransition>
            <Component {...pageProps} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </PageTransition>
    );
}

export default MyApp;