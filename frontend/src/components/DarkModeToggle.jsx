import { Moon, Sun } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useDarkMode();

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-500 ease-in-out hover:scale-110"
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
