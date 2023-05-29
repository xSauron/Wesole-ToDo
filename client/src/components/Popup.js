import { React, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';

const Popup = ({ onClose }) => {
    const [selectedOption, setSelectedOption] = useState('low');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center text-black dark:text-white backdrop-blur">
            <div className="bg-white dark:bg-gray-800 w-5/6 sm:w-3/6 sm:h-4/5 md:w-3/6 md:h-4/5 lg:w-2/6 p-4 rounded shadow-md overflow-auto">
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold">Popup Content</h2>
                    <TfiClose className="cursor-pointer text-2xl text-black dark:text-white" onClick={onClose} />
                </div>
                <form>
                    <div className="my-5">
                        <label
                            htmlFor="list_name"
                            className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                        >
                            List name
                        </label>
                        <input
                            type="text"
                            name="list_name"
                            id="name_of_list"
                            placeholder="List Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white dark:bg-gray-700 py-2 px-6 text-base font-medium text-[#6B7280] dark:text-gray-300 outline-none focus:border-[#6A64F1] focus:shadow-md dark:focus:border-[#6A64F1] dark:focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="list_description"
                            className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                        >
                            List Description
                        </label>
                        <textarea
                            rows="2"
                            name="list_description"
                            id="description_of_list"
                            placeholder="List Description"
                            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white dark:bg-gray-700 py-2 px-6 text-base font-medium text-[#6B7280] dark:text-gray-300 outline-none focus:border-[#6A64F1] focus:shadow-md dark:focus:border-[#6A64F1] dark:focus:shadow-md"
                        ></textarea>
                    </div>
                    <div className="my-5">
                        <label
                            htmlFor="list_datetime"
                            className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                        >
                            Date and Time
                        </label>
                        <input
                            type="datetime-local"
                            name="list_datetime"
                            id="datetime_of_list"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white dark:bg-gray-700 py-2 px-6 text-base font-medium text-[#6B7280] dark:text-white outline-none focus:border-[#6A64F1] focus:shadow-md dark:focus:border-[#6A64F1] dark:focus:shadow-md"
                        />
                    </div>
                    <div className="my-5">
                        <label
                            htmlFor="list_localization"
                            className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                        >
                            Localization
                        </label>
                        <input
                            type="text"
                            name="list_localization"
                            id="localization_of_list"
                            placeholder="List Localization"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white dark:bg-gray-700 py-2 px-6 text-base font-medium text-[#6B7280] dark:text-gray-300 outline-none focus:border-[#6A64F1] focus:shadow-md dark:focus:border-[#6A64F1] dark:focus:shadow-md"
                        />
                    </div>
                    <div className="flex justify-around flex-wrap">
                        <h3 className="w-full font-bold mb-3 dark:text-white">Importance</h3>
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
                        <h3 className="w-full font-bold mb-3 dark:text-white">Choose a color</h3>
                        <input type="color" className="h-8 w-2/3 rounded" />
                    </div>
                    <button className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Add New List
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Popup;