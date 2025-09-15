import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const AnimationWrapper = ({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    direction = "up", // up, down, left, right, scale, fade
    once = true,
    amount = 0.1,
    stagger = false,
    ...props
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once,
        amount,
        margin: "-50px"
    });
    const controls = useAnimation();

    const variants = {
        up: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        },
        down: {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 }
        },
        left: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        right: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        },
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        }
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger ? 0.1 : 0,
                delayChildren: delay
            }
        }
    };

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else if (!once) {
            controls.start("hidden");
        }
    }, [isInView, controls, once]);

    if (stagger) {
        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className={className}
                {...props}
            >
                {React.Children.map(children, (child, index) => (
                    <motion.div
                        key={index}
                        variants={variants[direction]}
                        transition={{
                            duration,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                    >
                        {child}
                    </motion.div>
                ))}
            </motion.div>
        );
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants[direction]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default AnimationWrapper;