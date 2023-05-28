import { GoMarkGithub } from 'react-icons/go';

function Footer() {
    return (
        <footer className="container mx-auto rounded px-4 py p-4 bg-white dark:bg-gray-800 text-center mt-auto">
            <div className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
                <span>© 2023 Hydem, Sauron, Kontog23</span>
                <a
                    className="ml-2 inline-block"
                    href="https://github.com/xSauron/Wesole-ToDo"
                >
                    {' '}
                    <GoMarkGithub className="inline-block text-xl pb-1" />
                </a>
            </div>
        </footer>
    );
}
export default Footer;
