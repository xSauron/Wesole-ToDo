import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Update with your API base URL

const api = axios.create({
    baseURL: API_BASE_URL,
});

// Get all todos
export const getAllTodos = async () => {
    try {
        const response = await api.get('/todo/');
        return response.data.todos;
    } catch (error) {
        console.error('Error while retrieving todos:', error);
        throw error;
    }
};

// Create a todo
export const createTodo = async (todoData) => {
    try {
        const response = await api.post('/todo/', todoData);
        return response.data.todo;
    } catch (error) {
        console.error('Error while creating todo:', error);
        throw error;
    }
};

// Get a todo by ID
export const getTodoById = async (id) => {
    try {
        const response = await api.get(`/todo/${id}`);
        return response.data.todo;
    } catch (error) {
        console.error('Error while retrieving todo:', error);
        throw error;
    }
};

// Update a todo
export const updateTodo = async (id, todoData) => {
    try {
        const response = await api.put(`/todo/${id}`, todoData);
        return response.data.todo;
    } catch (error) {
        console.error('Error while updating todo:', error);
        throw error;
    }
};

// Delete a todo
export const deleteTodo = async (id) => {
    try {
        const response = await api.delete(`/todo/${id}`);
        return response.data.todo;
    } catch (error) {
        console.error('Error while deleting todo:', error);
        throw error;
    }
};
