import React from 'react'

const SectionTwo = () => {
  return (
    <form action="" className='w-[50%] mt-14'>
        <div className='w-full flex flex-col justify-between'>
            <div className='w-full mb-3'>
                <label className='text-[18px] text-black'>What best describes your organisation/work? </label>
                <select id="countries" className="text-[#A4A4A4] mt-3 px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none block w-full p-2.5">
                    <option selected>Select</option>
                    <option value="US">Male</option>
                    <option value="CA">Female</option>
                    <option value="FR">Non-Binary</option>
                    <option value="DE">Other</option>
                </select>
            </div>
            <div className='w-full mb-3'>
                <label className='text-[18px] text-black'>If you work for an organisation, what organisation?</label>
                <input type="email" name="" id="" placeholder='Enter Organisation name' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
            </div>
            <div className='w-full mb-3'>
                <label className='text-[18px] text-black'>Position</label>
                <input type="text" name="" id="" placeholder='Enter your position in the organisation' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
            </div>
            <div className='w-full mb-3'>
                <label className='text-[18px] text-black'>Password</label>
                <input type="password" name="" id="" placeholder='Create password' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
            </div>
            <div className='w-full'>
                <label className='text-[18px] text-black'>Confirm Password</label>
                <input type="password" name="" id="" placeholder='Create password' className='w-full mt-3 text-[#A4A4A4] px-5 h-[50px] bg-[#f0f8fc] rounded-lg placeholder:text-[#A4A4A4] outline-none'/>
            </div>
        </div>
        <div className='w-full flex justify-between'>
            <button className='h-[60px] w-[30%] text-[#D71A30] text-lg mt-10 px-8 self-start bg-[#FFE2E6] rounded-[14px] flex justify-center items-center'>
                Back
            </button>
            <button className='h-[60px] w-[65%] text-white text-lg mt-10 px-8 self-start bg-[#D71A30] rounded-[14px] flex justify-center items-center'>
                Register
            </button>
        </div>
    </form>
  )
}

export default SectionTwo
