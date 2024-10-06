"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
const PostButton = () => {
    const router = useRouter();
    const handlePostClick = () => {
        router.push("/publishpost");
      };
  return (
    <div>
        <button
            className="text-sm font-semibold text-[#512da8] flex justify-center items-center hover:text-white w-full h-full"
            onClick={() => {
              handlePostClick();
            }}
          >
            Post
        </button>
    </div>
  )
}

export default PostButton