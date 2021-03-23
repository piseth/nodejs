// https://github.com/CrackiGuy/node-restapi

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//* Config file
const config = require("./config.json");

//* Helper
const {colorLog} = require("./helper/console.js");

//* App Created
const app = express();

//* App using modules
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//* Routes
app.get("/", (req, res) => {
    res.json({ message: `Welcome to ${config.app_name}` });
});
require("./routes/routes.js")(app);

//* App running
app.listen(config.app_port, () => colorLog(`API server running at port : ${config.app_port}`,'success'));
