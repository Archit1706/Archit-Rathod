import { useState, useEffect } from 'react';

export const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [deviceInfo, setDeviceInfo] = useState({
        isLowEnd: false,
        hasTouch: false,
        screenSize: 'desktop'
    });

    useEffect(() => {
        const checkDevice = () => {
            // Screen size detection
            const width = window.innerWidth;
            const isMobileScreen = width <= 768;
            const isTabletScreen = width > 768 && width <= 1024;

            setIsMobile(isMobileScreen);
            setIsTablet(isTabletScreen);

            // User agent detection
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
            const isMobileUA = mobileRegex.test(userAgent);

            // Performance detection
            const isLowEnd =
                navigator.hardwareConcurrency <= 2 ||
                navigator.deviceMemory <= 4 ||
                isMobileUA;

            // Touch detection
            const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

            // Screen size category
            let screenSize = 'desktop';
            if (width <= 480) screenSize = 'mobile';
            else if (width <= 768) screenSize = 'mobile-large';
            else if (width <= 1024) screenSize = 'tablet';
            else if (width <= 1440) screenSize = 'desktop';
            else screenSize = 'desktop-large';

            setDeviceInfo({
                isLowEnd,
                hasTouch,
                screenSize,
                isMobileUA,
                width,
                height: window.innerHeight
            });

            // Apply device-specific optimizations
            applyDeviceOptimizations({ isMobileScreen, isLowEnd, hasTouch });
        };

        const applyDeviceOptimizations = ({ isMobileScreen, isLowEnd, hasTouch }) => {
            const body = document.body;

            // Remove existing classes
            body.classList.remove('mobile-device', 'tablet-device', 'desktop-device', 'low-end-device', 'touch-device');

            // Add appropriate classes
            if (isMobileScreen) {
                body.classList.add('mobile-device');
            } else if (isTablet) {
                body.classList.add('tablet-device');
            } else {
                body.classList.add('desktop-device');
            }

            if (isLowEnd) {
                body.classList.add('low-end-device');
            }

            if (hasTouch) {
                body.classList.add('touch-device');
            }

            // Set CSS custom properties for dynamic values
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
            document.documentElement.style.setProperty('--vw', `${window.innerWidth * 0.01}px`);
        };

        // Initial check
        checkDevice();

        // Listen for resize events
        const handleResize = () => {
            checkDevice();
        };

        window.addEventListener('resize', handleResize);

        // Listen for orientation change on mobile
        window.addEventListener('orientationchange', () => {
            setTimeout(checkDevice, 100); // Small delay for orientation change
        });

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', checkDevice);
        };
    }, []);

    return {
        isMobile,
        isTablet,
        isDesktop: !isMobile && !isTablet,
        ...deviceInfo
    };
};

// Performance optimization helper
export const getOptimizedSettings = (deviceInfo) => {
    const { isLowEnd, isMobileUA, screenSize } = deviceInfo;

    let settings = {
        particleCount: 25,
        starCount: 150,
        animationSpeed: 'normal',
        enableBlur: true,
        enableShadows: true,
        enableParticles: true
    };

    // Low-end device optimizations
    if (isLowEnd) {
        settings = {
            ...settings,
            particleCount: 10,
            starCount: 75,
            animationSpeed: 'slow',
            enableBlur: false,
            enableShadows: false
        };
    }

    // Mobile-specific optimizations
    if (isMobileUA) {
        settings = {
            ...settings,
            particleCount: Math.max(settings.particleCount - 10, 5),
            starCount: Math.max(settings.starCount - 50, 50),
            enableBlur: false
        };
    }

    // Screen size optimizations
    if (screenSize === 'mobile') {
        settings = {
            ...settings,
            particleCount: Math.max(settings.particleCount - 5, 5),
            starCount: Math.max(settings.starCount - 25, 50)
        };
    }

    return settings;
};