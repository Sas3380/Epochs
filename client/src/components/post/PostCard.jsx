// PostCard.jsx
import React from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";

const PostCard = ({ post, onLike, onComment, onShare }) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-4 mb-6 w-full max-w-2xl mx-auto">
      <PostHeader author={post.author} date={post.date} />
      <PostContent content={post.content} image={post.image} />
      <PostFooter
        likes={post.likes}
        comments={post.comments}
        onLike={onLike}
        onComment={onComment}
        onShare={onShare}
      />
    </div>
  );
};

export default PostCard;
