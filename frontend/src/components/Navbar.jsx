import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import Lenis from "lenis";
import DarkModeToggle from "./DarkModeToggle";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useDarkMode();
    const navigate = useNavigate();
    const location = useLocation();
    const lenisRef = useRef(null);

    useEffect(() => {
        lenisRef.current = new Lenis();
        function raf(time) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    const handleEduMuseClick = () => {
        if (location.pathname === "/") {
            lenisRef.current?.scrollTo(0);
        } else {
            navigate("/");
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm transition-colors">
            <div className="w-full px-6 py-4 flex justify-between items-center">
                <h1
                    onClick={handleEduMuseClick}
                    className="text-2xl font-bold text-orange-600 dark:text-orange-400 cursor-pointer transition-colors"
                >
                    🎵 SwarVed
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
                    <li className="hover:text-orange-500 cursor-pointer transition">Home</li>
                    <li className="hover:text-orange-500 cursor-pointer transition">Features</li>
                    <li className="hover:text-orange-500 cursor-pointer transition">Contact</li>
                </ul>

                <div className="flex items-center gap-4">
                    <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

                    <button
                        onClick={() => navigate("/login")}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-[0_0_30px_10px_#fb923c]"
                    >
                        Try Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-4">
                    <ul className="flex flex-col gap-4 text-gray-800 dark:text-gray-100 font-medium">
                        <li className="hover:text-orange-500 transition">Home</li>
                        <li className="hover:text-orange-500 transition">Features</li>
                        <li className="hover:text-orange-500 transition">Contact</li>
                        <li>
                            <button
                                onClick={() => navigate("/login")}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-[0_0_30px_10px_#fb923c]"
                            >
                                Try Now
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
