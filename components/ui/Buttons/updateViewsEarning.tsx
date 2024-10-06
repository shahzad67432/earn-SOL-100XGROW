import { payUserForViews } from '@/actions/viewsEarning'
import React from 'react'

const UpdateViewsEarningButton = ({email}:{email: string}) => {
    const handleClick = async() => {
        try{
            const res = await payUserForViews(email)
            if(res.success){
                alert(res.message)
            }
            else{
                alert(res.message)
            }
        }catch(e){
            console.log("error", e)
        }
    }
  return (
    <div className='flex items-end hover:scale-105'>
        <button 
            className='text-sm text-white bg-green-950  flex justify-center items-center hover:text-white p-2 rounded-lg hover:shadow-green-950 hover:shadow-inner'
            onClick={()=>{handleClick()}}
        >
            Update views earning
        </button>
    </div>
  )
}

export default UpdateViewsEarningButton