import mongoose, {Schema} from "mongoose";

const followerSchema = new Schema({
    follower: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, 
    following: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true, 
    },
}, {timestamps: true});

exports.module = mongoose.model("Follower", followerSchema);