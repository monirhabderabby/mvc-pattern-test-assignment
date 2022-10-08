const express = require("express");
const { getAllUsers, postAuser } = require("../controller/users.controller");

const router = express.Router();


router.route("/")
.get(getAllUsers)
.post(postAuser)

module.exports = router;