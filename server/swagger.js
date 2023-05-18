const swaggerAutogen = require('swagger-autogen')({ openapi: "3.0.0", language: 'pl-PL', autoHeaders: false })
const outputFile     = './swagger-output.json'
const routesFiles = ['./routes/*']


const config = {
    apiAddress: "localhost:3001",
    swag_name : "TODO API",
    swag_desc : "Między bogiem a prawdą",
    swag_ver  : "2.1.0",
    schemes   : ['http', 'https']
}

const doc = {
    info: {
        version: config.swag_ver,
        title: config.swag_name,
        description: config.swag_desc,
        license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
            name: "TODO",
            url: "https://github.com/xSauron",
            email: "",
        },
    },
    host: config.apiAddress,
    basePath: "/",
    schemes: config.schemes,
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "TODO",
            "description": "."
        }

    ],
    securityDefinitions: {
        basicAuth: {
            type: 'http',
            scheme: 'basic'
        },
    },
}

swaggerAutogen(outputFile, routesFiles, doc)
