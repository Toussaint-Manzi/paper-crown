import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/images/logo_light.png';
import styles from '../styles/home.module.css';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className={`h-[300px] bg-black w-full px-[13%] ${styles.myFont}`}>
        <div className='flex w-full h-full justify-between items-center'>
            <div className='flex justify-between w-[50%]'>
                <div className='w-40 h-20 relative'>
                    <Image src={logo} fill alt="Logo" />
                </div>
                <p className='text-white w-[70%]'>
                    Paper Crown Rwanda is a feminist non-profit organization that works with youth to transform gender norms, foster leadership and create lasting social change. 
                </p>
            </div>
            <div className='w-[15%]'>
                <h1 className='text-white text-lg my-3'>Social media links</h1>
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
        <div className='h-[1px] w-full bg-gray-700 mt-2'>
        </div>
        <div className='mt-5 w-full flex justify-between items-center xl:flex-col'>
            <p className='text-white'>Paper Crown © {new Date().getFullYear()} All rights reserved</p>
        </div> 
    </footer>
  ) 
}

export default Footer
