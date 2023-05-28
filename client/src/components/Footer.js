import { GoMarkGithub } from 'react-icons/go';

function Footer() {
  return (
    <div className="mx-auto container px-4">
      <footer className="min-h-[8vh] w-full rounded mx-auto px-4 py p-4 bg-white dark:bg-gray-800 text-center">
        <div className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400 w-full">
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
    </div>
  );
}
export default Footer;
