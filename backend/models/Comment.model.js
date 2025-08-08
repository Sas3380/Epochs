import mongoose, {Schema} from "mongoose"

const commentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        required: true
    }, 
}, {timestamps: true})


exports.module = mongoose.model("Comment", commentSchema);


//comments --> article(many-one)
//comments -> user(many-one)