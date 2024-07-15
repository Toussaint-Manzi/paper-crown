"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import styles from '@/app/styles/home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
    return (
      <div className={`bg-white h-screen ${styles.myFont}`}>
        <Navbar/>
        <div className='h-full pb-[200px] w-full px-[13%] pt-[200px] flex justify-between items-center 2xl:h-full xl:py-[150px]'>
            <div className='relative h-[500px] w-[45%] xl:hidden'>
                <div className='absolute h-[350px] w-[550px] rounded-xl'>
                <div className="w-full h-full p-1 md:p-2 relative">
                    <Image
                    alt="gallery"
                    className="block h-full w-full rounded-2xl object-cover object-center cursor-pointer"
                    src="/assets/images/people.png"
                    fill
                    />
                </div>
                </div>
                <div className='absolute bottom-[10%] right-[0%] h-[200px] w-[350px] rounded-xl'>
                <div className="w-full h-full p-1 md:p-2 relative">
                    <Image
                    alt="gallery"
                    className="block h-full w-full rounded-2xl object-cover object-center cursor-pointer"
                    src="/assets/images/people.png"
                    fill
                    />
                </div>
                </div>
            </div>
            <div className='w-[45%] self-start xl:w-full'>
                <h1 className={`text-[32px] text-[#FF0054] font-semibold xs:text-[25px] ${styles.myFont2}`}>Who we are</h1>
                <h1 className={`text-[25px] text-[#343434] font-[600] grotesk  my-8 xs:text-[20px] ${styles.myFont2}`}>Paper Crown Rwanda is a feminist, non-profit organization in Rwanda, that works with youth to transform gender norms, foster leadership and create lasting social change.</h1>
                <h1 className='text-[20px] text-black font-[300] roboto my-8 xs:text-[18px]'>Paper Crown Rwanda is a feminist, non-profit organization in Rwanda, that works with youth to transform gender norms, foster leadership and create lasting social change.</h1>
                <button className='h-[60px] text-white text-lg mt-3 px-8 self-start bg-[#D71A30] rounded-xl flex items-center'>
                    Visit Paper Crown
                    <IoIosArrowRoundForward className='text-3xl ml-1'/>
                </button>
                <div className='relative w-full'>
                </div>
            </div>
        </div>
        <Footer/>
      </div>
    );
}
