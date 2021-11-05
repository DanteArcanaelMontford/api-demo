const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.get("/products", ProductController.get);

module.exports = router;
