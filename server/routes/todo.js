const express = require("express");
const todoHandler = require("../controllers/todo-handler.js");
const router = express.Router();

router.get("/todo/ping", (req, res) => {
    /*
    #swagger.tags = ['TODO']
    #swagger.summary = 'Respond with pong'
    #swagger.description = 'Respond with pong.'
    #swagger.security = [{ "basicAuth": [] }]
    */
    res.json({ response: "pong" });
});

router.get("/todo/", (req, res) => {
    /*
    #swagger.tags = ['TODO']
    #swagger.summary = 'Get all todos'
    #swagger.description = 'Endpoint to retrieve all todos.'
    #swagger.security = [{ "basicAuth": [] }]
    
    #swagger.responses[200] = {
        schema: {
            message: 'string',
            error: 'boolean',
            todos: 'object'
        }
    }
    #swagger.responses[500] = {
        schema: {
            message: 'string',
            error: 'boolean'
        }
    }
    */
    todoHandler.getAllTodos(req, res);
});

router.post("/todo/", (req, res) => {
    /* 
    #swagger.tags = ['TODO']
    #swagger.summary = 'Create a todo'
    #swagger.description = 'Endpoint to create a new todo.'
    #swagger.security = [{ "basicAuth": [] }]
    
    #swagger.responses[200] = {
        schema: {
            message: 'string',
            error: 'boolean',
            todo: 'object'
        }
    }
    #swagger.responses[500] = {
        schema: {
            message: 'string',
            error: 'boolean'
        }
    }
    */
    todoHandler.createTodo(req, res);
});

router.get("/todo/:id", (req, res) => {
    /*
    #swagger.tags = ['TODO']
    #swagger.summary = 'Get a todo by ID'
    #swagger.description = 'Endpoint to retrieve a todo by its ID.'
    #swagger.security = [{ "basicAuth": [] }]
    #swagger.parameters['id'] = { description: 'ID of the todo', type: 'string', in: 'path', required: true }
    
    #swagger.responses[200] = {
        schema: {
            error: 'boolean',
            todo: 'object'
        },
    }
    #swagger.responses[400] = {
        schema: {
            message: 'string',
            error: 'boolean'
        }
    }
    #swagger.responses[404] = {
        schema: {
            message: 'string',
            error: 'boolean'
        }
    }
    #swagger.responses[500] = {
        schema: {
            message: 'string',
            error: 'boolean'
        }
    }
    */
    todoHandler.getTodo(req, res);
});

router.put("/todo/:id", (req, res) => {
    /* 
    #swagger.tags = ['TODO']
    #swagger.summary = 'Update a todo'
    #swagger.description = 'Endpoint to update a todo.'
    #swagger.security = [{ "basicAuth": [] }]
    #swagger.parameters['id'] = { description: 'ID of the todo', type: 'string', in: 'path', required: true }
    
    #swagger.responses[200] = {
        schema: {
            error: 'boolean',
            todo: 'object'
        }
    }
    #swagger.responses[400] = {
        schema: {
            message: 'string',
            error: 'boolean'
        }
    }
    #swagger.responses[404] = {
        schema: {
            message: 'string',
            error: 'boolean'
        }
    }
    #swagger.responses[500] = {
        schema: {
            message: 'string',
            error: 'boolean'
        }
    }
    */
    todoHandler.updateTodo(req, res);
});

router.delete("/todo/:id", (req, res) => {
    /* 
    #swagger.tags = ['TODO']
    #swagger.summary = 'Delete a todo'
    #swagger.description = 'Endpoint to delete a todo.'
    #swagger.security = [{ "basicAuth": [] }]
    #swagger.parameters['id'] = { description: 'ID of the todo', type: 'string', in: 'path', required: true }
    
    #swagger.responses[200] = {
        schema: {
            error: 'boolean',
            message: 'string'
        }
    }
    #swagger.responses[400] = {
        schema: {
            message: 'string',
            error: 'boolean'
        }
    }
    #swagger.responses[404] = {
        schema: {
            message: 'string',
            error: 'boolean'
        }
    }
    #swagger.responses[500] = {
        schema: {
            message: 'string',
            error: 'boolean'
        }
    }
    */
    todoHandler.deleteTodo(req, res);
});

module.exports = router;