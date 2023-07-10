const { Thought, User, Reaction } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try{
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req,res){
        try{
            const thought = await Thought.findOne({ _id: req.params.thoughtId})
            res.json(thought)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addThought(req, res) {
        try{
            const thought = await Thought.create(req.body);
            res.status(201).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}