import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
    fadeIn: {
        y: 100,
        opacity: 0,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    },
    inactive: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    },
    fadeOut: {
        opacity: 0,
        y: -100,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
};

const Transition = ({ children }) => {
    const { asPath } = useRouter();

    return (
        <div className="effect-2">
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={asPath}
                    variants={variants}
                    initial="fadeIn"
                    animate="inactive"
                    exit="fadeOut"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Transition;