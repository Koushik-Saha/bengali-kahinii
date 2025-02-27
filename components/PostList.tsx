import React from "react";
import { Post } from "../types/Post";  // Ensure the Post type is correctly imported
import {FaFolder, FaComment, FaTag} from "react-icons/fa";


// ✅ Define props interface
interface PostListProps {
    posts: Post[];  // Ensure posts is an array of Post objects
}

// ✅ Apply props type in the component
const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <div className="max-w-6xl p-4 space-y-6">
            {posts.map((post: Post, index: number) => (
                <div key={index} className="bg-green-100 p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <h2 className="text-xl font-bold text-green-700">{post.title}</h2>
                    <p className="text-gray-600 text-sm mt-2">
                        by <span className="font-semibold">{post.author}</span> • {post.date} • 👁 {post.views}
                    </p>
                    <p className="mt-2 text-gray-800">{post.subtitle}</p>
                    <p className="text-sm text-gray-500 mt-2">
                        <span className="inline-flex items-center"><FaFolder className="mr-2" /> {post.category} </span>
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        <span className="inline-flex items-center"><FaTag className="mr-2" /> {post.tags.join(", ")}</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        <span className="inline-flex items-center"><FaComment className="mr-2" /> {post.comments} Leave a Comments</span>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
