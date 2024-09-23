const dotenv = require("dotenv");
const { connectToDB } = require("./config/mongodb_config");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

dotenv.config();

//Routes
const userRoutes = require("./routes/user_routes");
app.use("/api/users", productRoutes);

//DB connection
app.get("/", async (req, res) => {
  try {
    const db = await connectToDB();
    const collection = db.collection("users");
    const documents = await collection.find().toArray();
    res.json(documents);
  } catch (error) {
    res.status(500).send("Error connecting to db");
  }
});

app.listen(port, () => {
  console.log("running..");
});
