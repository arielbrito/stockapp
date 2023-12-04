require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dbConnect = require("./db");
const productRouter = require("./routes/product");

const app = express();

dbConnect(app); //Conectar base de datos
app.use(cors());

app.use(express.json());

app.use("/api/v1/products", productRouter);
