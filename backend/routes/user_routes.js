const express = require("express");

const {
  createUser,
  getUser,
  getPasscode,
} = require("../controllers/user_controllers");
const router = express.Router();

//public
router.post("/", createUser); //POST /api/users
router.get("/", getUser); //GET /api/users/:id
router.get("/:id", getPasscode); //GET /api/users/:id

module.exports = router;
