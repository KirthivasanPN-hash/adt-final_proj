const User = require("../models/user.models");
const bcryptjs = require("bcryptjs");

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10); // if the sync is not there there should await
  const newUser = new User({ username, email, password: hashedPassword }); // ES6 update that if we have same fields then we keep same key words
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    next(error); // we can have a custom error like this -> next(errorHandler(300, "Something went wrong"))
  }
};

module.exports = {
  signup,
};
