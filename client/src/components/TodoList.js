import React, { useEffect, useState } from 'react';
import { getAllTodos, deleteTodo, updateTodo } from '../api.js';
import { FaClock, FaTrashAlt, FaEdit } from 'react-icons/fa';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todosData = await getAllTodos();
                setTodos(todosData);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    const handleDelete = async (id) => {

    };

    const handleUpdate = async (id) => {

    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">TODO List</h1>
            {todos.length > 0 ? (
                <ul className="space-y-4">
                    {todos.map((todo) => (
                        <li
                            key={todo._id}
                            className={`bg-${todo.color}-100 p-4 rounded shadow flex items-center`}
                        >
                            <div className="flex-grow">
                                <h2 className="text-lg font-bold">{todo.title}</h2>
                                <p className="text-sm text-gray-600">{todo.description}</p>
                                <p className="text-sm text-gray-600">
                                    <FaClock className="inline-block mr-1" />
                                    {todo.dateTime}
                                </p>
                                <p className="text-sm text-gray-600">{todo.localization}</p>
                                <p className="text-sm text-gray-600">
                                    Importance: {todo.importance}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Completed: {todo.isCompleted ? 'Yes' : 'No'}
                                </p>
                            </div>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mr-2"
                                onClick={() => handleDelete(todo._id)}
                            >
                                <FaTrashAlt className="inline-block mr-1" />
                                Delete
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                                onClick={() => handleUpdate(todo._id)}
                            >
                                <FaEdit className="inline-block mr-1" />
                                Update
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No todos found.</p>
            )}
        </div>
    );
}

export default TodoList;