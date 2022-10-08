let users = [
    {
        id: 1,
        gender: "male",
        name: "Monir Hossain",
        contact: "01956306002",
        address: "Tongi, Gazipur",
        photoUrl: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"
    }
]

module.exports.getAllUsers = (req, res) => {
    res.json(users)
}

module.exports.postAuser = (req, res) => {
    const user = req.body;
    users.push({
        ...user,
        id: users.length + 1,
    });
    res.json(users)
}

module.exports.getRandomUser = async (req, res) => {
    const random = req.params.random;
    const result = users.find(data => data.id == random);
    res.send(result)
}

module.exports.updateAUser = (req, res) => {
    const id = req.params.id;
    
    const updateFor = users.find(user => user.id == id);

    if(updateFor){
        updateFor.gender = req.body.gender;
        updateFor.name = req.body.name;
        updateFor.contact = req.body.contact;
    }

    res.send({message: "updated successfully"})
}

module.exports.deleteAuser = (req, res) => {
    const id = req.params.id;
    result = users.filter(user => user.id !== id)
    res.send({message: "deleted successfully"})
}