const express = require("express");
const routes = require("./routes");

const app = express();

app.use("/api", routes);

const port = process.env.port || 8090;
app.listen(port, console.log("Listening on port", port));
