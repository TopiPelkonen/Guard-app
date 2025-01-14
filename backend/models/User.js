const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false, required: false },
  passcode: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
