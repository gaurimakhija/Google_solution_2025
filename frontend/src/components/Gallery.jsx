import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

const images = ["/art1.jpg", "/art2.jpg", "/art3.jpg", "/art4.jpg"];

const Gallery = () => {
    const scrollRef = useRef(null);
    const isHovered = useRef(false);

    // Smooth scroll using Lenis
    useEffect(() => {
        const lenis = new Lenis({ smooth: true });
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    // Auto horizontal scroll
    useEffect(() => {
        const container = scrollRef.current;
        let scrollAmount = 0;

        const autoScroll = () => {
            if (!isHovered.current && container) {
                scrollAmount += 0.5;
                container.scrollLeft = scrollAmount;
                if (scrollAmount >= container.scrollWidth - container.clientWidth) {
                    scrollAmount = 0;
                }
            }
            requestAnimationFrame(autoScroll);
        };

        autoScroll();
        return () => cancelAnimationFrame(autoScroll);
    }, []);

    return (
        <section className="relative py-40 w-screen overflow-x-hidden bg-white dark:bg-zinc-900 m-0 p-0">
            {/* Background layer */}
            <div
                className="absolute top-0 left-0 w-full h-full -z-10 bg-fixed bg-cover bg-center opacity-20"
                style={{
                    backgroundImage: "linear-gradient(to right, #fef9c3, #fde68a, #fdba74)",
                }}
            />

            {/* Scroll container */}
            <div
                ref={scrollRef}
                className="overflow-x-auto whitespace-nowrap w-full scroll-smooth"
                onMouseEnter={() => (isHovered.current = true)}
                onMouseLeave={() => (isHovered.current = false)}
            >
                {/* Inner content */}
                <div className="flex gap-8 pl-4 pr-4">
                    {images.map((src, i) => (
                        <motion.img
                            key={i}
                            src={src}
                            alt={`Artwork ${i + 1}`}
                            className="w-[300px] h-[400px] object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
