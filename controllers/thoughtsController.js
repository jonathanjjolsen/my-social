const { Thought, User, Reaction } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
            res.json(thought)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.status(201).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true },
            );
            if(!thought) {
                res.status(404).json({ message: 'No thought with this ID.'})
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try{
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId});
            if(!thought) {
                res.status(404).json({ message: 'No thought with that ID'});
            }
            res.json({ message: 'Thought Deleted'})
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
