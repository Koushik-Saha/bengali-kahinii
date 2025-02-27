import React, {useEffect, useState} from "react";
import posts from "../constants/posts.json";
import { Post } from "../types/Post";
import axios from "axios";

const PostList: React.FC = () => {


    return (
        <div className="max-w-4xl p-4 space-y-6">
            {posts.map((post: Post, index: number) => (
                <div
                    key={index}
                    className="bg-green-100 p-6 rounded-lg shadow-md border-l-4 border-green-500"
                >
                    <h2 className="text-xl font-bold text-green-700">{post.title}</h2>
                    <p className="text-gray-600 text-sm">
                        by <span className="font-semibold">{post.author}</span> • {post.date} • 👁 {post.views}
                    </p>
                    <p className="mt-2 text-gray-800">{post.excerpt}</p>
                    <p className="text-sm text-gray-500 mt-2">
                        📂 {post.category}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        💬 {post.comments} Comments
                    </p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
