'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/images/logo.png';
import styles from '../../app/styles/home.module.css';
import { userSignInAsync } from '@/lib/services/authService';
import { loginSchema } from '../../lib/validations/validationSchemas';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'; // Import icons
import { useAppDispatch } from '@/lib/hooks';
import { useRouter } from 'next/navigation';



const Login = () => {
    const [isLoading , setIsloading] = useState(false);
    const router  = useRouter();
    const dispatch = useAppDispatch();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const formData = {
        email:'',
        password:''
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: formData,
    });

    const handleSubmitForm = async (data) => {
        setIsloading(true);
        try {
          const response = await dispatch(userSignInAsync({ account:data.email, password: data.password}));
          if (response.payload.status === 200) {
            toast.success('User logged successfully', {
              autoClose: 3000,
            });
            router.push('/dashboard/user/home');
          } else {
            toast.error('Invalid credentials , please try again', {
              autoClose: 3000,
            });
          }
        } catch (error) {
            toast.error('Invalid credentials , please try again', {
              autoClose: 3000,
            });
        } finally {
            setIsloading(false);
        }
      };
  return (
    <div className='w-full bg-white h-screen flex justify-between'>
        <ToastContainer/>
        <div className='w-1/2 h-screen bg-white p-20'>
            <div className='w-40 h-20 relative'>
                <Image src={logo} fill alt="Logo" />
            </div>
            <div className='py-[20%] w-[60%] flex justify-center items-center'>
                <div className='w-full h-full'>
                    <h1 className={`text-black  uppercase font-semibold text-[32px] w-[100%] mx-auto my-4 ${styles.myFont2}`}>Welcome back</h1>
                    <form action="" onSubmit={handleSubmit(handleSubmitForm)}>
                        <div className='w-full flex flex-col justify-between'>
                            <div className='w-full mb-3'>
                                <label className='text-[18px] text-black'>Email</label>
                                <input type="email" name="email" placeholder='Enter Email' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none' {...register('email')} />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>
                            <div className='w-full mb-3 relative'>
                                <label className='text-[18px] text-black'>Password</label>
                                <input
                                    type={passwordVisible ? 'text' : 'password'} // Toggle input type based on visibility state
                                    name="password"
                                    placeholder='Enter your password'
                                    className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'
                                    {...register('password')}
                                />
                                <div className='absolute right-4 bottom-0 transform -translate-y-1/2 cursor-pointer' onClick={() => setPasswordVisible(!passwordVisible)}>
                                    {passwordVisible ? <IoEyeOffOutline color='#000' size={24} /> : <IoEyeOutline color='#000' size={24} />}
                                </div>
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>
                        </div>
                        <button type='submit' disabled={isLoading}  className={`h-[60px] w-full text-white text-lg mt-10 px-8 self-start rounded-xl flex justify-center items-center ${isLoading ?'bg-[#f5bfc6]' : 'bg-[#D71A30]'}`}>
                            { isLoading ? 
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.7em" height="2.7em" viewBox="0 0 24 24">
                                    <circle cx="4" cy="12" r="3" fill="white">
                                        <animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3"/>
                                    </circle>
                                    <circle cx="12" cy="12" r="3" fill="white">
                                        <animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3"/>
                                    </circle>
                                    <circle cx="20" cy="12" r="3" fill="white">
                                        <animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3"/>
                                    </circle>
                                </svg> :
                                'Login'
                            }
                        </button>
                    </form>
                    <h1 className='text-[18px] text-center text-black mt-3' >Don’t have account? <span className='text-[#D71A30]'>Sign up</span></h1>
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
