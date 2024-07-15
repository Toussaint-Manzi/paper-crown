import React from 'react'
import styles from '../../styles/home.module.css';
import person from '../../../../public/assets/images/person.png'
import Image from 'next/image';


const Testimonial = () => {
  return (
    <div className={`px-[13%] w-full bg-[#EFEFEF] py-24 ${styles.myFont}`}>
        <div className='flex items-center w-[15%] mx-auto justify-between  mb-10'>
            <div className="h-[2px] w-[80px] bg-black"></div>
            <h1 className='text-[#D71A30] uppercase'>testimonial</h1>
        </div>
        <h1 className={`text-black text-center font-semibold text-[26px] w-[30%] mx-auto my-4 ${styles.myFont2}`}>Real Stories, Real Impact: Testimonials from community".</h1>
        <div className='relative h-[500px]'>
            <div className='absolute'>
                <div className='relative w-[306px] h-[336px] my-20'>
                    <Image
                        src={person}
                        layout="fill"
                        objectFit="contain"
                        alt="Person"
                    />
                </div>
            </div>
            <div className='flex flex-col justify-between absolute bg-black h-[200px] w-[350px] z-20 rounded-2xl top-[30%] left-[15%] px-6 py-5'>
                <h1 className='text-normal font-medium text-[#fff]'>Yvonne Mbabazi</h1>
                <h1 className='text-xs font-medium text-[#9D9D9D]'>Student</h1>
                <h1 className='text-sm  text-[#fff]'>“ As a student, finding reliable educational resources online can be overwhelming. Luckily, I found this website, and it's been a goldmine of knowledge. The tutorials and guides have helped me ace my exams and deepen ..."</h1>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
