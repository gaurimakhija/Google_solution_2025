// src/components/DarkModeToggle.jsx
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(() =>
        document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="transition duration-500 ease-in-out p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110"
        >
            {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
                <Moon className="w-5 h-5 text-gray-700" />
            )}
        </button>
    );
};

export default DarkModeToggle;
