require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    app.listen(PORT, () => {
      console.log("Server running on port", PORT);
    });
    console.log("conexion exitosa a la base de datos");
  })
  .catch((err) => console.log("error", err));

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: Number,
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.post("/api/v1/products", (req, res, next) => {
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then((result) => {
      res.status(201).json({ ok: true });
    })
    .catch((err) => console.log(err));
});
