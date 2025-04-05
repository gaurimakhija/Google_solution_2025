import { useEffect } from 'react';
import Lenis from 'lenis';

const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);
};

export default useLenis;
