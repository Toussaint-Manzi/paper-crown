'use client'

import Navbar from '@/app/components/Navbar'
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { getAllResources } from '@/lib/services/userServices';
import { AiOutlineInbox } from "react-icons/ai";
import Footer from '@/app/components/Footer';

const Home = () => {
    const user = useSelector(state => state.authData.userClient);
    const dispatch = useDispatch();
    const resources = useSelector(state => state.allResources);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(getAllResources()).finally(() => setIsLoading(false));
    }, [dispatch]);

    const renderSkeletons = () => (
        Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className='w-[350px] h-[210px] flex flex-col justify-between p-3 bg-gray-300 rounded-[14px] animate-pulse'>
                <div className='flex justify-between items-center w-[150px] h-[35px] bg-gray-400 rounded-[10px] self-end px-4'></div>
                <div className='w-full px-[3%]'>
                    <div className='flex flex-col items-start justify-center w-full h-[80px] rounded-[10px] bg-gray-400 pl-3'></div>
                </div>
            </div>
        ))
    );

    const truncatedName = (word) => {
        console.log(word);
        return word.length > 30
        ? word.slice(0, 10 - 3) + "..." // Slice the string to 10 - 3 and add "..."
        : word;
    } 

    return (
        <div className='bg-white h-full'>
            <Navbar />
            <div className='px-[15%] pt-[150px]'>
                <div className='w-full flex justify-between'>
                    <div>
                        <h1 className='text-[20px] text-black font-[700]'>Morning ! <span className='font-[300] ml-3'>{user.fullname}</span></h1>
                        <h1 className='text-[17px] text-black font-[300] mt-2'>June 17, 2024</h1>
                    </div>
                    <div className='flex items-center px-3 border border-[#E0E0E0] h-[50px] rounded-[14px] w-[350px]'>
                        <CiSearch className='text-[#9C9C9C] w-[24px] h-[24px]' />
                        <input type="text" className='h-[40px] text-[#9C9C9C] font-[300] ml-2 w-[350px] outline-none border-none' placeholder='Search by topic...' />
                    </div>
                </div>
                <div className='w-full flex justify-start py-8'>
                    <div className='h-[400px] w-[230px] px-3 border border-[#E0E0E0] rounded-[14px]'>
                        {/* Sidebar for filters */}
                    </div>
                    <div className='w-full ml-16'>
                        <div className='w-full flex justify-between'>
                            <div className='flex w-full'>
                                <h1 className='text-[20px] text-black font-[500]'>Explore <span className='font-[500] ml-3'>Social work Resources</span></h1>
                                <div className='flex justify-center items-center w-[30px] h-[30px] rounded-[8px] bg-[#D8E6FF] ml-5'>
                                    <h1 className='text-[16px] text-black font-[500]'>{resources.length}</h1>
                                </div>
                            </div>
                            <div>
                                <select id="filter" className="text-black px-3 bg-inherit border border-[#E0E0E0] h-[50px] rounded-[14px]  placeholder:text-[#A4A4A4] outline-none block p-2.5">
                                    <option value="US">Recent</option>
                                    <option value="CA">Oldest</option>
                                    <option value="FR">Popular</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full grid grid-cols-3 gap-12 mt-10'>
                            {isLoading ? renderSkeletons() : resources.length === 0 ? (
                                <div className='flex flex-col items-center justify-center'>
                                    <AiOutlineInbox className='text-[40px] text-gray-500' />
                                    <h1 className='text-[20px] text-gray-500 mt-2'>No resources</h1>
                                </div>
                            ) : (
                                resources.map((res, index) => (
                                    <div key={index}>
                                        <div
                                            className='w-[350px] h-[210px] flex flex-col justify-between p-3'
                                            style={{
                                                backgroundColor: '#F9F0EC',
                                                backgroundImage: `url(${res.thumbnail})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                borderRadius: '14px'
                                            }}
                                        >
                                            <div className='flex justify-between items-center w-[150px] h-[35px] bg-black rounded-[10px] self-end px-4'>
                                                <svg width="22" height="22" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 1.5V3" stroke="#9A9A9A" strokeWidth="0.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M8.5 1.5V3" stroke="#9A9A9A" strokeWidth="0.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M2.25 5.04492H10.75" stroke="#9A9A9A" strokeOpacity="0.51" strokeWidth="0.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11 4.75V9C11 10.5 10.25 11.5 8.5 11.5H4.5C2.75 11.5 2 10.5 2 9V4.75C2 3.25 2.75 2.25 4.5 2.25H8.5C10.25 2.25 11 3.25 11 4.75Z" stroke="#9A9A9A" strokeWidth="0.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M8.34729 7.3501H8.35179" stroke="#9A9A9A" strokeOpacity="0.51" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M8.34729 8.8501H8.35179" stroke="#9A9A9A" strokeOpacity="0.51" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6.4978 7.3501H6.5023" stroke="#9A9A9A" strokeOpacity="0.51" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6.4978 8.8501H6.5023" stroke="#9A9A9A" strokeOpacity="0.51" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M4.64709 7.3501H4.65159" stroke="#9A9A9A" strokeOpacity="0.51" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M4.64697 8.8501H4.65146" stroke="#9A9A9A" strokeOpacity="0.51" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <h1 className='text-[16px] text-[#9A9A9A] font-[500]'>{res.createdAt.substring(0,10)}</h1>
                                            </div>
                                            <div className='w-full px-[3%]'>
                                                <div className='flex flex-col items-start justify-center w-full h-[80px] rounded-[10px] pl-3' style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                                                    <h1 className='text-[20px] text-white font-[600]'>{res.title}</h1>
                                                    <h1 className='text-[17px] text-white font-[300]'>{truncatedName(res.content)}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
