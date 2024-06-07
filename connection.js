require("dotenv").config(); // Load environment variables from .env file

const mongoose = require("mongoose");

// Use the MONGO_URI environment variable for the MongoDB connection string
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
