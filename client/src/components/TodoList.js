import React, { useEffect, useState } from 'react';
import { getAllTodos } from '../api.js';
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
import AddListPopup from './AddListPopup.js';
import { AiOutlinePlus } from 'react-icons/ai';
import UpdateListPopup from './UpdateListPopup.js';

function TodoList() {
  const pathname = window.location.pathname;
  const [todos, setTodos] = useState([]);

  const [deleteModal, setDeleteModal] = useState({
    show: false,
    id: '',
    title: '',
  });

  const [updateModal, setUpdateModal] = useState({
    show: false,
    id: '',
    title: '',
    description: '',
    dateTime: '',
    localization: '',
    color: '',
    importance: '',
    isCompleted: '',
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

  const handleUpdate = async (
    id,
    title,
    description,
    dateTime,
    localization,
    color,
    importance,
    isCompleted
  ) => {
    setUpdateModal({
      show: true,
      id,
      title,
      description,
      dateTime,
      localization,
      color,
      importance,
      isCompleted,
    });
  };

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

  const [showAddPopup, setShowAddPopup] = useState(false);

  const togglePopup = () => {
    setShowAddPopup(!showAddPopup);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded block mx-auto w-xl px-20 my-4"
        onClick={togglePopup}
      >
        <AiOutlinePlus className="text-2xl" />
      </button>
      {todos.length > 0 ? (
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
              className={`relative p-4 shadow flex items-center dark:bg-gray-800 dark:shadow-lg`}
            >
              <div
                className="absolute rounded-l-lg top-0 bottom-0 left-0 w-2"
                style={{ backgroundColor: todo.color }}
              ></div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold">{todo.title}</h2>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {todo.description}
                </p>
                <div className="flex items-center">
                  <FaClock className="text-sm text-yellow-500 inline-block mr-1" />
                  <p className="text-sm text-gray-500">
                    {todo.dateTime.slice(0, -5).replace('T', ' ')}
                  </p>
                </div>
                <div className="flex items-center">
                  <FaLocationArrow className="text-sm text-blue-500 inline-block mr-1" />
                  <p className="text-sm text-gray-500">{todo.localization}</p>
                </div>
                <div className="flex items-center">
                  <FaExclamation className="text-sm text-red-900 inline-block mr-1" />
                  <p className="text-sm text-gray-500">
                    Importance: {todo.importance}
                  </p>
                </div>
                <div className="flex items-center">
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
                onClick={() =>
                  handleUpdate(
                    todo._id,
                    todo.title,
                    todo.description,
                    todo.dateTime,
                    todo.localization,
                    todo.color,
                    todo.importance,
                    todo.isCompleted
                  )
                }
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
      {deleteModal.show && (
        <DeleteModal
          closeModal={() => setDeleteModal({ ...deleteModal, show: false })}
          todoId={deleteModal.id}
          todoTitle={deleteModal.title}
          refreshTodos={refreshTodos}
        />
      )}
      <div>
        {showAddPopup && (
          <AddListPopup onClose={togglePopup} refreshTodos={refreshTodos} />
        )}
      </div>
      <div>
        {updateModal.show && (
          <UpdateListPopup
            closeModal={() => setUpdateModal({ ...updateModal, show: false })}
            todoId={updateModal.id}
            todoTitle={updateModal.title}
            todoDescription={updateModal.description}
            todoDateTime={updateModal.dateTime}
            todoLocalization={updateModal.localization}
            todoColor={updateModal.color}
            todoImportance={updateModal.importance}
            todoIsCompleted={updateModal.isCompleted}
            refreshTodos={refreshTodos}
          />
        )}
      </div>
    </div>
  );
}

export default TodoList;
