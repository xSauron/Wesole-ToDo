const TodoItem = require('../models/todo-model.js');

exports.getAllTodos = (req, res, next) => {
    TodoItem.find()
        .then((todos) => {
            res.status(200).json({
                message: "Successfully retrieved all ToDo items",
                error: false,
                todos: todos
            });
        })
        .catch((error) => {
            console.error("Error retrieving todo:", error);
            res.status(500).json({
                message: "Failed to retrieve ToDo items",
                error: true
            });
        });
};

exports.createTodo = (req, res, next) => {
    const { title, description, dateTime, localization, color, importance, isCompleted } = req.body;

    const todoItem = new TodoItem({
        title,
        description,
        dateTime,
        localization,
        color,
        importance,
        isCompleted
    });

    todoItem.save()
        .then((createdTodo) => {
            res.status(200).json({
                message: "ToDo item created successfully",
                error: false,
                todo: createdTodo
            });
        })
        .catch((error) => {
            console.error("Error retrieving todo:", error);
            res.status(500).json({
                message: "Failed to create ToDo item",
                error: true
            });
        });
};

exports.getTodo = (req, res, next) => {
    const todoId = req.params.id;

    if (!todoId) {
        return res.status(400).json({ message: "Todo ID is required", error: true });
    }

    TodoItem.findById(todoId)
        .then((todo) => {
            if (!todo) {
                return res.status(404).json({ message: "Todo not found", error: true });
            }

            return res.json({error: false, todo});
        })
        .catch((error) => {
            console.error("Error retrieving todo:", error);
            return res.status(500).json({ message: "Failed to retrieve todo", error: true });
        });
};

exports.updateTodo = (req, res, next) => {
    const todoId = req.params.id;

    if (!todoId) {
        return res.status(400).json({ message: "Todo ID is required", error: true  });
    }

    const updatedData = req.body;

    TodoItem.findByIdAndUpdate(todoId, updatedData, { new: true })
        .then((updatedTodo) => {
            if (!updatedTodo) {
                return res.status(404).json({ message: "Todo not found", error: true });
            }

            return res.json({error: false, updatedData});
        })
        .catch((error) => {
            console.error("Error updating todo:", error);
            return res.status(500).json({ error: "Failed to update todo" });
        });
};

exports.deleteTodo = (req, res, next) => {
    const todoId = req.params.id;

    if (!todoId) {
        return res.status(400).json({ message: "Todo ID is required", error: true });
    }

    TodoItem.findByIdAndDelete(todoId)
        .then((deletedTodo) => {
            if (!deletedTodo) {
                return res.status(404).json({ message: "Todo not found", error: true });
            }

            return res.json({ error: false, message: "Todo deleted successfully" });
        })
        .catch((error) => {
            console.error("Error deleting todo:", error);
            return res.status(500).json({ message: "Failed to delete todo", error: true });
        });
};