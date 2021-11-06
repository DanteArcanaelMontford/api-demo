const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.get("/products/:id?", ProductController.get);

module.exports = router;
