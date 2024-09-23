const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema({
  checkTime: { type: Timestamp, require: true },
  guardName: { type: String, require: true },
  checkPointId: { type: String, require: true },
  picture: { type: String, require: false },
  issues: { type: Boolean, require: true, default: false },
  details: { type: String, require: true },
});

const logs = mongoose.model("Logs", logsSchema);

module.exports = logs;
