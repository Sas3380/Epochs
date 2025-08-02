import mongoose from "mongoose";

const viewSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Post',
        required: true
    },
    viewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    viewIp: String, 
    userAgent: String, 
    createdAt: {
        type: Date, 
        default: Date.now 
    }
});

exports.module = mongoose.model("View", viewSchema);