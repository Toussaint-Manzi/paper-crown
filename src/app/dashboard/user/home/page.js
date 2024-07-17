import Navbar from '@/app/components/Navbar'
import React from 'react'
import { CiSearch } from "react-icons/ci";


const Home = () => {
  return (
    <div className='bg-white h-screen'>
        <Navbar/>
        <div className='px-[15%] pt-[150px]'>
            <div className='w-full flex justify-between'>
                <div className=''>
                    <h1 className='text-[20px] text-black font-[700]'>Morning ! <span className='font-[300] ml-3'>Yvonne</span></h1>
                    <h1 className='text-[17px] text-black font-[300] mt-2'>June 17, 2024 </h1>
                </div>
                <div className='flex items-center px-3 border border-[#E0E0E0] h-[50px] rounded-[14px] w-[350px]'>
                    <CiSearch className='text-[#9C9C9C] w-[24px] h-[24px]'/>
                    <input type="text" name="" id="" className='h-[40px] text-[#9C9C9C] font-[300] ml-2 w-[350px] outline-none border-none' placeholder='Search by topic...'/>
                </div>
            </div>
            {/* Sidebar for filters */}
            <div className='w-full flex justify-start my-8'>
                <div className='h-[400px] w-[230px] px-3 border border-[#E0E0E0] rounded-[14px]'>

                </div>
                <div className='w-full flex justify-between ml-10'>
                    <div className='flex w-full'>
                        <h1 className='text-[20px] text-black font-[500]'>Explore <span className='font-[500] ml-3'>Social work Resourses</span></h1>
                        <div className='flex justify-center items-center w-[30px] h-[30px] rounded-[8px] bg-[#D8E6FF] ml-5'>
                            <h1 className='text-[16px] text-black font-[500]'>12</h1>
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
            </div>
        </div>
    </div>
  )
}

export default Home
