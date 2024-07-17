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
                    <h1 className='text-[20px] text-black font-[700]'>Morning ! <span className='font-[300]'>Yvonne</span></h1>
                    <h1 className='text-[17px] text-black font-[300] mt-2'>June 17, 2024 </h1>
                </div>
                <div className='flex items-center px-3 border border-[#E0E0E0] h-[50px] rounded-[14px] w-[350px]'>
                    <CiSearch className='text-[#9C9C9C] w-[24px] h-[24px]'/>
                    <input type="text" name="" id="" className='h-[40px] text-[#9C9C9C] font-[300] ml-2 w-[350px] outline-none border-none' placeholder='Search by topic...'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
