const User = require("..models/User");
const bcrypt = require("bcrypt.js"); //hashing

//POST
exports.createUser = async (req, res) => {
  try {
    const { name, password, passcode } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      name,
      hashedPassword,
      passcode,
    });

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to create a new user" });
  }
};

//GET
exports.getUser = async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ name: name });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid password" });
    }
    res.status(200).json({
      message: "Login successfull",
      user: {
        id: user._id,
        name: user.name,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve user", error: error.message });
  }
};

//GET Passcode
exports.getPasscode = async (req, res) => {
  try {
    const { name, passcode } = req.body;
    const user = await User.findOne({ name: name });
    const isPasscodeCorrect = await compare(passcode, user.passcode);
    if (!isPasscodeCorrect) {
      return res.status(401).json({ message: "Invalid passcode" });
    }
    res.status(200).json({ message: "Passcode OK" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve user", error: error.message });
  }
};

