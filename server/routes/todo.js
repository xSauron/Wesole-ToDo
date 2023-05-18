const express = require("express");

const router = express.Router();

router.get("/todo", (req, res) => {
    /*
    #swagger.tags = ['TODO']
    #swagger.description = 'Zwraca hello world.'
    #swagger.security = [{
        "basicAuth": []
    }]
    */
    res.send("Hello, World!");
});

module.exports = router;