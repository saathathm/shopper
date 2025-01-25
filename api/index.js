const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const products = require('./routes/products');
const app = express();
const { connectDB } = require('./config/db');
dotenv.config({ path: './config/config.env' });
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use('/api/products', products)



mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

app.listen(8800, () => {
    connectDB();
    console.log("Connected to backend!");
});