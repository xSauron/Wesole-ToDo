import { GoMarkGithub } from 'react-icons/go';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-4 p-4 bg-white text-center rounded shadow dark:bg-gray-800">
            <div className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
                <span>© {currentYear} Hydem, Sauron, Kontog23</span>
            </div>
            <div>
                <a
                    className="ml-2 inline-block"
                    href="https://github.com/xSauron/Wesole-ToDo"
                >
                    {' '}
                    <GoMarkGithub className="inline-block text-xl pt-1 hover:text-white" />
                </a>
            </div>
        </footer>
    );
}
export default Footer;
