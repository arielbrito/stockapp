const Product = require("../models/product");

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({ ok: true, data: products });
  } catch (error) {
    res.status(404).json({ ok: false, message: error });
  }
};

const createProduct = (req, res, next) => {
  console.log({ body: req.body });
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then((result) => {
      res.status(201).json({ ok: true });
    })
    .catch((err) => console.log(err));
};

module.exports = {getProducts, createProduct}