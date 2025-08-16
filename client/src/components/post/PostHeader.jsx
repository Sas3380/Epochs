// PostHeader.jsx
import React from "react";

const PostHeader = ({ author, date }) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={author.avatar}
        alt={author.name}
        className="w-10 h-10 rounded-full"
      />
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">
          {author.name}
        </h4>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default PostHeader;
