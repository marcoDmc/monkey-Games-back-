const User = require("../model/user");

const Method = {
  async read(req, res) {
    try {
      const readUser = await User.findAll();

      res.status(200).json(readUser);
    } catch (e) {
      res.status(400).json({ message: "error unable to search for users." });
    }
  },
};

module.exports = Method;
