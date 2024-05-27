const express = require("express");
const app = express();
const mysqlDb = require("./config/db");
const route = require("./router/router");
app.use(route);
app.listen(3000, () => {
    console.log("server is running on port 3000");
})