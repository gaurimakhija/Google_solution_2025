import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';

const LandingPage = () => {
    return (
        <main className="w-full overflow-hidden bg-white dark:bg-zinc-900">
            <Navbar />
            <Hero />
            <Gallery />
        </main>
    );
};

export default LandingPage;
