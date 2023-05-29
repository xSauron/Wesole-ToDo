import React from 'react';
import { deleteTodo } from '../api.js';
import { TfiClose } from 'react-icons/tfi';

function DeleteModal({ closeModal, todoId, todoTitle, refreshTodos }) {

    const handleDelete = async () => {
        try {
            await deleteTodo(todoId);
            closeModal();
            refreshTodos();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };
    return (
        <div>
            <div
                id="popup-modal"
                tabIndex="-1"
                className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-opacity-50"
            >
                <div className="relative w-full max-w-md">
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            onClick={closeModal}
                        >
                            <TfiClose className="cursor-pointer text-xl text-black dark:text-white" />
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                            <svg
                                aria-hidden="true"
                                className="mx-auto mb-4 text-gray-400 dark:text-gray-500 w-14 h-14"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-300">
                                Are you sure you want to delete "{todoTitle}"?
                            </h3>
                            <button
                                onClick={() => {
                                    handleDelete(todoId);
                                }}
                                type="button"
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            >
                                Yes, I'm sure
                            </button>
                            <button
                                onClick={closeModal}
                                type="button"
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:text-gray-200"
                            >
                                No, cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default DeleteModal;