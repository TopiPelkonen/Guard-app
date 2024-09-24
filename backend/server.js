const dotenv = require("dotenv");
const { connectToDB } = require("./config/mongodb_config");
const express = require("express");
const cors = require("cors");

dotenv.config();
const User = require("./models/User");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
connectToDB();

//Routes
const userRoutes = require("./routes/user_routes");
app.use("/api/users", userRoutes);

//DB connection
app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error connecting to db");
  }
});

app.listen(port, () => {
  console.log("running..");
});
