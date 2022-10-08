const express = require("express")

const router = express.Router();

const users = [
    {
        id: 1,
        gender: "male",
        name: "Monir Hossain",
        contact: "01956306002",
        address: "Tongi, Gazipur",
        photoUrl: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"
    }
]

router.route("/")
.get((req, res) => {
    res.json(users)
})

module.exports = router;