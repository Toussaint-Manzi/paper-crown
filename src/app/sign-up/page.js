"use client";
import React from 'react';
import Stepper from 'react-stepper-horizontal';
import styles from '../styles/home.module.css';
import logo from '../../../public/assets/images/logo.png';
import Image from 'next/image';

const Signup = () => {
  return (
    <div className='bg-white w-full h-screen flex justify-between'>
        <div className='w-1/2 h-screen bg-white px-16 py-[5%]'>
            <h1 className={`text-black font-semibold text-[32px] w-[100%] mx-auto my-1 ${styles.myFont2}`}>Create Account</h1>
            <h1 className={`text-[#6D6D6D] font-normal text-[18px] w-[100%] mx-auto`}>Fill in your credentials</h1>
            <form action="" className='w-[50%] mt-14'>
                <div className='w-full flex flex-col justify-between'>
                    <div className='w-full mb-3'>
                        <label className='text-[18px] text-black'>Full name</label>
                        <input type="text" name="" id="" placeholder='Enter fullName' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
                    </div>
                    <div className='w-full mb-3'>
                        <label className='text-[18px] text-black'>Email</label>
                        <input type="email" name="" id="" placeholder='Enter Email' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
                    </div>
                    <div className='w-full mb-3'>
                        <label className='text-[18px] text-black'>Phone Number</label>
                        <div className='flex justify-center items-center w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg'>
                            <h1 className='text-black text-[18px]'>+250</h1>
                            <input type="text" name="" id="" placeholder='78X XXX XXX' className='w-full text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
                        </div>
                    </div>
                    <div className='w-full mb-3'>
                        <label className='text-[18px] text-black'>Gender</label>
                        <input type="password" name="" id="" placeholder='Select gender' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
                    </div>
                    <div className='w-full'>
                        <label className='text-[18px] text-black'>Country</label>
                        <input type="text" name="" id="" placeholder='Select country' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
                    </div>
                </div>
                <button className='h-[60px] w-full text-white text-lg mt-10 px-8 self-start bg-[#D71A30] rounded-xl flex justify-center items-center'>
                    Continue
                </button>
            </form>
            <h1 className='w-[50%] text-[18px] text-center text-black mt-3' >Already have account? <span className='text-[#D71A30]'>Login</span></h1>
        </div>
        <div className='w-1/2 bg-[#fcf2f6] py-20 px-20'>
            <div className='py-[25%] w-[90%] flex flex-col justify-center items-center'>
                <div className='w-40 h-20 relative mb-5'>
                    <Image src={logo} fill alt="Logo" />
                </div>
                <h1 className={`text-black opacity-100 z-50 font-semibold text-[32px] w-[100%] mx-auto my-4`}>Join us in fostering equality and empowerment for all by becoming a part of our vibrant community dedicated to sharing knowledge and practices on gender transformative approaches and feminist practice</h1>
            </div>
        </div>
    </div>
  )
}

export default Signup
