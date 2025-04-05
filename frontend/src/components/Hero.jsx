import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="w-full overflow-x-hidden min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white text-center m-0 p-0">
            <div className="w-full max-w-screen-xl mx-auto px-4">
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Learn Through <span className="text-orange-500 dark:text-orange-400">Music & AI</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl max-w-xl mx-auto mb-6 text-gray-800 dark:text-gray-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Helping children grow with good manners, personality traits, and academic support — all delivered through the magic of classical music.
                </motion.p>

                <motion.div
                    className="flex justify-center flex-wrap gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-[0_0_30px_10px_#fb923c]">
                        Try It Now
                    </button>

                    <button className="border border-teal-500 text-teal-600 hover:bg-teal-100 hover:text-teal-700 dark:border-teal-400 dark:text-teal-300 dark:hover:bg-teal-800 dark:hover:text-teal-200 font-medium py-3 px-6 rounded-xl transition duration-300 shadow-sm hover:shadow-md">
                        Learn More
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
