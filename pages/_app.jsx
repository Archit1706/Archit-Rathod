import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import CosmicLoading from '../components/CosmicLoading';
import '../styles/globals.css';

// Scroll optimization utilities inline
const optimizeScroll = () => {
    // Enable hardware acceleration
    if (typeof document !== 'undefined') {
        document.documentElement.style.transform = 'translateZ(0)';
        document.body.classList.add('scroll-optimized');
    }
};

const performanceMonitor = {
    init() {
        if (typeof window !== 'undefined' && 'performance' in window) {
            let lastTime = performance.now();
            let fps = 0;
            let frameCount = 0;

            const measureFPS = (currentTime) => {
                frameCount++;
                if (currentTime >= lastTime + 1000) {
                    fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    frameCount = 0;
                    lastTime = currentTime;

                    // Reduce animations if FPS is low
                    if (fps < 30 && typeof document !== 'undefined') {
                        document.body.classList.add('low-performance');
                    } else if (typeof document !== 'undefined') {
                        document.body.classList.remove('low-performance');
                    }
                }
                requestAnimationFrame(measureFPS);
            };

            requestAnimationFrame(measureFPS);
        }
    }
};

function MyApp({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Optimize scroll performance
        optimizeScroll();

        // Initialize performance monitoring
        performanceMonitor.init();

        // Simulate initial loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <CosmicLoading key="loading" onLoadingComplete={handleLoadingComplete} />
                ) : (
                    <Component key="app" {...pageProps} />
                )}
            </AnimatePresence>
        </>
    );
}

export default MyApp;