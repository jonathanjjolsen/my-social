//Import mongoose packages
const { Schema, model } = require('mongoose');


const userModel = new Schema(
    {
       username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
       },
        email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function(v) {
              return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/.test(v);
            }}
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJson:{
            virtuals: true
        },
    }
);

//Retrieves the user's friends array by length and creates a virtual number, not to be stored in the DB.
userModel.virtual('friendCount').get(function(){
    return this.friends.length;
})

const User = model('User', userModel)
module.exports = User;