import mongoose, {Schema} from "mongoose";

const tagSchema = new Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
  },
  slug: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true 
  },
  description: { 
    type: String, 
    default: "" 
  }
}, { timestamps: true });

// Ensure case-insensitive uniqueness
tagSchema.index({ name: 1 }, { unique: true });
tagSchema.index({ slug: 1 }, { unique: true });

export default mongoose.model("Tag", tagSchema);
