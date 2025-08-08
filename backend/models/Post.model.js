import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    title: {
        type: String,
        required: true 
    },
    slug: {//for seo friendly urls
        type: String,
        unique: true 
    },
    content: {
        type: String, 
        required: true 
    },
    tags: [{type: String}],
    likesCount: {
        type: Number,
        default: 0
    },
    commentsCount: {
        type: Number,
        default: 0
    },
    viewsCount: {
        type: Number,
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    coverImage: String,
},{timestamps: true});

exports.module = mongoose.model("Post", postSchema);

//article -> comments(one-many)
//article -> likes(same)
//article -> bookmarks(same)
//article-> user (one to one)