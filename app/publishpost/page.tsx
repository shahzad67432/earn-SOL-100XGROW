"use client";

import { addPostAction } from '@/actions/user';
import { bloggerAutomation } from '@/lib/actions';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Importing styles for the rich text editor
import AuthModal from '@/components/AuthModal';

// Dynamically load ReactQuill (rich text editor) to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const blogId = "631172501694730805";
  const {data: session} = useSession();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const email = session?.user?.email || "";

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      console.log("Sending request...");
      const response = await bloggerAutomation(title, content, blogId);
      console.log("Post published successfully:", JSON.stringify(response));
      
      if (response.success) {
        const urlToFetchViews = response.requiredUrl ?? "";
        const res = await addPostAction(urlToFetchViews, response.postTitle, response.postUrl, email, imageUrl);
        console.log("Response from addPostAction:", JSON.stringify(res));
        
        // Use a notification instead of alert
        alert("Post added successfully: " + res.message);
      } else {
        alert("Failed to publish post. Please check your input.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to publish post. Please check your input.");
    }
  };

  const handleSubmitButton = (e: React.MouseEvent) => {
    if (!session?.user?.email) {
      setIsAuthModalOpen(true);
    } else {
      handleSubmit(e);
    }
  };
  
  return (
    <>
      <div className='w-full min-h-[100vh] bg-green-50'>
        <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto mt-8 bg-green-50">
          {/* Post Form Section */}
          <div className="w-full lg:w-2/3 p-6 bg-green-50 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-green-700 mb-6">Publish a Post</h2>

            {/* Image URL */}
            <input
              type="text"
              placeholder="Image URL"
              className="w-full p-3 mb-4 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />

            {/* Post Title */}
            <input
              type="text"
              placeholder="Post Title"
              className="w-full p-3 mb-4 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Rich Text Editor for Content */}
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              className="mb-4 border border-green-300 rounded"
            />

            {/* Submit Button */}
            <button
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition duration-300"
              onClick={(e)=>{handleSubmitButton(e)}}
            >
              Publish
            </button>
          </div>

          {/* Instructions Section */}
          <div className="w-full lg:w-1/3 p-6 mt-8 lg:mt-0 lg:ml-6 bg-white rounded-lg shadow-md h-fit">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Instructions</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Make sure to provide a valid/uploaded/online image URL.</li>
              <li>Keep your post title concise and relevant.</li>
              <li>Use the rich text editor to format your content.</li>
              <li>Click Publish to publish your post to the blog on the blogger.</li>
              <li>Ensure the content is free from any policy violations.</li>
              <li>Ensure the content is related to Solana.</li>
              <li>Should be for learning purpose.</li>
            </ul>
          </div>
        </div>
      </div>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Page;
