import './App.css';
import TodoList from '../components/TodoList.js';
import DarkModeSwitcher from '../components/DarkModeSwitcher';

function App() {
    return (
        <div className="dark:bg-gray-900 dark:text-white min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl text-gray-900 font-bold mb-4 dark:text-gray-300">TODO App</h1>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <DarkModeSwitcher />
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                        Welcome to the TODO App!
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        This application was built with React and Tailwind CSS.
                    </p>
                    <TodoList />
                </div>
            </div>
        </div>
    );
}
export default App;