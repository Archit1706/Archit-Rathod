import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import AnimationWrapper from './AnimationWrapper';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [focusedField, setFocusedField] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });

            // Reset success message after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        }, 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const inputVariants = {
        focused: {
            scale: 1.02,
            boxShadow: "0 0 0 3px rgba(139, 69, 19, 0.1)",
            transition: {
                duration: 0.2
            }
        },
        unfocused: {
            scale: 1,
            boxShadow: "0 0 0 0px rgba(139, 69, 19, 0)",
            transition: {
                duration: 0.2
            }
        }
    };

    const FormField = ({ name, type = "text", placeholder, icon: Icon, isTextarea = false }) => (
        <motion.div variants={itemVariants} className="relative">
            <div className="relative">
                <Icon className={`absolute left-4 ${isTextarea ? 'top-4' : 'top-1/2 transform -translate-y-1/2'} text-gray-400 transition-colors duration-300 ${focusedField === name ? 'text-purple-500' : ''}`} />

                {isTextarea ? (
                    <motion.textarea
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(name)}
                        onBlur={() => setFocusedField(null)}
                        placeholder={placeholder}
                        rows={6}
                        variants={inputVariants}
                        animate={focusedField === name ? "focused" : "unfocused"}
                        className={`w-full pl-12 pr-4 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 rounded-2xl text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none ${errors[name]
                                ? 'border-red-400 focus:border-red-500'
                                : focusedField === name
                                    ? 'border-purple-400 focus:border-purple-500'
                                    : 'border-gray-200 dark:border-gray-600 focus:border-purple-400'
                            }`}
                    />
                ) : (
                    <motion.input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(name)}
                        onBlur={() => setFocusedField(null)}
                        placeholder={placeholder}
                        variants={inputVariants}
                        animate={focusedField === name ? "focused" : "unfocused"}
                        className={`w-full pl-12 pr-4 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 rounded-2xl text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none transition-all duration-300 ${errors[name]
                                ? 'border-red-400 focus:border-red-500'
                                : focusedField === name
                                    ? 'border-purple-400 focus:border-purple-500'
                                    : 'border-gray-200 dark:border-gray-600 focus:border-purple-400'
                            }`}
                    />
                )}

                {/* Floating Label */}
                <AnimatePresence>
                    {(focusedField === name || formData[name]) && (
                        <motion.label
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute -top-3 left-8 bg-white dark:bg-gray-900 px-2 text-sm font-medium text-purple-600 dark:text-purple-400"
                        >
                            {placeholder}
                        </motion.label>
                    )}
                </AnimatePresence>
            </div>

            {/* Error Message */}
            <AnimatePresence>
                {errors[name] && (
                    <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-sm mt-2 ml-4"
                    >
                        {errors[name]}
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.div>
    );

    return (
        <section id="contact" className="w-full min-h-screen py-16 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" />

            {/* Floating Shapes */}
            <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-800/10 dark:to-pink-800/10 rounded-full blur-3xl"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [-50, 50, -50],
                            y: [-50, 50, -50],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className="max-w-[1240px] mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Side - Contact Info */}
                    <div>
                        <AnimationWrapper direction="left" duration={0.8}>
                            <div className="text-center lg:text-left mb-12">
                                <motion.p
                                    variants={itemVariants}
                                    className="uppercase text-xl tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-4"
                                >
                                    Get In Touch
                                </motion.p>
                                <motion.h2
                                    variants={itemVariants}
                                    className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
                                >
                                    Let&apos;s Create Something Amazing Together
                                </motion.h2>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
                                >
                                    I&apos;m always excited to work on new projects and collaborate with fellow developers, designers, and innovators. Drop me a message and let&apos;s discuss how we can bring your ideas to life.
                                </motion.p>
                            </div>

                            {/* Contact Methods */}
                            <motion.div variants={itemVariants} className="space-y-6">
                                {[
                                    { label: "Email", value: "archit@example.com", icon: "📧" },
                                    { label: "Location", value: "Chicago, IL", icon: "📍" },
                                    { label: "Available", value: "Mon-Fri, 9AM-6PM", icon: "🕒" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-4 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl border border-white/20"
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <p className="font-semibold text-gray-800 dark:text-white">{item.label}</p>
                                            <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimationWrapper>
                    </div>

                    {/* Right Side - Contact Form */}
                    <AnimationWrapper direction="right" duration={0.8}>
                        <motion.div
                            variants={formVariants}
                            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20"
                        >
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="text-center py-12"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                        >
                                            <FaCheckCircle className="mx-auto text-6xl text-green-500 mb-4" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                                            Message Sent Successfully!
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Thank you for reaching out. I&apos;ll get back to you soon!
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="space-y-6"
                                    >
                                        <motion.h3
                                            variants={itemVariants}
                                            className="text-2xl font-bold text-gray-800 dark:text-white mb-6"
                                        >
                                            Send me a message
                                        </motion.h3>

                                        <FormField
                                            name="name"
                                            placeholder="Your Name"
                                            icon={FaUser}
                                        />

                                        <FormField
                                            name="email"
                                            type="email"
                                            placeholder="Your Email"
                                            icon={FaEnvelope}
                                        />

                                        <FormField
                                            name="message"
                                            placeholder="Your Message"
                                            icon={FaCommentDots}
                                            isTextarea={true}
                                        />

                                        <motion.button
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                    />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <FaPaperPlane />
                                                    Send Message
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </AnimationWrapper>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;