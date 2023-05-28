import './App.css';
import TodoList from '../components/TodoList.js';
import DarkModeSwitcher from '../components/DarkModeSwitcher';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-[100vh]">
      <div className="container mx-auto px-4 py-8 min-h-[92vh]">
        <h1 className="text-4xl text-gray-900 font-bold mb-4 dark:text-gray-300">
          TODO App
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded pt-6 px-6 shadow">
          <div className="flex justify-between">
            <p className="inline-block text-gray-700 dark:text-gray-300 text-lg mb-4">
              Welcome to the TODO App!
            </p>
            <DarkModeSwitcher />
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            This application was built with React, Tailwind CSS, MangoDB.
          </p>
          <TodoList />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
