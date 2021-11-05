const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  brand: {
    type: Number,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Model = mongoose.model("products", productSchema);

module.exports = Model;
