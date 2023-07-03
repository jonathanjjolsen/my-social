const { User } = require('../models');

module.exports = {
    //Get all users
    async getUsers(req, res) {
        try{
            const users = await User.find();
            res.json(users);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    //Get a single user
    async getSingleUser(req, res){
        try{
            const user = await User.findOne({_id: req.params.userId}).select('-__v');
            res.json(user)
        } catch(err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try{
            const user = await countReset.create(req, res);
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }
}