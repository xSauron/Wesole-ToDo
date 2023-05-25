import './App.css';
import TodoList from '../components/TodoList.js';

function App() {
    return (
        <div className="bg-gray-900 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl text-white font-bold mb-4">TODO App</h1>
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <p className="text-gray-700 text-lg mb-4">
                        Welcome to the TODO App!
                    </p>
                    <p className="text-gray-600 mb-8">
                        This is an example application built with React and Tailwind CSS.
                    </p>
                    <TodoList />
                </div>
            </div>
        </div>
    );
}

export default App;