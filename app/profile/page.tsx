"use client"
import { getEarning, getUserBlogs } from "@/actions/dashboardActions";
import { sendPayment } from "@/actions/payout";
import { sendPerEarningAction } from "@/actions/sendPerEarningAction";
import { getUser } from "@/actions/user";
import PremiumTestPage from "@/components/PremiumTests";
import TestCard from "@/components/TestCard";
import ProfilePageLoading from "@/components/loading/ProfilePageLoading";
import ViewsButton from "@/components/ui/Buttons/ViewsButton";
import UpdateViewsEarningButton from "@/components/ui/Buttons/updateViewsEarning";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBullseye } from "react-icons/fa6";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<any>({});
  const [totalEarning, setTotalEarning] = useState<number>(0);
  const [blogsEarning, setBlogsEarning] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalView, setTotalViews] = useState(0)
  const [userPosts, setUserPosts] = useState<any[]>([]);
  const [earning, setEarning] = useState<any[]>([]);
  const {publicKey} = useWallet();
  const router = useRouter();

  const userEmail = session?.user?.email;

  const fetchUserEarnings = async (userId: number) => {
    try {
      setLoading(true);
      const response = await getEarning(userId);
      setLoading(false);
      console.log(response);
      console.log(response.earnings);
      if (response.success) {
      console.log(response);
      console.log(response.earnings);
        setTotalEarning(response.totalEarning ?? 0);
        setBlogsEarning(response.blogsEarning ?? 0);
        setTotalViews(response.totalViews ?? 0);
        setEarning(response.earnings ?? []);
      }
    } catch (error) {
      console.error("Error fetching earnings:", error);
    }
  };

  const fetchUserPosts = async (userId: number)=>{
    try{
      setLoading(true)
      const posts = await getUserBlogs(userId)
      setUserPosts(posts);
      console.log("posts fetched", posts)
      setLoading(false)
    }catch(err){
      console.log("Error fetching", err)
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (userEmail) {
          const user = await getUser(userEmail);
          setUser(user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
      }
    };

    fetchUser();
  }, [userEmail]);

  // Call fetchUserEarnings whenever user changes
  useEffect(() => {
    if (user?.id) {
      fetchUserPosts(user.id)
      fetchUserEarnings(user.id); // Pass the user ID to fetchUserEarnings
    }
  }, [user]);

  const handlePayout = async(email:any, prize:any, earningId: number)=>{
    if(!publicKey) return  alert("please connect your wallet")
    try{
      const userPublicKey = publicKey.toString()
      const res = await sendPerEarningAction({publicKey: userPublicKey, email, prize, earningId})
      console.log(res, "res from handle dash earn payment")
      alert(`payment sent with this transacton Id: ${res}`)
    }catch(error){
      console.log("error sending payment", error)
      alert("payment unsuccessful")
    }
  }

  if (status == "loading") {
    return (
      <ProfilePageLoading/>
    );
  }

  return (
    <div className="min-h-screen px-12 bg-green-50">
      <div className="container mx-auto py-8 px-6">
        {/* User Info Card */}
        <div className="flex justify-between mb-6">
          <div className="flex gap-4">
            <div className="flex flex-col space-y-1">
              <h1>GOOD MORNING</h1> <span className="text-green-950 font-bold text-3xl">{user.name || "solana user"}</span>
            </div>
            {session?.user || publicKey ?
              <>
                <ViewsButton/>
                <UpdateViewsEarningButton email={user.email}/>
              </>
            : null}
          </div>
          <div className="">
              <div className="flex items-center space-x-6">
                {/* <img
                  src={"/default-avatar.png"}
                  alt="User Avatar"
                  className="w-24 h-24 rounded-full"
                /> */}
                <div>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
          </div>
        </div>


        {/* Earnings and Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column: Takes 1/3 of the width */}
          <div className="space-y-6 md:col-span-1">
            {/* Total Earnings */}
            <div className="bg-yellow-100 border-b border-b-blue-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Total Earnings</h3>
              <p className="text-2xl font-bold text-gray-800">{totalEarning} SOL</p>
            </div>

            {/* Earnings from Blogs */}
            <div className="bg-blue-100 p-6 rounded-lg border-b border-b-blue-700 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Earnings from Blogs</h3>
              <p className="text-2xl font-bold text-gray-800">{blogsEarning.toFixed(4)} SOL</p>
            </div>

            {/* Total Views on Blogs */}
            <div className="bg-white p-6 rounded-lg border-b border-b-blue-700 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Total Blog Views</h3>
              <p className="text-2xl font-bold text-gray-800">{totalView}</p>
            </div>
          </div>

          {/* Right Column: Takes 2/3 of the width */}
          <div className="space-y-6 md:col-span-2 h-[424px]">
            {/* Quiz Winnings earnings table fetched data */}
            <div className="bg-white p-6 rounded-lg shadow-lg h-full border-r  border-r-blue-700  border-t-blue-700 overflow-hidden overflow-y-auto">
              <h3 className="text-xl font-semibold mb-4 text-green-950">Available Rewards</h3>
              <ul className="space-y-4 overflow-hidden overflow-y-auto">
                {earning.map((err, idx)=>( 
                  <div key={idx} className="flex justify-between items-center bg-green-100 text-black mx-4 px-4 p-2  hover:shadow-lg rounded-lg">
                    <h1>{err.title}</h1>
                    <div className="flex gap-4 items-center">
                      <button className="flex items-center justify-center border-2 rounded-lg hover:bg-green-500 hover:shadow-sm p-2 " onClick={()=>{handlePayout(user.email, err.totalEarnings, err.id)}}>
                        payout
                      </button>
                      <p className="text-green-700">{err.totalEarnings}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Popular Features/Posts */}
        < PremiumTestPage />
        {/* User Blogs and Popular Features */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-green-950 mb-6 flex justify-between">
            <p>Your Blogs</p>
            <p className=" cursor-pointer text-green-950" onClick={()=>{router.push('/blogs')}}>{`More->`} </p>
          </h3>
          {userPosts.length == 0 && <div className="bg-green-950 text-green-50 text-2xl lg:p-32 p-12 font-bold">No Blogs Are Posted yet</div>}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {userPosts.map((post, idx) => (
              <div key={idx} className="bg-white-100 p-0 rounded-lg shadow-lg" onClick={()=>{router.push(post.postUrl)}}>
                <img className="rounded-lg" src={post.imageUrl} alt="solana post url" />
                <h4 className="text-md font-semibold text-green-950 pt-4">{post.title}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
