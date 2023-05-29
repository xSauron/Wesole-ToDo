import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Popup from './Popup.js';
import TodoList from './TodoList.js';

function Todo() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="container mx-auto dark:bg-gray-800">
            <h1 className="text-2xl font-bold mb-4 dark:text-gray-300">TODO List</h1>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded block mx-auto w-xl px-20 my-4"
                onClick={togglePopup}
            >
                <AiOutlinePlus className="text-2xl" />
            </button>
            <TodoList />
            <div>{showPopup && <Popup onClose={togglePopup} />}</div>
        </div>
    );
}

export default Todo;
