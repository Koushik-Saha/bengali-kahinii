"use client";  // ✅ Add this at the top

import PostList from "../../components/PostList";
import {useEffect, useState} from "react";
import axios from "axios";
const MAX_DISPLAY = 5

export const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API_PATH || "http://127.0.0.1:5000";

export default function MainBlog() {

    const [dataPost, setDataPost] = useState<any>([]);

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

    return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="flex justify-start text-base leading-6 font-medium">
              {
                  dataPost && dataPost?.data?.length > 0 &&
                  <PostList posts={dataPost?.data || []} />
              }
          </div>
      </div>
    </>
  )
}
