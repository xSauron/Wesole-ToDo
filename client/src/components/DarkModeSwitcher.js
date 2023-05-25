import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function DarkModeSwitcher() {
    const [theme, setTheme] = useState(localStorage.theme || "light");
    const colorTheme = theme === "dark" ? "light" : "dark";

    const toggleDarkMode = () => {
        setTheme(colorTheme);

    };

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme]);

    return (
        <div className="flex items-center justify-center">
            <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input
                        type="checkbox"
                        id="darkModeToggle"
                        className="sr-only"
                        checked={colorTheme === "dark"}
                        onChange={toggleDarkMode}
                    />
                    <div className="block dark:bg-gray-300 bg-gray-600 w-14 h-8 rounded-full">
                        <div
                            className={`dot absolute left-1 top-1 flex items-center justify-center w-6 h-6 rounded-full transition transform dark:bg-white bg-gray-800 ${colorTheme === "dark" ? "translate-x-0" : "translate-x-6"
                                }`}
                        >
                            {colorTheme === "dark" ? (
                                <FiMoon className="text-yellow-400 w-4 h-4" />
                            ) : (
                                <FiSun className="text-yellow-400 w-4 h-4" />
                            )}
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
}