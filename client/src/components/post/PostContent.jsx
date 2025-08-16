// PostContent.jsx
import React from "react";

const PostContent = ({ content, image }) => {
  return (
    <div className="mt-3 space-y-3">
      <p className="text-gray-800 dark:text-gray-200">{content}</p>
      {image && (
        <img
          src={image}
          alt="Post"
          className="rounded-xl max-h-96 w-full object-cover"
        />
      )}
    </div>
  );
};

export default PostContent;
