const { Schema, Types } = require('mongoose');

const reactionModel = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },

        username: {
            type: String,
            required: true,
        },
        
        //Creates a time stamp with a default value of the current date/time
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleString,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);


module.exports = reactionModel;