import React from 'react';
import styles from '../../styles/home.module.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';
import homePhoto from '../../../../public/assets/images/home.png'


const HomeSection = () => {
  return (
    <div className='w-full px-[13%] bg-white h-screen pt-[200px]'>
        <div className='w-full h-full flex justify-between items-center'>
            <div className='w-[40%] h-full flex flex-col justify-start items-start'>
                <h1 className={`text-black text-[48px] font-[600] ${styles.myFont2}`}>Welcome to the Community of Feminist Practice learning hub!</h1>
                <p className={`text-black text-[20px] font-[300] my-8 ${styles.myFont}`}>Join a community that celebrates your growth and -supports your journey towards empowerment." Join a community that celebrates your growth and -supports your journey towards empowerment."</p>
                <button className='h-[60px] text-white text-lg mt-3 px-8 self-start bg-[#D71A30] rounded-xl flex items-center'>
                    Join community
                    <IoIosArrowRoundForward className='text-3xl ml-1'/>
                </button>
            </div>
            <div className='relative w-[55%] h-[80%] -mt-[200px] xl:hidden'>
                <Image
                    src={homePhoto}
                    layout="fill"
                    objectFit="contain"
                    alt="Person"
                    // style={{ top: '0%', left: '0%' }}
                />
            </div>
        </div>
    </div>
  )
}

export default HomeSection
