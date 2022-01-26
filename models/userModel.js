const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A user must have a name"]
    },
    handle: {
        type: String,
    }
})

const User = mongoose.model('users', UserSchema)

module.exports = User;