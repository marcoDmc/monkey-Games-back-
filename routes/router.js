const express = require("express");
const router = express.Router();
const methodGet = require("../controllers/read");
const methodPost = require("../controllers/create");
const methodPut = require("../controllers/update");
const middleware = require("../middlewares/auth");




router.get("/", methodGet.read);
router.post("/account/signup", methodPost.signup);
router.post("/account/signin", methodPost.signin);
router.put("/account/update/user/:id", methodPut.update);

module.exports = router;
