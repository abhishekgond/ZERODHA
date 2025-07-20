import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  mongoose
    .connect(URL)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
});
