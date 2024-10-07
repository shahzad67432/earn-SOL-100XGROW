"use client"; // Ensure this is correctly placed for client components
import { fetchUserActionForBlogs } from '@/actions/BlogPageActions';
import { getAllPosts, getUserBlogs } from '@/actions/dashboardActions';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FaCoins, FaEye, FaUser } from 'react-icons/fa';

// Define the type for the user
type UserByViews = {
  id: number; // Add user ID to access their posts
  name: string;
  views: number;
};

type UserByEarnings = {
  name: string;
  totalEarnings: number;
  views: number;
};

type Post = {
  id: number; // Assuming you have an ID for the post
  title: string;
  imageUrl: string; // Assuming the post has an image URL
  postUrl: string;
};

const BlogPage = () => {
  // Explicitly define the types for state variables
  const [topUsersByViews, setTopUsersByViews] = useState<UserByViews[]>([]);
  const [topUsersByEarnings, setTopUsersByEarnings] = useState<UserByEarnings[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [mainPost, setMainPost] = useState<Post | null>(null); // State for main post
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  
  const fetchPosts = async () => {
    try {
      const posts = await getAllPosts();
      setPosts(posts);
      return posts;
    } catch (error) {
      console.log("Error fetching posts", error);
      return { success: false };
    }
  };

  const fetchMainPost = async (userId: number) => {
    try {
      const userPosts = await getUserBlogs(userId); // Fetch posts for the top user
      if (userPosts.length > 0) {
        setMainPost(userPosts[0]); // Set the main post to the first one
      }
    } catch (error) {
      console.log("Error fetching user's posts", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const { success, topUsersByViews, topUsersByEarnings } = await fetchUserActionForBlogs();
      setLoading(false);
      if (success) {
        setTopUsersByViews(topUsersByViews ?? []);
        setTopUsersByEarnings(topUsersByEarnings ?? []);

        // Fetch the main post for the user with the most views
        //@ts-ignore
        if (topUsersByViews.length > 0) {
          //@ts-ignore
          const topUser = topUsersByViews[0]; // Get the user with the most views
          await fetchMainPost(topUser.id); // Fetch posts for this user
        }
      }
    };

    fetchPosts();
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row w-full h-auto bg-green-50">
      {/* Main Content Section */}
      <div className="px-8 w-[85%]">
        {/* Top Rectangle Image */}
        {mainPost ? (
          <div
            className="mb-8 relative h-72 bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: `url(${mainPost.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-between p-6">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">{mainPost.title}</h2>
                <p className="text-lg text-white mb-4">
                  
                </p>
              </div>
              <button className="py-2 w-[120px] bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
                Read More
              </button>
            </div>
          </div>
        ) : (
          <div
            className="mb-8 relative h-72 bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: `url(})` }}
            >
            <p className="text-lg text-gray-600">No main post available.</p>
          </div>
        )}

        {/* Other Posts Section */}
        <div className="h-[40rem] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10 gap-10">
          <h3 className="text-xl font-semibold mb-4 col-span-3">Other Posts</h3>
            {posts.map((post, idx) => (
              <div key={idx} className="hover:scale-105 bg-white-100 p-0 rounded-lg shadow-sm" onClick={()=>{router.push(post.postUrl)}}>
                <img className="rounded-lg " src={post.imageUrl} alt="solana post url" />
                <h4 className="text-md font-semibold text-black pt-4">{post.title}</h4>
              </div>
            ))}
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="w-full lg:w-[25%] px-6 lg:px-8 py-2 bg-white rounded-lg mr-2">
        <div className="w-full">
          <img
            className="rounded-lg h-[100px] w-full"
            src="https://forkast.news/wp-content/uploads/2021/11/Solana-1-1260x709.jpg"
            alt="Solana"
          />
        </div>
        
        {/* Earn and Learn Buttons */}
        <div className="flex gap-6 pt-6">
          <div className="bg-green-900 text-white rounded-lg p-2 flex items-center justify-center">
            <p className="text-sm">Earn SOL</p>
          </div>
          <div className="bg-amber-950 text-white rounded-lg p-2 flex items-center justify-center">
            <p className="text-sm">Learn SOL</p>
          </div>
        </div>

        {/* Top Users by Views */}
        <div className="mb-8 pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Users by Views</h3>
          <ul className="space-y-4">
            {topUsersByViews.map((user, idx) => (
              <li key={idx} className="flex justify-between items-center bg-green-100 p-3 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <FaUser className="text-green-600" size={20} />
                  <span className="font-medium text-gray-800">{user.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEye className="text-gray-600" size={18} />
                  <span className="text-gray-600">{user.views} views</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Users by Earnings */}
        <div className="mb-8 pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Users by Earnings</h3>
          <ul className="space-y-4">
            {topUsersByEarnings.map((user, idx) => (
              <li key={idx} className="flex flex-col bg-yellow-100 p-3 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <FaUser className="text-yellow-600" size={20} />
                    <span className="font-medium text-gray-800">{user.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCoins className="text-yellow-600" size={18} />
                    <span className="text-gray-600">SOL {user.totalEarnings}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <FaEye className="text-gray-600" size={16} />
                  <span className="text-sm text-gray-500">{user.views} views</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
