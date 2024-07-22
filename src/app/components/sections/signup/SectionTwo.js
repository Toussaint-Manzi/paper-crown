'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../../../lib/hooks';
import { updateSectionTwo, nextStep, prevStep } from '../../../../lib/features/signup/signupStepSlice';
import { sectionTwoSchema } from '../../../../lib/validations/validationSchemas';
import axios from 'axios';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'; // Import icons


const SectionTwo = () => {
  const dispatch = useAppDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [ confirmPasswordVisible , setConfirmPasswordVisible ] = useState(false);
  const formData = useAppSelector((state) => state.signup.formData.sectionTwo);
  const sectionOneData = useAppSelector((state) => state.signup.formData.sectionOne);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(sectionTwoSchema),
    defaultValues: formData,
  });

  const handleSubmitForm = async (data) => {
    const completeFormData = { ...sectionOneData, ...data };
    console.log('data', completeFormData);
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', completeFormData);
      console.log('Form submitted successfully', response.data);
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  return (
    <form className='w-[50%] mt-14' onSubmit={handleSubmit(handleSubmitForm)}>
      <div className='w-full flex flex-col justify-between'>
        <div className='w-full mb-3'>
          <label className='text-[18px] text-black'>What best describes your organisation/work?</label>
          <select name="organisation" className="text-[#A4A4A4] mt-3 px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none block w-full p-2.5" {...register('organisation')}>
            <option value="">Organisation/work</option>
            <option value="International non-governmental organisation or network<">International non-governmental organisation or network</option>
            <option value="Local or national non-governmental organisation or network">Local or national non-governmental organisation or network</option>
            <option value="Foundation or Funding agency">Foundation or Funding agency</option>
            <option value="Government agency<">Government agency</option>
            <option value="UN or other multilateral institution">UN or other multilateral institution</option>
            <option value="Academia or research institution">Academia or research institution</option>
            <option value="Independent consultant">Independent consultant</option>
          </select>
          {errors.organisation && <p className='text-red-600'>{errors.organisation.message}</p>}
        </div>
        <div className='w-full mb-3'>
          <label className='text-[18px] text-black'>If you work for an organisation, what organisation?</label>
          <input type="text" name="organisationName" placeholder='Enter Organisation name' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none' {...register('organisationName')} />
          {errors.organisationName && <p className='text-red-600'>{errors.organisationName.message}</p>}
        </div>
        <div className='w-full mb-3'>
          <label className='text-[18px] text-black'>Position</label>
          <input type="text" name="position" placeholder='Enter your position in the organisation' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none' {...register('position')} />
          {errors.position && <p className='text-red-600'>{errors.position.message}</p>}
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
        <div className='w-full mb-3 relative'>
            <label className='text-[18px] text-black'>Confirm Password</label>
            <input
                type={confirmPasswordVisible ? 'text' : 'password'} // Toggle input type based on visibility state
                name="password"
                placeholder='Confirm password'
                className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'
                {...register('password')}
            />
            <div className='absolute right-4 bottom-0 transform -translate-y-1/2 cursor-pointer' onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                {confirmPasswordVisible ? <IoEyeOffOutline color='#000' size={24} /> : <IoEyeOutline color='#000' size={24} />}
            </div>
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>
      </div>
      <div className='w-full flex justify-between'>
        <button type="button" className='h-[60px] w-[30%] text-[#D71A30] text-lg mt-10 px-8 self-start bg-[#FFE2E6] rounded-[14px] flex justify-center items-center' onClick={() => dispatch(prevStep())}>
          Back
        </button>
        <button type="submit" className='h-[60px] w-[65%] text-white text-lg mt-10 px-8 self-start bg-[#D71A30] rounded-[14px] flex justify-center items-center'>
          Register
        </button>
      </div>
    </form>
  );
};

export default SectionTwo;
