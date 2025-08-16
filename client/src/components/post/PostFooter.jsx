// PostFooter.jsx
import React from "react";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";

const PostFooter = ({ likes, comments, onLike, onComment, onShare }) => {
  return (
    <div className="flex justify-between items-center mt-4 text-gray-600 dark:text-gray-400">
      <button
        className="flex items-center gap-1 hover:text-blue-600"
        onClick={onLike}
      >
        <ThumbsUp size={18} /> {likes}
      </button>
      <button
        className="flex items-center gap-1 hover:text-blue-600"
        onClick={onComment}
      >
        <MessageCircle size={18} /> {comments}
      </button>
      <button
        className="flex items-center gap-1 hover:text-blue-600"
        onClick={onShare}
      >
        <Share2 size={18} /> Share
      </button>
    </div>
  );
};

export default PostFooter;
