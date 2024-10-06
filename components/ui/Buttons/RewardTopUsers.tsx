"use client"
import { rewardTopUsers } from '@/actions/rewardTopUsers';
import { useSession } from 'next-auth/react'
import React from 'react'

const RewardTopUsers = ({testId}: {testId: number}) => {
    const {data: session} = useSession();
    const handleClick = async()=>{
      console.log("entering payment action")
      try{
        const res = await rewardTopUsers(testId)
        if(res?.success){
          alert(res.message)
        }else if(!res?.success){
          alert("payment not successful")
        }
      }catch(err){
        console.error(err)
        alert('Failed to reward top users')
      }
    }
  return (
    <div>
        {
          session?.user?.email === "shaa1891640@gmail.com" &&
          <button onClick={handleClick} className='bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 transition-colors'>
            reward top users
          </button>
        }
    </div>
  )
}

export default RewardTopUsers