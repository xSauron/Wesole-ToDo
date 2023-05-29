import { React, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { updateTodo } from '../api';

const UpdateListPopup = ({ closeModal, refreshTodos, todoId, todoTitle, todoDescription, todoDateTime, todoLocalization, todoColor, todoImportance, todoIsCompleted, }) => {

    const [todoData, setTodoData] = useState({
        title: todoTitle,
        description: todoDescription,
        dateTime: todoDateTime,
        localization: todoLocalization,
        color: todoColor,
        importance: todoImportance,
        isCompleted: todoIsCompleted,
    });

    const [selectedOption, setSelectedOption] = useState(todoImportance);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setTodoData((prevData) => ({
                ...prevData,
                [name]: checked,
            }));
        } else if (name === "importance") {
            setTodoData((prevData) => ({
                ...prevData,
                importance: value,
            }));
        } else {
            setTodoData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleUpdateTodo = async (e) => {
        e.preventDefault();
        try {
            console.log(todoData);

            if (
                todoData.title !== "" &&
                todoData.description !== "" &&
                todoData.dateTime !== "" &&
                todoData.localization !== ""
            ) {
                await updateTodo(todoId, todoData);
                closeModal();
                refreshTodos();
            } else {
                return;
            }
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);

        setTodoData((prevData) => ({
            ...prevData,
            importance: value,
        }));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center text-black dark:text-white bg-black bg-opacity-80">
            <div className="bg-white dark:bg-gray-800 w-5/6 h-full sm:w-3/6 sm:h-4/5 md:w-3/6 md:h-4/5 lg:w-2/6 p-4 rounded shadow-md overflow-auto">
                <div className="relative flex justify-center">
                    <h2 className="text-xl font-bold absolute top-0 transform -translate-y-1/2 pt-5">
                        Edit List
                    </h2>
                    <TfiClose
                        className="cursor-pointer text-2xl text-black dark:text-white ml-auto"
                        onClick={closeModal}
                    />
                </div>

                <form>
                    <div className="my-5">
                        <label
                            htmlFor="title"
                            className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                        >
                            List name
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="name_of_list"
                            placeholder="List Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white dark:bg-gray-700 py-2 px-6 text-base font-medium text-[#6B7280] dark:text-gray-300 outline-none focus:border-[#6A64F1] focus:shadow-md dark:focus:border-[#6A64F1] dark:focus:shadow-md"
                            required
                            defaultValue={todoTitle}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="description"
                            className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                        >
                            List Description
                        </label>
                        <textarea
                            rows="2"
                            name="description"
                            id="description_of_list"
                            placeholder="List Description"
                            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white dark:bg-gray-700 py-2 px-6 text-base font-medium text-[#6B7280] dark:text-gray-300 outline-none focus:border-[#6A64F1] focus:shadow-md dark:focus:border-[#6A64F1] dark:focus:shadow-md"
                            required
                            defaultValue={todoDescription}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className="my-5">
                        <label
                            htmlFor="dateTime"
                            className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                        >
                            Date and Time
                        </label>
                        <input
                            type="datetime-local"
                            name="dateTime"
                            id="datetime_of_list"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white dark:bg-gray-700 py-2 px-6 text-base font-medium text-[#6B7280] dark:text-white outline-none focus:border-[#6A64F1] focus:shadow-md dark:focus:border-[#6A64F1] dark:focus:shadow-md"
                            required
                            defaultValue={todoDateTime.slice(0, -5)}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="my-5">
                        <label
                            htmlFor="localization"
                            className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                        >
                            Localization
                        </label>
                        <input
                            type="text"
                            name="localization"
                            id="localization_of_list"
                            placeholder="List Localization"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white dark:bg-gray-700 py-2 px-6 text-base font-medium text-[#6B7280] dark:text-gray-300 outline-none focus:border-[#6A64F1] focus:shadow-md dark:focus:border-[#6A64F1] dark:focus:shadow-md"
                            required
                            defaultValue={todoLocalization}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex justify-around flex-wrap">
                        <h3 className="w-full font-bold mb-3 dark:text-white">
                            Importance
                        </h3>
                        <div className="flex items-center">
                            <input
                                id="list-low"
                                type="radio"
                                value="low"
                                name="low-list-importance"
                                className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-800 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                                checked={selectedOption === 'low'}
                                onChange={handleOptionChange}
                            />
                            <label
                                htmlFor="low-list-importance"
                                className="ml-2 text-sm font-medium text-[#07074D] dark:text-white"
                            >
                                Low
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="medium-list"
                                type="radio"
                                value="medium"
                                name="medium-list-importance"
                                className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-800 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                                checked={selectedOption === 'medium'}
                                onChange={handleOptionChange}
                            />
                            <label
                                htmlFor="medium-list-importance"
                                className="ml-2 text-sm font-medium text-[#07074D] dark:text-white"
                            >
                                Medium
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="list-high"
                                type="radio"
                                value="high"
                                name="high-list-importance"
                                className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-800 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                                checked={selectedOption === 'high'}
                                onChange={handleOptionChange}
                            />
                            <label
                                htmlFor="high-list-importance"
                                className="ml-2 text-sm font-medium text-[#07074D] dark:text-white"
                            >
                                High
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-4 flex-wrap">
                        <h3 className="w-full font-bold mb-3 dark:text-white">
                            Choose a color
                        </h3>
                        <input
                            type="color"
                            id="color_of_list"
                            name="color"
                            className="h-8 w-2/3 rounded"
                            defaultValue={todoColor}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-wrap my-5 justify-center">
                        <label
                            htmlFor="isCompleted"
                            className="w-full text-center mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                        >
                            Is it completed?
                        </label>
                        <input
                            type="checkbox"
                            name="isCompleted"
                            id="is_completed_list"
                            className="h-6 w-6"
                            checked={todoIsCompleted}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                        onClick={handleUpdateTodo}
                    >
                        Edit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateListPopup;
