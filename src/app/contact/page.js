import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import decor from '../../../public/assets/images/decor2.png';
import decor2 from '../../../public/assets/images/decor3.png';
import { CiLocationOn } from "react-icons/ci";
import { BiMessageMinus } from "react-icons/bi";
import Link from 'next/link';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { MdOutlineLocalPhone } from "react-icons/md";
import Footer from '../components/Footer';



const Contact = () => {
  return (
    <div className='bg-white h-screen w-full'>
        <Navbar/>
        <div className='pt-[100px] px-[13%] pb-24'>
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
                <div className='w-[45%] bg-[#f0f8fc] h-[450px] p-[5%] rounded-xl'>
                    <div className='relative w-[200px] h-[50px]'>
                        <Image
                            src={decor2}
                            layout="fill"
                            objectFit="contain"
                            alt="Person"
                        />
                    </div>
                    <h1 className={`text-[24px] text-black capitalize mb-10 font-[600] ${styles.myFont2} mt-5`}>Contact Information</h1>
                    <div className='w-full grid grid-cols-2 gap-8 justify-between'>
                        <div className=' flex justify-start items-center'>
                            <CiLocationOn className='text-black text-3xl mr-2'/>
                            <div className='flex flex-col justify-center'>
                                <h1 className='text-black text-[18px]'>KK 280 st</h1>
                                <h1 className='text-[#7E7979] text-[16px]'>Kanombe, kicukiro</h1>
                            </div>
                        </div>
                        <div className=' flex justify-start items-center'>
                            <BiMessageMinus className='text-black text-3xl mr-2'/>
                            <div className='flex flex-col justify-center'>
                                <h1 className='text-[#7E7979] text-[16px]'>Email</h1>
                                <h1 className='text-black text-[18px]'>janedoe@gmail.com</h1>
                            </div>
                        </div>
                        <div className=' flex justify-start items-center'>
                            <MdOutlineLocalPhone className='text-black text-3xl mr-2'/>
                            <div className='flex flex-col justify-center'>
                                <h1 className='text-[#7E7979] text-[16px]'>Phone number</h1>
                                <h1 className='text-black text-[18px]'>07857**345</h1>
                            </div>
                        </div>
                        <div className=''>
                            <div className='w-full flex items-center justify-between'>
                                <Link href="https://www.instagram.com/dope_initiatives/" target='_blank' className='w-[45px] h-[45px] xs:w-[40px] xs:h-[40px] bg-[#181818] rounded-xl flex justify-center items-center cursor-pointer hover:bg-amber-500 hover:transition-all hover:duration-300'>
                                    <AiFillInstagram className='text-white text-xl'/>
                                </Link>
                                <Link href="https://x.com/Dope_Initiative" target='_blank' className='w-[45px] h-[45px] xs:w-[40px] xs:h-[40px] bg-[#181818] rounded-xl flex justify-center items-center cursor-pointer hover:bg-amber-500 hover:transition-all hover:duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="#fff" d="m218.12 209.56l-61-95.8l59.72-65.69a12 12 0 0 0-17.76-16.14l-55.27 60.84l-37.69-59.21A12 12 0 0 0 96 28H48a12 12 0 0 0-10.12 18.44l61 95.8l-59.76 65.69a12 12 0 1 0 17.76 16.14l55.31-60.84l37.69 59.21A12 12 0 0 0 160 228h48a12 12 0 0 0 10.12-18.44M166.59 204L69.86 52h19.55l96.73 152Z"/></svg>
                                </Link>
                                <Link href="https://www.linkedin.com/company/dopeinitiatives" target='_blank' className='w-[45px] h-[45px] xs:w-[40px] xs:h-[40px] bg-[#181818] rounded-xl flex justify-center items-center cursor-pointer hover:bg-amber-500 hover:transition-all hover:duration-300'>
                                    <BsLinkedin className='text-white text-lg'/>
                                </Link>
                                <Link href="mailto:dopeinitiativesltd@gmail.com" target='_blank' className='w-[45px] h-[45px] xs:w-[40px] xs:h-[40px] bg-[#181818] rounded-xl flex justify-center items-center cursor-pointer hover:bg-amber-500 hover:transition-all hover:duration-300'>
                                    <MdEmail className='text-white text-lg'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
