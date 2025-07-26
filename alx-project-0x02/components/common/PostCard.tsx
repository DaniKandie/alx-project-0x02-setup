// components/common/PostCard.tsx

import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <span className="text-sm text-gray-500">Posted by User {userId}</span>
    </div>
  );
};

export default PostCard;
