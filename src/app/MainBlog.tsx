"use client";

import PostList from "../../components/PostList";
import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "../../components/Pagination";
import {useSearchParams, useRouter, usePathname} from "next/navigation";

export const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API_PATH || "http://127.0.0.1:5000";

export default function MainBlog() {
    const searchParams = useSearchParams();  // ✅ Replace useRouter()
    const router = useRouter();
    const pathname = usePathname(); // ✅ Helps update URL

    const [dataPost, setDataPost] = useState<any>([]);
    const [pagination, setPagination] = useState({ current_page: 1, total_pages: 1 });

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 15;


    console.log("Base API URL:", API_BASE_URL);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/get-posts?page=${page}&limit=${limit}`);
                setDataPost(res.data.data);
                setPagination(res.data.pagination);
            } catch (error) {
                console.error("Error fetching posts", error);
            }
        };

        fetchPosts();
    }, [page, limit]);


    console.log("dataPost", dataPost)

    return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="flex flex-col justify-start text-base leading-6 font-medium">
              {
                  dataPost && dataPost?.length > 0 &&
                  <PostList posts={dataPost || []} />
              }

              {/* Pagination Component */}
              <div className="max-w-6xl p-4 space-y-6">
                  <Pagination currentPage={pagination.current_page} totalPages={pagination.total_pages} />
              </div>
          </div>
      </div>
    </>
  )
}
