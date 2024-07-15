import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import decor from '../../../public/assets/images/decor2.png';


const Contact = () => {
  return (
    <div className='bg-white h-screen w-full'>
        <Navbar/>
        <div className='pt-[100px] px-[13%]'>
            <div className='flex justify-between items-center w-full mx-auto h-[250px] rounded-[40px] px-[13%] mb-12'>
                <div className='relative w-[90px] h-[110px]'>
                    <Image
                        src={decor}
                        layout="fill"
                        objectFit="contain"
                        alt="Person"
                    />
                </div>
                <div className='w-[70%] mx-auto'>
                    <h1 className={`text-black text-center font-semibold text-[48px] w-[100%] mx-auto my-4`}>Get In Touch</h1>
                    <h1 className={`text-[#B5B5B5] text-center text-[18px] w-[100%] mx-auto my-4`}>let us know how  we can help</h1>
                </div>
                <div className='relative w-[90px] h-[110px]'>
                    <Image
                        src={decor}
                        layout="fill"
                        objectFit="contain"
                        alt="Person"
                    />
                </div>
            </div>
            <div className='w-full flex justify-between'>
                <div className='w-[45%]'>
                    <h1 className='text-[24px] text-black capitalize mb-10'>Send us a message</h1>
                    <form action="">
                        <div className='w-full flex justify-between'>
                            <div className='w-[45%]'>
                                <label className='text-[18px] text-black'>Your name</label>
                                <input type="text" name="" id="" placeholder='Enter name' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
                            </div>
                            <div className='w-[45%]'>
                                <label className='text-[18px] text-black'>Your Email</label>
                                <input type="text" name="" id="" placeholder='Enter Email' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
                            </div>
                        </div>
                        <div className='w-full flex flex-col mt-5'>
                            <label className='text-[18px] text-black'>Message</label>
                            <textarea name="" rows={5} id="" placeholder='Enter Message' className='text-[#A4A4A4] px-5 py-3 mt-3 bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'></textarea>
                        </div>
                        <button className='h-[60px] w-[60%] text-white text-lg mt-10 px-8 self-start bg-[#D71A30] rounded-xl flex justify-center items-center'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
