const ProductsModel = require("../models/products");

async function get(req, res) {
  const { id } = req.params;

  const obj = id ? { _id: id } : null || {};

  const products = await ProductsModel.find(obj);

  res.send(products);
}

async function post(req, res) {
  const { name, brand, price } = await req.body;

  const createProduct = new ProductsModel({
    name,
    brand,
    price,
  });

  createProduct.save((err) => {
    if (err) {
      console.error("Error while try to create product:", err);
      return;
    }
  });

  res.send({
    created: true,
  });
}

module.exports = {
  get,
  post,
};
