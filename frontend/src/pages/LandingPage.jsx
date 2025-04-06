// ./src/pages/LandingPage.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import useLenis from '../hooks/useLenis'; // Optional: if you're using Lenis

const LandingPage = () => {
    useLenis(); // Optional: smooth scroll on this page

    return (
        <div className="w-full min-h-screen overflow-hidden bg-white dark:bg-zinc-900 text-gray-900 dark:text-white">
            <Navbar />
            <main>
                <Hero />
                <Gallery />
            </main>
        </div>
    );
};

export default LandingPage;
