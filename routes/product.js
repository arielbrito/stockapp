const { createProduct, getProducts } = require("../controllers/productController");

const router = require("express").Router();


router.post("/", createProduct);

router.get("/", getProducts);

module.exports = router;
