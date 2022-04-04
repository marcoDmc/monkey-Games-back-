const User = require("../model/user");
const bcrypt = require("bcrypt");
const generatingToken = require("../utils/jwt");

const Method = {
  async signup(req, res) {
    const { firstname, lastname, email, password } = req.body;

    try {
      if (!email || !password) {
        return res.status(400).json({ error: "something is missing " });
      }
      const compareEmail = await User.findOne({ where: { email: email } });
      if (compareEmail) {
        return res.status(400).json({ error: "this user already exists " });
      }
      const passwordHash = await bcrypt.hash(password, 8);
      const user = await User.create({
        firstname,
        lastname,
        email,
        password: passwordHash,
      });

      user.password = undefined;

      return res
        .status(200)
        .json({ user, token: generatingToken({ id: user.id }) });
    } catch (error) {
      return res.status(400).json({ error: "could not create user " });
    }
  },
  async signin(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });
    if (!user) return res.status(400).json("user does not exist ");

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json("incorrect password ");
    }

    user.password = undefined;

    return res
      .status(200)
      .json({ user, token: generatingToken({ id: user.id }) });
  },
};

module.exports = Method;
