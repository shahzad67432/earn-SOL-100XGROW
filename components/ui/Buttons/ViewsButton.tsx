"use client"
import { getViewsAndAddUserPostViews } from '@/actions/user';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'

const ViewsButton = () => {
    const {data: session} = useSession();
    const [views, setViews] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<null | string>();
    console.log("session", session);
    const email = session?.user?.email || "";
    console.log("email", email);
    const handleViewsClick = async () => {
        setLoading(true);
        try {
          const PostViews = await getViewsAndAddUserPostViews(email);
          console.log("Post views : ", PostViews, views);
          setViews(PostViews);
          alert(`views updated: ${PostViews}`)
          // setResponse('Success');
          // setTimeout(()=>{}, 8000);
          // setResponse(null)
        } catch (error) {
          console.error("Failed to get views:", error);
          setResponse("Failed");
        } finally {
          setLoading(false);
        }
      };
  return (
    <div className=' flex items-end hover:scale-105'>
        <button
            className="text-sm text-white bg-green-950  flex justify-center items-center hover:text-white p-2 rounded-lg hover:shadow-green-950 hover:shadow-inner"
            onClick={() => {
              handleViewsClick();
            }}
          >
            Update Views
        </button>
    </div>
  )
}

export default ViewsButton;