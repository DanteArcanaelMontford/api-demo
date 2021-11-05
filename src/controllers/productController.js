const ProductsModel = require("../models/products");

function get(req, res) {
  res.send({
    working: true,
  });
}

module.exports = {
  get,
};
