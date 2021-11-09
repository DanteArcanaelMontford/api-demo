const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const db = require("./database");

const app = express();

db.connect();

app.use(cors());

app.use(express.json());

app.use("/api", routes);

const port = process.env.port || 8091;
app.listen(port, console.log("Listening on port", port));
