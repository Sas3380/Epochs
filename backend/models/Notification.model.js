import mongoose, {Schema} from "mongoose";

const notificationSchema = new Schema({
  recipient: { 
    type: Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  }, 
  sender: { 
    type: Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  }, 
  type: { 
    type: String, 
    enum: ["like", "comment", "follow", "new_post"], 
    required: true 
  },
  post: { 
    type: Schema.Types.ObjectId, 
    ref: "Post" 
  }, // Optional — e.g., for likes/comments on posts
  isRead: { 
    type: Boolean, 
    default: false 
  }
}, { timestamps: true });

exports.module = mongoose.model("Notification", notificationSchema);
