import { useEffect } from 'react';
import Lenis from 'lenis'; // Make sure this matches your installed package

const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis();
        let animationFrame;

        const raf = (time) => {
            lenis.raf(time);
            animationFrame = requestAnimationFrame(raf);
        };

        animationFrame = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrame);
            lenis.destroy();
        };
    }, []);
};

export default useLenis;
