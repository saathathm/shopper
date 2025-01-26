const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const products = require("./routes/products");
const app = express();
const { connectDB } = require("./config/db");
dotenv.config({ path: "./config/config.env" });
const cors = require("cors");

connectDB();

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/products", products);

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

const PORT = process.env.PORT || 8006;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
