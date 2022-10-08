const express = require("express");
const { getAllUsers, postAuser, getRandomUser, updateAUser, deleteAuser } = require("../controller/users.controller");

const router = express.Router();


router.route("/all")
.get(getAllUsers)

router.route("/save")
.post(postAuser)

router.route("/delete/:id")
.delete(deleteAuser)

router.route("/:random")
.get(getRandomUser)

router.route("/update/:id")
.patch(updateAUser)

module.exports = router;