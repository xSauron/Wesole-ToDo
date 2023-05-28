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
    const currentPath = window.location.pathname;

    return (
        <header className="px-4 py-4 bg-white shadow rounded dark:bg-gray-800">
            <h1 className="text-center text-4xl text-gray-900 font-bold dark:text-gray-300">
                WESOLE TODO
            </h1>
            <nav className="justify-between flex space-x-4 mt-4">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.path}
                        className={`px-4 py-2 rounded ${currentPath === link.path
                            ? "bg-gray-900 text-white"
                            : "text-gray-900"
                            } hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700`}
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
        </header>

    );
}

export default Navbar;