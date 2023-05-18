const express = require("express");

const router = express.Router();

router.get("/todo/ping", (req, res) => {
    /*
    #swagger.tags = ['TODO']
    #swagger.description = 'Zwraca pong.'
    #swagger.security = [{
        "basicAuth": []
    }]
    */
    res.json({ response: "pong" });
});

module.exports = router;