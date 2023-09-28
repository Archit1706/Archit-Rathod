// "use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimationWrapper = ({ children }) => {
    const animationControls = useAnimation();
    const sectionRef = useRef(null);

    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            animationControls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 },
            });
        }
    };

    // const handleIntersection = (entries) => {
    //     const [entry] = entries;
    //     if (entry.isIntersecting) {
    //         animationControls.start((i) => ({
    //             opacity: 1,
    //             x: i % 2 === 0 ? -100 : 100,
    //             transition: { duration: 0.5 },
    //         }));
    //     }
    // };

    useEffect(() => {
        const observer = new IntersectionObserver(
            handleIntersection,
            {
                threshold: 0.2, // Adjust this threshold as needed
            },
            [handleIntersection]
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [handleIntersection, sectionRef.current]);

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 100 }}
            animate={animationControls}
        >
            {children}
        </motion.div>
    );
};

export default AnimationWrapper;
