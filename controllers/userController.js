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
    //Create a new user
    async createUser(req, res) {
        try{
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //Update an existing user
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
    //Delete a user
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
    //Add a friend to a user
    async addFriend(req, res) {
        try{
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId }},
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
    //Remove a friend from a user
    async removeFriend(req, res) {
        try{
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true}
            );
            if(!user) {
                return res.status(404).json({ message: 'No Friend Found'});
            }
            const deleted = !user.friends.includes(req.body.friendId);
            if(deleted) {
                return res.json({ message: 'Friend has been removed.'});
            }
            return res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}