"use client";  // ✅ Add this at the top

import PostList from "../../components/PostList";
import {useEffect, useState} from "react";
import axios from "axios";
const MAX_DISPLAY = 5

export const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API_PATH || "http://127.0.0.1:5000";

export default function MainBlog() {

    const [dataPost, setDataPost] = useState([]);

    console.log("Base API URL:", API_BASE_URL);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/get-posts`, {
                    params: {
                        page: 1,
                        limit: 15
                    }
                });
                setDataPost(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    console.log("dataPost", dataPost)

    let posts = [
        {
            "title": "অনন্যার ঋণ শোধ — পর্ব ২",
            "author": "defoe",
            "date": "26-02-2025",
            "views": 3,
            "excerpt": "স্বামী টাকা ধার নিয়েছিল এক চায়ের মহাজনের থেকে। কিন্তু সুদে আসলে তা শোধ দিতে হচ্ছে তার নিরীহ, রূপসী স্ত্রীকে।",
            "category": "গৃহবধূর চন্দন কাহিনী",
            "comments": 0,
            slug: "",
            summary: "",
            tags: "",
        },
        {
            "title": "আমার বৌয়ের প্রথম ম্যাসাজ ২ - সফট কাকউড",
            "author": "subho__9798",
            "date": "26-02-2025",
            "views": 100,
            "excerpt": "বৌয়ের রগরগে ম্যাসাজের গল্পঃ কিন্তু একজন মধ্য বয়স্ক বাবার বয়সী লোক আমার কচি বউকে ইলেক মতন উপভোগ করলো।",
            "category": "স্বামী স্ত্রী বাংলা চটি গল্প",
            "comments": 0,
            slug: "",
            summary: "",
            tags: "",
        }
    ]

    return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="flex justify-start text-base leading-6 font-medium">
              <PostList />
          </div>
      </div>
    </>
  )
}
