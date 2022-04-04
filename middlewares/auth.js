const jwt = require("jsonwebtoken");
require("dotenv").config();

const middlewares = {
  async auth(req, res, next) {
    const Authorization = await req.headers.authorization;

    const auth = Authorization.split(" ");
    const [Bearer, token] = auth;

    if (!Authorization) {
      res.status(401).json({ message: "something is missing" });
      return;
    }

    if (!/^Bearer$/.exec(Bearer)) {
      res.status(400).json({ message: "token invalid" });
      return;
    }
    if (!auth.length === 2) {
      res.status(400).json({ message: "token invalid format" });
      return;
    }

    try {
      await jwt.verify(token, process.env.SECRET, (error) => {
        error && res.status(400).json({ message: "token incorrect" });
      });

      res.status(200).json({ message: "successful access" });
    } catch (error) {
      res.status(400).json({ message: "successful access" });
    }
    next();
  },
};
module.exports = middlewares;
