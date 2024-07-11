import React from 'react';
import styles from '../../styles/home.module.css';
import decor from '../../../../public/assets/images/decor.png';
import Image from 'next/image';

const Join = () => {
  return (
    <div className='flex justify-center'>
        <div className='flex justify-between items-center w-[77%] mx-auto h-[400px] rounded-[40px] px-[13%] bg-black mb-7'>
            <div className='relative w-[110px] h-[130px]'>
                <Image
                    src={decor}
                    layout="fill"
                    objectFit="contain"
                    alt="Person"
                />
            </div>
            <div className='w-[70%] mx-auto'>
                <h1 className={`text-white text-center font-semibold text-[40px] w-[50%] mx-auto my-4 ${styles.myFont2}`}>Join our learners Community</h1>
                <p className='text-[#C7D6EF] white text-center my-4'>
                    Paper Crown Rwanda is a feminist non-profit organization that works with youth to transform gender norms, foster leadership and create lasting social change. 
                </p>
                <div className='w-full flex justify-between ml-12 my-4'>
                    <div className='w-1/3 flex flex-col items-start'>
                        <h1 className='font-semibold text-white text-[56px]'>128+</h1>
                        <h1 className=' text-white text-center'>Published</h1>
                        <h1 className=' text-white text-center'>Resources</h1>
                    </div>
                    <div className='w-1/3 flex flex-col items-start'>
                        <h1 className='font-semibold text-white text-[56px]'>128+</h1>
                        <h1 className=' text-white text-center'>Published</h1>
                        <h1 className=' text-white text-center'>Resources</h1>
                    </div>
                    <div className='w-1/3 flex flex-col items-start'>
                        <h1 className='font-semibold text-white text-[56px]'>128+</h1>
                        <h1 className=' text-white text-center'>Published</h1>
                        <h1 className=' text-white text-center'>Resources</h1>
                    </div>
                </div>
            </div>
            <div className='relative w-[110px] h-[130px]'>
                <Image
                    src={decor}
                    layout="fill"
                    objectFit="contain"
                    alt="Person"
                />
            </div>
        </div>
    </div>
  )
}

export default Join
