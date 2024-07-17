'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../lib/hooks';
import { updateSectionOne } from '../../../../lib/features/signup/signupStepSlice';
import { nextStep, prevStep } from '../../../../lib/features/signup/signupStepSlice';

const SectionOne = () => {
    const dispatch = useAppDispatch();
    const formData = useAppSelector((state) => state.signup.formData.sectionOne);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateSectionOne({ ...formData, [name]: value }));
    };

    const handleNext = (e) => {
        e.preventDefault();
        dispatch(nextStep());
    };

    const handlePrev = () => {
        dispatch(prevStep());
    };

  return (
    <form action="" className='w-[50%] mt-14'>
        <div className='w-full flex flex-col justify-between'>
            <div className='w-full mb-3'>
                <label className='text-[18px] text-black'>Full name</label>
                <input type="text" name="" id="" placeholder='Enter fullName' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
            </div>
            <div className='w-full mb-3'>
                <label className='text-[18px] text-black'>Email</label>
                <input type="email" name="" id="" placeholder='Enter Email' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
            </div>
            <div className='w-full mb-3'>
                <label className='text-[18px] text-black'>Phone Number</label>
                <div className='flex justify-center items-center w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg'>
                    <h1 className='text-black text-[18px]'>+250</h1>
                    <input type="text" name="" id="" placeholder='78X XXX XXX' className='w-full text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
                </div>
            </div>
            <div className='w-full mb-3'>
                <label className='text-[18px] text-black'>Gender</label>
                <select id="countries" className="text-[#A4A4A4] mt-3 px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none block w-full p-2.5">
                    <option selected>Select gender</option>
                    <option value="US">Male</option>
                    <option value="CA">Female</option>
                    <option value="FR">Non-Binary</option>
                    <option value="DE">Other</option>
                </select>
            </div>
            <div className='w-full'>
                <label className='text-[18px] text-black'>Country</label>
                <select id="gender" className="text-[#A4A4A4] mt-3 px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none block w-full p-2.5">
                    <option selected>Select gender</option>
                    <option value="US">Male</option>
                    <option value="CA">Female</option>
                    <option value="FR">Non-Binary</option>
                    <option value="DE">Other</option>
                </select>
            </div>
        </div>
        <button className='h-[60px] w-full text-white text-lg mt-10 px-8 self-start bg-[#D71A30] rounded-[14px] flex justify-center items-center' onClick={handleNext}>
            Continue
        </button>
    </form>
  )
}

export default SectionOne
