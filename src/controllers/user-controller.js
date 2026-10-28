
const { ValidSum } = require('../function');
const User = require('../model/user-model')

// Handler для обработки урла
const getUsers = async (req, res) => {
    let users;
    if(req.params.id) {
        users = await User.findById(req.params.id)
    } else {
        users = await User.find()
    }
    res.send(users)
}

// Handler для обработки урла
const addUser = async (req, res) => {
    const users = await User.create(req.body)
    res.send(users)
}

module.exports = {
    getUsers,
    addUser,
    addBalance
}