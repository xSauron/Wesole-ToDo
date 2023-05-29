import React from 'react';

import TodoList from './TodoList.js';

function Todo() {
    return (
        <div className="container mx-auto dark:bg-gray-800">
            <h1 className="text-2xl font-bold mb-4 dark:text-gray-300">TODO List</h1>
            <TodoList />
        </div>
    );
}

export default Todo;
