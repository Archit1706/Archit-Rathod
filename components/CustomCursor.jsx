import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [cursorVariant, setCursorVariant] = useState('default');
    const [isVisible, setIsVisible] = useState(false);
    const [isCustomCursorSupported, setIsCustomCursorSupported] = useState(false);

    // Use motion values for better performance
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoother spring configuration
    const cursorX = useSpring(mouseX, { damping: 25, stiffness: 300, mass: 0.5 });
    const cursorY = useSpring(mouseY, { damping: 25, stiffness: 300, mass: 0.5 });

    // Trail motion values with different spring configs for layered effect
    const trailX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.8 });
    const trailY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.8 });

    const rippleX = useSpring(mouseX, { damping: 35, stiffness: 150, mass: 1.2 });
    const rippleY = useSpring(mouseY, { damping: 35, stiffness: 150, mass: 1.2 });

    // Refs to avoid memory leaks
    const mousePositionRef = useRef({ x: 0, y: 0 });
    const rafId = useRef();

    const updateMousePosition = useCallback((e) => {
        mousePositionRef.current = { x: e.clientX, y: e.clientY };

        // Cancel previous animation frame
        if (rafId.current) {
            cancelAnimationFrame(rafId.current);
        }

        // Use RAF for smooth updates
        rafId.current = requestAnimationFrame(() => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        });

        if (!isVisible) setIsVisible(true);
    }, [mouseX, mouseY, isVisible]);

    useEffect(() => {
        // Check if device supports custom cursor (desktop only)
        const checkCustomCursorSupport = () => {
            const isDesktop = window.innerWidth >= 1024;
            const hasPointerDevice = window.matchMedia('(pointer: fine)').matches;
            return isDesktop && hasPointerDevice;
        };

        setIsCustomCursorSupported(checkCustomCursorSupport());

        const mouseEnter = () => setIsVisible(true);
        const mouseLeave = () => setIsVisible(false);

        if (isCustomCursorSupported) {
            // Use passive listeners for better performance
            window.addEventListener('mousemove', updateMousePosition, { passive: true });
            window.addEventListener('mouseenter', mouseEnter, { passive: true });
            window.addEventListener('mouseleave', mouseLeave, { passive: true });

            // Optimized cursor state handlers
            const addCursorListeners = () => {
                // Remove existing listeners first
                document.querySelectorAll('[data-cursor-listener]').forEach(el => {
                    el.removeAttribute('data-cursor-listener');
                });

                // Hover effects for interactive elements
                const hoverElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
                hoverElements.forEach(element => {
                    element.setAttribute('data-cursor-listener', 'true');
                    element.addEventListener('mouseenter', () => setCursorVariant('hover'), { passive: true });
                    element.addEventListener('mouseleave', () => setCursorVariant('default'), { passive: true });
                });

                // Text selection cursor - more selective targeting
                const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span:not([role]), div[contenteditable="true"]');
                textElements.forEach(element => {
                    element.setAttribute('data-cursor-listener', 'true');
                    element.addEventListener('mouseenter', () => setCursorVariant('text'), { passive: true });
                    element.addEventListener('mouseleave', () => setCursorVariant('default'), { passive: true });
                });

                // Input cursor
                const inputElements = document.querySelectorAll('input, textarea, select');
                inputElements.forEach(element => {
                    element.setAttribute('data-cursor-listener', 'true');
                    element.addEventListener('mouseenter', () => setCursorVariant('input'), { passive: true });
                    element.addEventListener('mouseleave', () => setCursorVariant('default'), { passive: true });
                });
            };

            // Initial setup with slight delay
            const timeoutId = setTimeout(addCursorListeners, 100);

            // Throttled mutation observer for better performance
            let mutationTimeout;
            const observer = new MutationObserver(() => {
                clearTimeout(mutationTimeout);
                mutationTimeout = setTimeout(addCursorListeners, 200);
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: false,
                characterData: false
            });

            return () => {
                clearTimeout(timeoutId);
                clearTimeout(mutationTimeout);
                if (rafId.current) {
                    cancelAnimationFrame(rafId.current);
                }
                window.removeEventListener('mousemove', updateMousePosition);
                window.removeEventListener('mouseenter', mouseEnter);
                window.removeEventListener('mouseleave', mouseLeave);
                observer.disconnect();
            };
        }
    }, [isCustomCursorSupported, updateMousePosition]);

    // Optimized cursor variants with smoother transitions
    const getCursorStyle = () => {
        const baseStyle = {
            width: 32,
            height: 32,
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%'
        };

        switch (cursorVariant) {
            case 'hover':
                return {
                    ...baseStyle,
                    scale: 1.5,
                    backgroundColor: 'rgba(139, 69, 19, 0.85)',
                    borderColor: 'rgba(139, 69, 19, 1)',
                    borderWidth: 2
                };
            case 'text':
                return {
                    ...baseStyle,
                    scale: 0.7,
                    backgroundColor: 'rgba(34, 197, 94, 0.8)',
                    borderColor: 'rgba(34, 197, 94, 1)',
                    borderWidth: 2
                };
            case 'input':
                return {
                    ...baseStyle,
                    scaleX: 0.1,
                    scaleY: 2,
                    backgroundColor: 'rgba(239, 68, 68, 0.9)',
                    borderColor: 'rgba(239, 68, 68, 1)',
                    borderWidth: 1,
                    width: 2,
                    height: 24
                };
            default:
                return {
                    ...baseStyle,
                    scale: 1,
                    backgroundColor: 'rgba(99, 102, 241, 0.8)',
                    borderColor: 'rgba(99, 102, 241, 1)',
                    borderWidth: 2
                };
        }
    };

    // Only render custom cursor if supported
    if (!isCustomCursorSupported) {
        return null;
    }

    return (
        <>
            {/* Hide default cursor with better CSS */}
            <style jsx global>{`
                @media (min-width: 1024px) and (pointer: fine) {
                    *, *:before, *:after {
                        cursor: none !important;
                    }
                    
                    html, body {
                        cursor: none !important;
                    }
                }
                
                @media (max-width: 1023px), (pointer: coarse) {
                    .custom-cursor-element {
                        display: none !important;
                    }
                }
                
                /* Improve performance */
                .custom-cursor-element {
                    will-change: transform;
                    backface-visibility: hidden;
                    perspective: 1000px;
                }
            `}</style>

            {/* Main Cursor - Simplified and optimized */}
            <motion.div
                className="custom-cursor-element fixed top-0 left-0 rounded-full pointer-events-none z-50 border-2"
                style={{
                    ...getCursorStyle(),
                    opacity: isVisible ? 0.9 : 0,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    mixBlendMode: 'difference'
                }}
                transition={{
                    scale: { type: 'spring', damping: 20, stiffness: 300, mass: 0.3 },
                    backgroundColor: { duration: 0.15 },
                    borderColor: { duration: 0.15 },
                    opacity: { duration: 0.2 }
                }}
            />

            {/* Simplified Trail */}
            <motion.div
                className="custom-cursor-element fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-40"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: '-50%',
                    translateY: '-50%',
                    backgroundColor: 'rgba(99, 102, 241, 0.4)',
                    opacity: isVisible ? 0.6 : 0,
                    boxShadow: '0 0 8px rgba(99, 102, 241, 0.3)',
                }}
            />

            {/* Outer Ripple - Simplified */}
            <motion.div
                className="custom-cursor-element fixed top-0 left-0 rounded-full pointer-events-none z-30 border border-purple-300"
                style={{
                    x: rippleX,
                    y: rippleY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 48,
                    height: 48,
                    scale: cursorVariant === 'hover' ? 1.3 : 1,
                    opacity: isVisible ? 0.15 : 0,
                    backgroundColor: 'transparent',
                }}
                transition={{
                    scale: { type: 'spring', damping: 25, stiffness: 200, mass: 0.8 },
                    opacity: { duration: 0.3 }
                }}
            />
        </>
    );
};

export default CustomCursor;