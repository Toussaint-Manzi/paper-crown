'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../../../lib/hooks';
import { updateSectionTwo, nextStep, prevStep } from '../../../../lib/features/signup/signupStepSlice';
import { sectionTwoSchema } from '../../../../lib/validations/validationSchemas';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'; // Import icons
import { userSignUpAsync } from '@/lib/services/authService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'



const SectionTwo = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
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
    try {
      const response = await dispatch(userSignUpAsync({formData: completeFormData}));
      if (response.payload.status === 201) {
        toast.success('User registered successfully', {
          autoClose: 3000,
        });
        router.push('/login');
      } else if (response.payload.response.status === 409) {
        toast.error('User already exists', {
          autoClose: 3000,
        });
      }else if (response.payload.response.status === 400 || response.payload.response.status === 404 || response.payload.response.status === 422){
        toast.error(` ${response.payload.response.data.errors[0].message}`, {
          autoClose: 3000,
        });
      } else {
        toast.error('Signup failed, please Try again', {
          autoClose: 3000,
        });
      }
    } catch (error) {
        toast.error('Signup failed, Please Check your internet connections ', {
          autoClose: 3000,
        });
    }
  };

  return (
    <form className='w-[50%] mt-14' onSubmit={handleSubmit(handleSubmitForm)}>
        <ToastContainer/>
      <div className='w-full flex flex-col justify-between'>
        <div className='w-full mb-3'>
          <label className='text-[18px] text-black'>What best describes your organisation/work?</label>
          <select name="organisationDescr" className="text-[#A4A4A4] mt-3 px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none block w-full p-2.5" {...register('organisationDescr')}>
            <option value="">Organisation/work</option>
            <option value="International non-governmental organisation or network<">International non-governmental organisation or network</option>
            <option value="Local or national non-governmental organisation or network">Local or national non-governmental organisation or network</option>
            <option value="Foundation or Funding agency">Foundation or Funding agency</option>
            <option value="Government agency<">Government agency</option>
            <option value="UN or other multilateral institution">UN or other multilateral institution</option>
            <option value="Academia or research institution">Academia or research institution</option>
            <option value="Independent consultant">Independent consultant</option>
          </select>
          {errors.organisationDescr && <p className='text-red-600'>{errors.organisationDescr.message}</p>}
        </div>
        <div className='w-full mb-3'>
          <label className='text-[18px] text-black'>If you work for an organisation, what organisation?</label>
          <input type="text" name="organisation" placeholder='Enter Organisation name' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none' {...register('organisation')} />
          {errors.organisation && <p className='text-red-600'>{errors.organisation.message}</p>}
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
                {...register('confirmPassword')}
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
