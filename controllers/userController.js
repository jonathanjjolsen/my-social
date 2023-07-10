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
        console.log(req)
        try{
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try{
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true },
            );

            if(!user) {
                res.status(404).json({ message: 'No user with this ID currently exists.'})
            }
            res.json(user)
        } catch(err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try{
            const user = await User.findOneAndDelete({ _id: req.params.userId});

            if(!user) {
                res.status(404).json({ message: 'No user with that ID'});
            }
            res.json({ message: 'User deleted.' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addFriend(req, res) {
        try{
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.body.friendId || req.params.friendId }},
                { new: true}
            )
            if(!user) {
                res.status(404).json({ message: 'No user with that ID'});
            }
            res.json({ message: 'Friend Added'})
        } catch (err) {
            res.status(500).json(err);
        }
    },
}