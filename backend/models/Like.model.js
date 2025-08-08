import mongoose, {Schema} from "mongoose";

const likeSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

})

exports.module = mongoose.model("Like", likeSchema)


// Many Likes → one Article
// Many Likes → one User