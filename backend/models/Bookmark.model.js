import mongoose, {Schema} from "mongoose";

const bookmarkSchema = newSchema({
  post: { 
    type: Schema.Types.ObjectId, 
    ref: "Post", 
    required: true 
  },
  user: { 
    type: Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
}, { timestamps: true });


bookmarkSchema.index({ post: 1, user: 1 }, { unique: true });

exports.module = mongoose.model("Bookmark", bookmarkSchema);
