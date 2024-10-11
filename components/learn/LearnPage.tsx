"use client"

import { getLearningContent } from '@/actions/LearnActions'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import LearnPageLoading from '../loading/LearnPageLoading';

const LearnPage = ({type}:{type: string}) => {
    const [learn, setLearn] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        const fetchLearn = async () => {
            try {
                setLoading(true)
                const res = await getLearningContent();
                if (res.success && res.learn) {
                    const uniqueLearn = res.learn.reduce((acc: any[], current: any) => {
                        const x = acc.find((item: any) => item.title === current.title);
                        if (!x) {
                            return acc.concat([current]);
                        } else {
                            return acc;
                        }
                    }, []);
                    setLearn(uniqueLearn);
                }
                setLoading(false);
            } catch (err) {
                console.error(err)
                setLoading(false);
            }
        }
        fetchLearn();
    }, [])

    if (loading) {
        return <LearnPageLoading />;
    }

    const filteredLearn = learn.filter((l) => l.type === type);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLearn.map((l) => (
                <div
                    key={l.id}
                    className="relative flex flex-col justify-between border rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full cursor-pointer overflow-hidden"
                    style={{ minHeight: '250px', maxHeight: '300px' }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('${l.learnImage[0]}')`,
                        }}
                    ></div>
                    
                    <div className="relative z-10 bg-gradient-to-t from-black to-transparent p-4 h-full flex flex-col justify-between">
                        <div>
                            <h2 className="text-base sm:text-lg font-bold text-white line-clamp-2">{l.title}</h2>
                        </div>
                        
                        <div className="mt-auto">
                            <button 
                                className="w-full p-2 rounded-md bg-green-400 text-white hover:bg-green-500 transition-all duration-300 text-sm sm:text-base"
                                onClick={() => router.push(`/learn/${l.id}`)}
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