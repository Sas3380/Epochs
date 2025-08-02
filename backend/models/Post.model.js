import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true 
    },
    title: {
        type: String,
        required: true 
    },
    slug: {
        type: String,
        unique: true 
    },
    content: {
        type: String, 
        required: true 
    },
    tags: [String],
    likesCount: {
        type: Number,
        default: 0
    },
    commentsCount: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    coverImage: String 
},{timestamps: true});

exports.module = mongoose.model("Post", postSchema);