const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.listen(4000, () => {
    console.log('Listening on 4005');
});

/* USE "NPM START" TO START SERVER */