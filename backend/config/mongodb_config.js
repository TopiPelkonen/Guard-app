require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const connectToDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB via Mongoose");
  } catch (error) {
    console.error("Failed to connect to DB", error);
    process.exit(1);
  }
};

module.exports = { connectToDB };
