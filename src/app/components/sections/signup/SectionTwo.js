'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../../../lib/hooks';
import { updateSectionTwo, nextStep, prevStep } from '../../../../lib/features/signup/signupStepSlice';
import { sectionTwoSchema } from '../../../../lib/validations/validationSchemas';
import axios from 'axios';

const SectionTwo = () => {
  const dispatch = useAppDispatch();
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
            <option value="">Select</option>
            <option value="Org1">Org1</option>
            <option value="Org2">Org2</option>
            <option value="Org3">Org3</option>
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
        <div className='w-full mb-3'>
          <label className='text-[18px] text-black'>Password</label>
          <input type="password" name="password" placeholder='Create password' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none' {...register('password')} />
          {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
        </div>
        <div className='w-full'>
          <label className='text-[18px] text-black'>Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder='Confirm password' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none' {...register('confirmPassword')} />
          {errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword.message}</p>}
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
