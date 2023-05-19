/* USE "NPM START" TO START SERVER */
/* USE "NPM RUN DEV" TO START SERVER IN DEV MODE */
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const fs = require("fs");
const path = require("path");

/* INITIATE EXPRESS */
const app = express();

/* Settings */
const host = process.env.APP_HOST || "localhost";
const port = process.env.APP_PORT || 3001;

/* USE */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/* REGISTER ROUTES */
var routesPath = __dirname + "/routes/";
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});
  
fs.readdirSync(routesPath).forEach(function(file) {
    const filePath = path.join(routesPath, file);
    const route = require(filePath);
  
    app.use('/', route);
});


/* UNKNOWN ROUTE */
app.all('*', (req, res) => {
    res.status(404).json({
        status: "error",
        message: `There is no such endpoint.`
    });
});
  

/* LISTEN */
app.listen(port, () => {
    console.log(`App is ready! \nWebAPI ready and listening on port http://${host}:${port}`);
});
