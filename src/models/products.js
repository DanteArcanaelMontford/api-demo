const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Model = mongoose.model("products", productSchema);

// const product1 = new Model({
//   name: "Product2",
//   brand: "Brand3",
//   price: 49.9,
// });

// product1.save((err) => {
//   if (err) {
//     console.error("Error:", err);
//   }
// });

module.exports = Model;
