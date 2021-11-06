const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.get("/products/:id?", ProductController.get);
router.post("/products/create", ProductController.post);

module.exports = router;
