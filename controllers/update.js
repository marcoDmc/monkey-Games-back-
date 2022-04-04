const User = require("../model/user");

const Method = {
  async update(req, res) {
    const { id, name, sobrenome } = req.body;

    if (!id || !name || !sobrenome) {
      res.status(401).json({ message: "let's see... something missing here" });
      return;
    }
    try {
      const user = await User.findByPk(id);

      const updateUser = await user.update(
        {
          name: name,
          sobrenome: sobrenome,
        },
        {
          where: { name: null, sobrenome: null },
        }
      );

      res.status(200).json(updateUser);
    } catch (error) {
      res
        .status(400)
        .json({ message: "something went wrong, could not update" });
    }
  },
};

module.exports = Method;
