import React from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/images/logo.png';
import styles from '../../app/styles/home.module.css';


const Login = () => {
  return (
    <div className='w-full bg-white h-screen flex justify-between'>
        <div className='w-1/2 h-screen bg-white p-20'>
            <div className='w-40 h-20 relative'>
                <Image src={logo} fill alt="Logo" />
            </div>
            <div className='py-[20%] w-[60%] flex justify-center items-center'>
                <div className='w-full h-full'>
                    <h1 className={`text-black  uppercase font-semibold text-[32px] w-[100%] mx-auto my-4 ${styles.myFont2}`}>Welcome back</h1>
                    <form action="">
                        <div className='w-full flex flex-col justify-between'>
                            <div className='w-full mb-8'>
                                <label className='text-[18px] text-black'>Your Email</label>
                                <input type="text" name="" id="" placeholder='Enter name' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
                            </div>
                            <div className='w-full'>
                                <label className='text-[18px] text-black'>Your Password</label>
                                <input type="password" name="" id="" placeholder='Enter Password' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
                            </div>
                        </div>
                        <button className='h-[60px] w-full text-white text-lg mt-10 px-8 self-start bg-[#D71A30] rounded-xl flex justify-center items-center'>
                            Login
                        </button>
                    </form>
                    <h1 className='text-[18px] text-center text-black mt-3' >Don’t have acount? <span className='text-[#D71A30]'>Sign up</span></h1>
                </div>
            </div>
        </div>
        <div className='w-1/2 bg-[#fcf2f6] p-20'>
            {/* <div className='w-40 h-20 relative'>
                <Image src={logo} fill alt="Logo" />
            </div> */}
            <div className='py-[25%] w-[60%] flex justify-center items-center'>
                <h1 className={`text-black opacity-100 z-50 font-semibold text-[32px] w-[100%] mx-auto my-4`}>Join us in fostering equality and empowerment for all by becoming a part of our vibrant community dedicated to sharing knowledge and practices on gender transformative approaches and feminist practice</h1>
            </div>
        </div>
    </div>
  )
}

export default Login
