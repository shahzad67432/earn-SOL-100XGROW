"use client"  
import { getLearningContent } from '@/actions/LearnActions'  
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'  

const LearnPage = ({type}:{type: string}) => {  
    const [Learn, setLearn] = useState<any[]>([]);  
    const [loading, setLoading] = useState<boolean>(true);  
    const router = useRouter();

    useEffect(()=>{  
        const fetchLearn = async()=>{  
            try{  
                setLoading(true)  
                const res = await getLearningContent();  
                if(res.success && res.learn){  
                    setLearn(res.learn)  
                }  
                setLoading(false)
            }catch(err){  
                console.error(err)  
            }  
        }  
        fetchLearn();  
    }, [])  

    if(loading){  
        return <div>Loading...</div>  
    }  
    console.log(Learn, "Learn")
    return (  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">  
            {Learn.filter((l) => l.type == type).map((l) => (  
                <div   
                    key={l.id} // Assuming each 'l' has a unique 'id' property  
                    className="relative flex flex-col justify-between border rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg max-w-sm w-full cursor-pointer overflow-hidden"  
                    style={{ height: '300px' }} // Set height to maintain square shape  
                >  
                    {/* Background Image */}  
                    <div  
                        className="absolute inset-0 bg-cover bg-center"  
                        style={{  
                        backgroundImage: `url('${l.learnImage[0]}')`, // Replace with actual image URL if needed  
                        }}  
                    ></div>  

                    {/* Overlay for content */}  
                    <div className="relative z-10 bg-gradient-to-t from-black to-transparent p-4 h-full flex flex-col justify-between">  
                        {/* Test Title and Bounty */}  
                        <div>  
                            <h2 className="text-lg font-bold text-white">{l.title}</h2>  
                        </div>  
                        
                        {/* Button to Learn */}  
                        <div className="mt-6">  
                            <button   
                                className="w-full p-2 rounded-md bg-green-400 text-white hover:bg-green-500 transition-all duration-300"   
                                onClick={() => {  
                                    router.push(`/learn/${l.id}`)
                                }}  
                            >  
                            Learn  
                            </button>  
                        </div>  
                    </div>  
                </div>  
            ))}  
        </div>  
    );  
}  

export default LearnPage;