// PostPage.jsx
import React, { useState } from "react";
import PostEditor from "./PostEditor";
import PostCard from "./PostCard";

const PostPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: { name: "Ali", avatar: "https://i.pravatar.cc/100?img=1" },
      date: "August 16, 2025",
      content: "This is my first post 🚀",
      image: "https://source.unsplash.com/random/800x400?tech",
      likes: 12,
      comments: 5,
    },
  ]);

  const handleNewPost = (newPost) => {
    setPosts([
      {
        id: Date.now(),
        author: { name: "Ali", avatar: "https://i.pravatar.cc/100?img=2" },
        date: "Just now",
        likes: 0,
        comments: 0,
        ...newPost,
      },
      ...posts,
    ]);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <PostEditor onSubmit={handleNewPost} />
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={() =>
            setPosts((prev) =>
              prev.map((p) =>
                p.id === post.id ? { ...p, likes: p.likes + 1 } : p
              )
            )
          }
          onComment={() => alert("Open comments modal")}
          onShare={() => alert("Post shared!")}
        />
      ))}
    </div>
  );
};

export default PostPage;
