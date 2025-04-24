import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";

const images = ["Artwork1.jpg", "Artwork2.jpg", "Artwork3.jpg" , "Artwork4.jpg",];

const Gallery = () => {
    const scrollRef = useRef(null);
    const isHovered = useRef(false);

    // Smooth scrolling using Lenis
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

    // Optional: Scroll locking while gallery is in view
    useEffect(() => {
        const onWheel = (e) => {
            if (scrollRef.current?.contains(document.activeElement)) {
                e.preventDefault();
            }
        };
        const container = scrollRef.current;
        container?.addEventListener("wheel", onWheel, { passive: false });
        return () => container?.removeEventListener("wheel", onWheel);
    }, []);

    return (
        <section className="relative py-40 w-screen overflow-x-hidden bg-white dark:bg-zinc-900 m-0 p-0">
            {/* Background gradient overlay */}
            <div
                className="absolute top-0 left-0 w-full h-full -z-10 bg-fixed bg-cover bg-center opacity-20"
                style={{
                    backgroundImage: "linear-gradient(to right, #fef9c3, #fde68a, #fdba74)",
                }}
            />

            {/* Scrollable container */}
            <div
                ref={scrollRef}
                className="overflow-x-auto whitespace-nowrap w-full scroll-smooth cursor-ew-resize"
                onMouseEnter={() => (isHovered.current = true)}
                onMouseLeave={() => (isHovered.current = false)}
            >
                <div className="flex gap-8 pl-6 pr-6 items-center">
                    {images.map((src, i) => {
                        const parallaxY = useTransform(
                            useScroll().scrollY,
                            [0, 1000],
                            [0, (i % 2 === 0 ? -10 : 10)] // walking-style motion
                        );

                        return (
                            <motion.img
                                key={i}
                                src={src}
                                alt={`Artwork ${i + 1}`}
                                style={{ y: parallaxY }}
                                className="w-[300px] h-[400px] object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Optional: transition sound effect on enter (uncomment to use) */}
            {/* <audio autoPlay src="/scroll-sound.mp3" className="hidden" /> */}
        </section>
    );
};

export default Gallery;
