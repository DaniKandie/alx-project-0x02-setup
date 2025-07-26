// pages/home.tsx

import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type PostProps } from "@/interfaces";

const HomePage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: PostProps) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Add New Post
      </button>

      <div className="grid gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default HomePage;
