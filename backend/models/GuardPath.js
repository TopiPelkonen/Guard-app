const mongoose = require("mongoose");

const guardPathSchema = new mongoose.Schema({
  coordinates: { type: Array, require: true },
  pathDesc: { type: Array, require: true },
});

const guardPath = mongoose.model("User", guardPathSchema);

module.exports = guardPath;
