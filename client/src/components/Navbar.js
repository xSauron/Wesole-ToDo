import { useState } from "react";
import { TfiClose, TfiMenu } from "react-icons/tfi";

const links = [
    {
        name: "Today's tasks",
        path: "/today",
    },
    {
        name: "All tasks",
        path: "/",
    },
    {
        name: "Important tasks",
        path: "/important",
    },
    {
        name: "Completed tasks",
        path: "/completed",
    },
    {
        name: "Uncompleted tasks",
        path: "/uncompleted",
    },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = window.location.pathname;

    return (
        <header className="px-4 py-4 bg-white shadow rounded dark:bg-gray-800">
            <a href="/" className="text-center block">
                <h1 className="text-center text-4xl text-gray-900 font-bold dark:text-gray-300">
                    WESOLE TODO
                </h1>
            </a>
            <nav className="flex flex-wrap  mt-4 md:justify-start">
                <button
                    className="block md:hidden px-2 py-1 rounded text-gray-900 dark:text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <TfiClose /> : <TfiMenu />}
                </button>
                <div
                    className={`${isOpen ? "block" : "hidden justify-center"
                        } md:flex flex-grow md:flex md:items-center md:w-auto`}
                >
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.path}
                            className={`block md:inline-block mt-2 md:mt-0 px-4 py-2 rounded ${currentPath === link.path
                                ? "bg-gray-900 text-white"
                                : "text-gray-900"
                                } hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
