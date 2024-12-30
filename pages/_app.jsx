import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <Navbar />
            <Component {...pageProps} />
            <Analytics />
        </ThemeProvider>
    );
}

export default MyApp;
