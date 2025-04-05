import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";



const Navbar = () => {
    
    
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });
    
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm transition-colors">
            <div className="w-full px-6 py-4 flex justify-between items-center">
                <h1
                    onClick={() => {
                        if (location.pathname === "/") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                            navigate("/");
                        }
                    }}
                    className="text-2xl font-bold text-orange-600 dark:text-orange-400 cursor-pointer transition-colors"
                >
                    🎵 EduMuse
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
                    <li className="hover:text-orange-500 cursor-pointer transition">Home</li>
                    <li className="hover:text-orange-500 cursor-pointer transition">Features</li>
                    <li className="hover:text-orange-500 cursor-pointer transition">Gallery</li>
                    <li className="hover:text-orange-500 cursor-pointer transition">Contact</li>
                </ul>

                <div className="flex items-center gap-4">
                    <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    <button
                        onClick={() => (window.location.href = "/login")}
                        className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition"
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
                        <li className="hover:text-orange-500 transition">Gallery</li>
                        <li className="hover:text-orange-500 transition">Contact</li>
                        <li>
                            <button
                                onClick={() => (window.location.href = "/login")}
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
