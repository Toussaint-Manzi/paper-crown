'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../lib/hooks';
import { updateSectionOne, nextStep } from '../../../../lib/features/signup/signupStepSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { sectionOneSchema } from '../../../../lib/validations/validationSchemas';

const SectionOne = () => {
    const dispatch = useAppDispatch();
    const formData = useAppSelector((state) => state.signup.formData.sectionOne);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(sectionOneSchema),
        defaultValues: formData
    });

    const onSubmit = (data) => {
        // Prepend '+250' to the phone number
        data.phoneNumber = `+250${data.phoneNumber}`;
        dispatch(updateSectionOne(data));
        dispatch(nextStep());
    };

    return (
        <form className='w-[50%] mt-14' onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full flex flex-col justify-between'>
                <div className='w-full mb-3'>
                    <label className='text-[18px] text-black'>Full name</label>
                    <input type="text" name="fullName" placeholder='Enter fullName' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none' {...register('fullName')} />
                    {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                </div>
                <div className='w-full mb-3'>
                    <label className='text-[18px] text-black'>Email</label>
                    <input type="email" name="email" placeholder='Enter Email' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none' {...register('email')} />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div className='w-full mb-3'>
                    <label className='text-[18px] text-black'>Phone Number</label>
                    <div className='flex justify-center items-center w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg'>
                        <h1 className='text-black text-[18px]'>+250</h1>
                        <input type="text" name="phoneNumber" placeholder='78X XXXXXXX' className='w-full text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none' {...register('phoneNumber')} />
                    </div>
                    {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
                </div>
                <div className='w-full mb-3'>
                    <label className='text-[18px] text-black'>Gender</label>
                    <select name="gender" className="text-[#A4A4A4] mt-3 px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none block w-full p-2.5" {...register('gender')}>
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Non-Binary">Non-Binary</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                </div>
                <div className='w-full'>
                    <label className='text-[18px] text-black'>Country</label>
                    <select name="country" className="text-[#A4A4A4] mt-3 px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none block w-full p-2.5" {...register('country')}>
                        <option value="">Select country</option>
                        <option value="US">US</option>
                        <option value="CA">CA</option>
                        <option value="FR">FR</option>
                        <option value="DE">DE</option>
                    </select>
                    {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                </div>
            </div>
            <button type="submit" className='h-[60px] w-full text-white text-lg mt-10 px-8 self-start bg-[#D71A30] rounded-[14px] flex justify-center items-center'>
                Continue
            </button>
        </form>
    )
}

export default SectionOne;
