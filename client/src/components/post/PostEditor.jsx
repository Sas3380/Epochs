// PostEditor.jsx
import React, { useState } from "react";

const PostEditor = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    if (text.trim() === "" && !image) return;
    onSubmit({ content: text, image });
    setText("");
    setImage(null);
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-4 mb-6 max-w-2xl mx-auto">
      <textarea
        className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
        placeholder="What's on your mind?"
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex items-center justify-between mt-3">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="text-sm"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostEditor;
