const express = require("express");
const { getAllUsers, postAuser, getRandomUser } = require("../controller/users.controller");

const router = express.Router();


router.route("/")
.get(getAllUsers)
.post(postAuser)

router.route("/:random")
.get(getRandomUser)

module.exports = router;