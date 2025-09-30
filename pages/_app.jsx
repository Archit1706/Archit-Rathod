import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
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

    // Check if current route should use Layout
    // Exclude blog pages and individual project/research pages that have their own layouts
    const useLayout = !router.pathname.startsWith('/blogs') &&
        !router.pathname.startsWith('/project/') &&
        !router.pathname.startsWith('/research/');

    if (useLayout) {
        return (
            <PageTransition>
                <Layout isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
                    <Component {...pageProps} />
                </Layout>
            </PageTransition>
        );
    }

    // For pages that don't use the layout (blogs, individual projects/research)
    return (
        <PageTransition>
            <Component {...pageProps} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </PageTransition>
    );
}

export default MyApp;
