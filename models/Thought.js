const { Schema, model } = require('mongoose');
const reactionModel = require('./Reaction')

const thoughtModel = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            maxlength: 280,
            minlenght: 1,
        },

        //Creates a time stamp with a default value of the current date/time
        createdAt:{
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleString(),
        },

        username:{
            type: String,
            required: true,
        },
        
        reactions:[reactionModel],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
)

const Thought = model('Thought', thoughtModel);

module.exports = Thought;