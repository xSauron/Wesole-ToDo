const express = require('express');
const m2s = require('mongoose-to-swagger');
const todoSchema = require('../models/todo-model.js');

const router = express.Router();

router.get('/swagger-schema', (req, res) => {
    /*
    #swagger.tags = ['UTIL']
    #swagger.summary = 'Get schema'
    #swagger.description = 'Endpoint to retrieve schema.'
    #swagger.security = [{ "basicAuth": [] }]
    */
  try {
    const swaggerSchema = m2s(todoSchema);

    res.status(200).json(swaggerSchema);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate Swagger schema' });
  }
});

module.exports = router;