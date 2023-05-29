import './App.css';
import Todo from '../components/Todo.js';
import DarkModeSwitcher from '../components/DarkModeSwitcher';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen flex flex-col">
      <div className="container mx-auto px-4">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded py-6 px-6 shadow">
          <div className="flex justify-between">
            <p className="inline-block text-gray-700 dark:text-gray-300 text-lg mb-4">
              Welcome to the TODO App!
            </p>
            <DarkModeSwitcher />
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            This application was built with React, Tailwind CSS, MangoDB.
          </p>
          <Todo />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <Footer />
      </div>
    </div>
  );
}
export default App;
