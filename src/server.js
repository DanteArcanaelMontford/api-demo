const express = require("express");
const routes = require("./routes");
const db = require("./database");

const app = express();

db.connect();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

const port = process.env.port || 8090;
app.listen(port, console.log("Listening on port", port));
