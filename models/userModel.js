const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A user must have a name"]
    },
    handle: {
        type: String,
        required: [true, 'A user must have a handle']
    },
    followers: {
        type: Number,
        default: 0
    },
    following: {
        type: Number,
        default: 0
    },
    pfp: {
        type: String,
        default: "https://i.pinimg.com/originals/1c/51/90/1c5190da53e99bd9599eb44145ce1f47.jpg"
    },
    header: {
        type: String,
        default: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_341/https://blog.snappa.com/wp-content/uploads/2020/01/Best-Twitter-Header-Image-Size-1024x341.jpg"
    },
    bio: String,
    location: String,
})

const User = mongoose.model('users', UserSchema)

module.exports = User;

// user: {
//     username: john,
//     handle: @john,
//     followers: 12,
//     following: 12,
//     pfp: "string",
//     header: "string",
//     bio: "string",
//     location: "swerrasdwa",
//     posts: [{id: asdwasdw, id:wasdwda }
//         { 
//           text: "dwahbsdwad",
//           media: "string",
//           likes: 12,
//           retweets: 14,
//           comments: [{}]
//         }
//     ]
// }