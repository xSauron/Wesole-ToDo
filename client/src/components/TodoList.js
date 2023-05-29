import React, { useEffect, useState } from 'react';
import { getAllTodos, deleteTodo, updateTodo } from '../api.js';
import {
    FaClock,
    FaTrashAlt,
    FaEdit,
    FaLocationArrow,
    FaExclamation,
    FaCheck,
    FaTimes,
} from 'react-icons/fa';
import DeleteModal from './DeleteModal.js';


function TodoList() {
    const pathname = window.location.pathname;
    const [todos, setTodos] = useState([]);
    const [deleteModal, setDeleteModal] = useState({
        show: false,
        id: '',
        title: '',
    });

    const fetchTodos = async () => {
        try {
            const todosData = await getAllTodos();
            setTodos(todosData);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleDelete = (id, title) => {
        setDeleteModal({
            show: true,
            id: id,
            title: title,
        });
    };
    const handleUpdate = async (id) => { };

    const filterToday = () => {
        const today = new Date();
        return todos.filter((todo) => {
            const todoDate = new Date(todo.dateTime);
            return (
                todoDate.getDate() === today.getDate() &&
                todoDate.getMonth() === today.getMonth() &&
                todoDate.getFullYear() === today.getFullYear()
            );
        });
    };

    const filterImportant = () => {
        return todos.filter((todo) => todo.importance === 'high');
    };

    const filterCompleted = () => {
        return todos.filter((todo) => todo.isCompleted);
    };

    const filterUncompleted = () => {
        return todos.filter((todo) => !todo.isCompleted);
    };

    const refreshTodos = async () => {
        await fetchTodos();
    };

    return (
        <div>
            {
                todos.length > 0 ? (
                    <ul className="space-y-4">
                        {(() => {
                            switch (pathname) {
                                case '/today':
                                    return filterToday();
                                case '/important':
                                    return filterImportant();
                                case '/completed':
                                    return filterCompleted();
                                case '/uncompleted':
                                    return filterUncompleted();
                                default:
                                    return todos;
                            }
                        })().map((todo) => (
                            <li
                                key={todo._id}
                                className={`p-4 rounded shadow flex items-center dark:bg-gray-800 dark:shadow-lg`}
                            >
                                <div className="flex-grow">
                                    <h2 className="text-lg font-bold">{todo.title}</h2>
                                    <p className="text-sm text-gray-700 dark:text-gray-400">
                                        {todo.description}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        <FaClock className="inline-block mr-1" />
                                        {todo.dateTime}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        <FaLocationArrow className="inline-block mr-1" />
                                        {todo.localization}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        <FaExclamation className="inline-block mr-1" />
                                        Importance: {todo.importance}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {todo.isCompleted ? (
                                            <span>
                                                <FaCheck className="inline-block mr-1 text-green-500" />
                                                Completed
                                            </span>
                                        ) : (
                                            <span>
                                                <FaTimes className="inline-block mr-1 text-red-500" />
                                                Incomplete
                                            </span>
                                        )}
                                    </p>
                                </div>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mr-2"
                                    onClick={() => handleDelete(todo._id, todo.title)}
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
                )
            }
            {deleteModal.show && (
                <DeleteModal
                    closeModal={() => setDeleteModal({ ...deleteModal, show: false })}
                    todoId={deleteModal.id}
                    todoTitle={deleteModal.title}
                    refreshTodos={refreshTodos}
                />
            )}
        </div>

    );
}

export default TodoList;
