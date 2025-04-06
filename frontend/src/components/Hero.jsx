import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
};

const transition = { duration: 0.8, ease: 'easeOut' };

const Hero = () => {
    return (
        <section className="transition-colors duration-500 w-full min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-4">
            <div className="max-w-screen-xl w-full mx-auto">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                    variants={fadeUp}
                    initial="initial"
                    animate="animate"
                    transition={transition}
                    layout
                >
                    Learn Through <span className="text-orange-500 dark:text-orange-400">Music & AI</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-800 dark:text-gray-300"
                    variants={fadeUp}
                    initial="initial"
                    animate="animate"
                    transition={{ ...transition, delay: 0.2 }}
                    layout
                >
                    Helping children grow with good manners, personality traits, and academic support — all delivered through the magic of classical music.
                </motion.p>

                <motion.div
                    className="flex justify-center flex-wrap gap-4"
                    variants={fadeUp}
                    initial="initial"
                    animate="animate"
                    transition={{ ...transition, delay: 0.4 }}
                    layout
                >
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300">
                        Try It Now
                    </button>
                    <button className="border border-teal-500 text-teal-600 hover:bg-teal-100 dark:border-teal-400 dark:text-teal-300 dark:hover:bg-teal-800 font-semibold py-3 px-6 rounded-xl shadow-sm transition duration-300">
                        Learn More
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
