import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Providers = ({ children }) => {
    return (
        <AnimatePresence>
            <motion.div>{children}</motion.div>
        </AnimatePresence>
    );
};

export default Providers;
