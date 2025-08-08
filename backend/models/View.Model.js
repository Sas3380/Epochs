import mongoose,{Schema} from "mongoose";

const viewSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId, 
        ref: 'Post',
        required: true
    },
    viewer: {
        type: Schema.Types.ObjectId,
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