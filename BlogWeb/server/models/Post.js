const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minLength: [10, 'limit exceeded'],
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
        minLength: [10, 'limit exceeded'],
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true,
    },
    tags: {
        type: [String],
        default: [],

    },

},
{ timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;