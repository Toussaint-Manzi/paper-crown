import React from 'react';
import styles from '../styles/home.module.css';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const OurImpact = () => {
  return (
    <div className={`w-full bg-white h-screen ${styles.myFont}`}>
        <Navbar/>
        <div className='w-full px-[13%] pt-[150px]'>
            <div className='w-[80%] mx-auto'>
                <h1 className={`text-center text-[#D71A30] text-[32px]  font-[700] ${styles.myFont2}`}>Impact Data from the Field</h1>
                <h1 className={`text-center text-[#343434] text-[24px]  font-[700] my-10 ${styles.myFont2}`}>Below we highlight impact data from our community work in Rwanda that demonstrates the power of our approach and the importance of transforming hearts, minds and communities from the grassroots up!</h1>
            </div>
            <div className='w-full flex justify-between'>
                <div className="w-[35%] h-[350px] p-1 md:p-2 relative">
                    <Image
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center cursor-pointer"
                        src="/assets/images/people.png"
                        fill
                    />
                </div>
                <div className="w-[62%] h-[350px] p-1 md:p-2 relative">
                    <Image
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center cursor-pointer"
                        src="/assets/images/people.png"
                        fill
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurImpact
