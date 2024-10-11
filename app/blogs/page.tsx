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
  id: number;
  title: string;
  imageUrl: string;
  postUrl: string;
};

const BlogPage = () => {
  
  const [topUsersByViews, setTopUsersByViews] = useState<UserByViews[]>([]);
  const [topUsersByEarnings, setTopUsersByEarnings] = useState<UserByEarnings[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [mainPost, setMainPost] = useState<Post | any>(posts[0]);
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
      const userPosts = await getUserBlogs(userId); 
      if (userPosts.length > 0) {
        setMainPost(userPosts[0]);
      }else{
        setMainPost(posts[0]);
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
    return <div className='flex min-h-[80vh] justify-center items-center text-green-950 text-3xl '>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row w-full h-auto bg-green-50">
      {/* Main Content Section */}
      <div className="px-4 sm:px-6 lg:px-8 w-full lg:w-[75%] mb-8 lg:mb-0">
        {/* Top Rectangle Image */}
        {mainPost && (
          <div
            className="mb-8 relative h-48 sm:h-64 md:h-72 bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: `url(${mainPost.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-between p-4 sm:p-6">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{mainPost.title}</h2>
              </div>
              <button className="py-2 w-[120px] bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
                Read More
              </button>
            </div>
          </div>
        )}

        {/* Other Posts Section */}
        <div className="h-[40rem] overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4">Other Posts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pb-10">
            {posts.map((post, idx) => (
              <div key={idx} className="hover:scale-105 bg-white p-3 rounded-lg shadow-sm cursor-pointer" onClick={() => { router.push(post.postUrl) }}>
                <img className="w-full h-40 object-cover rounded-lg mb-3" src={post.imageUrl} alt="solana post url" />
                <h4 className="text-md font-semibold text-black">{post.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="w-full lg:w-[25%] px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-lg">
        <div className="w-full mb-6">
          <img
            className="rounded-lg h-[100px] w-full object-cover"
            src="https://forkast.news/wp-content/uploads/2021/11/Solana-1-1260x709.jpg"
            alt="Solana"
          />
        </div>
        
        {/* Earn and Learn Buttons */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-green-900 text-white rounded-lg p-2 flex items-center justify-center">
            <p className="text-sm">Earn SOL</p>
          </div>
          <div className="flex-1 bg-amber-950 text-white rounded-lg p-2 flex items-center justify-center">
            <p className="text-sm">Learn SOL</p>
          </div>
        </div>

        {/* Top Users by Views */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Users by Views</h3>
          <ul className="space-y-4">
            {topUsersByViews.map((user, idx) => (
              <li key={idx} className="flex justify-between items-center bg-green-100 p-3 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <FaUser className="text-green-600" size={20} />
                  <span className="font-medium text-gray-800 text-sm sm:text-base">{user.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEye className="text-gray-600" size={18} />
                  <span className="text-gray-600 text-sm">{user.views} views</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Users by Earnings */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Users by Earnings</h3>
          <ul className="space-y-4">
            {topUsersByEarnings.map((user, idx) => (
              <li key={idx} className="flex flex-col bg-yellow-100 p-3 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <FaUser className="text-yellow-600" size={20} />
                    <span className="font-medium text-gray-800 text-sm sm:text-base">{user.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCoins className="text-yellow-600" size={18} />
                    <span className="text-gray-600 text-sm">SOL {user.totalEarnings}</span>
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

// https://forkast.news/wp-content/uploads/2021/11/Solana-1-1260x709.jpg