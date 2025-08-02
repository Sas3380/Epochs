import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    username: {
        type: String, 
        required: true, 
        unique: true
    },
    email:{
        type: String, 
        required: true , 
        unique: true 
    },
    passwordHash: {
        type: String,
        required: true 
    },
    bio: {
        type: String,
    },
    avatarUrl: String, 
    socialLinks : {
        github: String, 
        X: String, 
        LinkedIn: String 
    }
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);