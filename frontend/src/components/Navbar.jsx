import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Music } from "lucide-react";
import Lenis from "lenis";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm transition-colors">
            <div className="w-full px-6 py-4 flex justify-between items-center">
                <h1
                    onClick={handleEduMuseClick}
                    className="text-2xl font-bold text-orange-600 dark:text-orange-400 cursor-pointer transition-colors"
                >
                    <span className="flex items-center gap-2">
                        <Music size={24} className="relative top-[1px]" />
                        <span>SwarVed</span>
                    </span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
                    {navItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => navigate(item.path)}
                            className={`cursor-pointer hover:text-orange-500 transition ${location.pathname === item.path ? "text-orange-500 font-semibold" : ""
                                }`}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>

                {/* Actions: Dark mode + Try Now */}
                <div className="flex items-center gap-4 relative group">
                    <DarkModeToggle />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out text-xs text-white bg-black/80 px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
                        Toggle Theme
                    </span>

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
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                onClick={() => {
                                    navigate(item.path);
                                    setMenuOpen(false);
                                }}
                                className={`cursor-pointer hover:text-orange-500 transition ${location.pathname === item.path ? "text-orange-500 font-semibold" : ""
                                    }`}
                            >
                                {item.name}
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => {
                                    navigate("/login");
                                    setMenuOpen(false);
                                }}
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
