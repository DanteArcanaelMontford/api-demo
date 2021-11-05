const mongoose = require("mongoose");

function connect() {
  const dbName = "api-demo";

  mongoose.connect(
    `mongodb://root:1234@localhost:27017/${dbName}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`
  );

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("Connected to mongodb");
  });

  db.on("error", console.error.bind(console, "Database error: "));
}

module.exports = {
  connect,
};
