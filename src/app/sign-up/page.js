"use client";
import React from 'react';
import Stepper from 'react-stepper-horizontal';
import styles from '../styles/home.module.css';
import logo from '../../../public/assets/images/logo.png';
import Image from 'next/image';
import SectionOne from '../components/sections/signup/SectionOne';
import SectionTwo from '../components/sections/signup/SectionTwo';

const Signup = () => {
  return (
    <div className='bg-white w-full h-full flex justify-between'>
        <div className='w-1/2 h-full bg-white px-16 py-[3%]'>
            <h1 className={`text-black font-semibold text-[32px] w-[100%] mx-auto my-1 ${styles.myFont2}`}>Create Account</h1>
            <h1 className={`text-[#6D6D6D] font-normal text-[18px] w-[100%] mx-auto`}>Fill in your credentials</h1>
            <SectionOne/>
            <SectionTwo/>
            <h1 className='w-[50%] text-[18px] text-center text-black mt-3' >Already have account? <span className='text-[#D71A30]'>Login</span></h1>
        </div>
        <div className='w-1/2 bg-[#fcf2f6] py-20 px-20'>
            <div className='py-[25%] w-[90%] flex flex-col justify-center items-center'>
                <div className='w-40 h-20 relative mb-5'>
                    <Image src={logo} fill alt="Logo" />
                </div>
                <h1 className={`text-black opacity-100 font-semibold text-[32px] w-[100%] mx-auto my-4`}>Join us in fostering equality and empowerment for all by becoming a part of our vibrant community dedicated to sharing knowledge and practices on gender transformative approaches and feminist practice</h1>
            </div>
        </div>
    </div>
  )
}

export default Signup
