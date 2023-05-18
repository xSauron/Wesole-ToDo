const express = require("express");
const path = require("path");

const router = express.Router();

/* SWAGGER - API DOCS */ 
var swaggerUi   = require("swagger-ui-express")
var { SwaggerTheme } = require("swagger-themes")
var swaggerFile = require("../swagger-output.json");

var swag_theme = new SwaggerTheme('v3')
var swag_opts  = {
  explorer: false,
  customCss: swag_theme.getBuffer('dark')
}

router.use("/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile, swag_opts)
)
  
module.exports = router;