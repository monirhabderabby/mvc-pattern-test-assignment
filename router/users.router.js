const express = require("express");
const { getAllUsers, postAuser, getRandomUser } = require("../controller/users.controller");

const router = express.Router();


router.route("/all")
.get(getAllUsers)

router.route("/save")
.post(postAuser)

router.route("/:random")
.get(getRandomUser)

module.exports = router;