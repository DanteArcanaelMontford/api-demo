const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.get("/products/:id?", ProductController.get);
router.post("/products/create", ProductController.post);
router.put("/products/update/:id", ProductController.put);

module.exports = router;
