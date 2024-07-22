import Navbar from '@/app/components/Navbar'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";
import Image from 'next/image';

const Home = () => {
    const resources = [1,2,3,4,5,6,7,8,9,11,23,45,56,78,89,65,34,55,67,86,54,32,12,45,67,89,266,666,6777,8990,605,432,112];
  return (
    <div className='bg-white h-full'>
        <Navbar/>
        <div className='px-[15%] pt-[150px]'>
            <div className='w-full flex justify-between'>
                <div className=''>
                    <h1 className='text-[20px] text-black font-[700]'>Morning ! <span className='font-[300] ml-3'>Yvonne</span></h1>
                    <h1 className='text-[17px] text-black font-[300] mt-2'>June 17, 2024 </h1>
                </div>
                <div className='flex items-center px-3 border border-[#E0E0E0] h-[50px] rounded-[14px] w-[350px]'>
                    <CiSearch className='text-[#9C9C9C] w-[24px] h-[24px]'/>
                    <input type="text" name="" id="" className='h-[40px] text-[#9C9C9C] font-[300] ml-2 w-[350px] outline-none border-none' placeholder='Search by topic...'/>
                </div>
            </div>
            <div className='w-full flex justify-start my-8'>
                {/* Sidebar for filters */}
                <div className='h-[400px] w-[230px] px-3 border border-[#E0E0E0] rounded-[14px]'>

                </div>
                <div className='w-full ml-16'>
                    <div className='w-full flex justify-between'>
                        <div className='flex w-full'>
                            <h1 className='text-[20px] text-black font-[500]'>Explore <span className='font-[500] ml-3'>Social work Resourses</span></h1>
                            <div className='flex justify-center items-center w-[30px] h-[30px] rounded-[8px] bg-[#D8E6FF] ml-5'>
                                <h1 className='text-[16px] text-black font-[500]'>{resources.length}</h1>
                            </div>
                        </div>
                        <div>
                            <select id="filter" className="text-black px-3 bg-inherit border border-[#E0E0E0] h-[50px] rounded-[14px]  placeholder:text-[#A4A4A4] outline-none block p-2.5">
                                <option value="US">Recent</option>
                                <option value="CA">Oldest</option>
                                <option value="FR">Popular</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-12 mt-10'>
                        { resources.map((res,index)=> (
                            <div>
                                <div
                                    className='w-[350px] h-[210px] flex flex-col justify-between p-3'
                                    style={{
                                        backgroundColor: '#F9F0EC',
                                        backgroundImage: 'url(/assets/images/person.png)',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        borderRadius: '14px'
                                    }}
                                    key={index}
                                >
                                    <div className='flex justify-between items-center w-[150px] h-[35px] bg-black rounded-[10px] self-end px-4'>
                                        <svg width="22" height="22" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 1.5V3" stroke="#9A9A9A" stroke-width="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8.5 1.5V3" stroke="#9A9A9A" stroke-width="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M2.25 5.04492H10.75" stroke="#9A9A9A" stroke-opacity="0.51" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M11 4.75V9C11 10.5 10.25 11.5 8.5 11.5H4.5C2.75 11.5 2 10.5 2 9V4.75C2 3.25 2.75 2.25 4.5 2.25H8.5C10.25 2.25 11 3.25 11 4.75Z" stroke="#9A9A9A" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8.34729 7.3501H8.35179" stroke="#9A9A9A" stroke-opacity="0.51" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8.34729 8.8501H8.35179" stroke="#9A9A9A" stroke-opacity="0.51" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M6.4978 7.3501H6.5023" stroke="#9A9A9A" stroke-opacity="0.51" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M6.4978 8.8501H6.5023" stroke="#9A9A9A" stroke-opacity="0.51" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M4.64709 7.3501H4.65159" stroke="#9A9A9A" stroke-opacity="0.51" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M4.64697 8.8501H4.65146" stroke="#9A9A9A" stroke-opacity="0.51" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <h1 className='text-[16px] text-[#9A9A9A] font-[500]'>07 june 2023</h1>
                                    </div>
                                    <div className='w-full px-[3%]'>
                                        <div className='flex flex-col items-start justify-center w-full h-[80px] rounded-[10px] pl-3' style={{ background:'rgba(0, 0, 0, 0.5)' }}>
                                            <h1 className='text-[20px] text-white font-[600]'>Mobilizing Communities</h1>
                                            <h1 className='text-[17px] text-white font-[300]'>Examine traditional Rwandan crafts...</h1>

                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between w-[80%] mt-3 mx-auto'>
                                    <div className='flex items-center'>
                                        {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.891 13.5541L17.4789 10.1543C17.6258 9.30513 16.9728 8.52846 16.1119 8.52846H11.7943C11.3664 8.52846 11.0406 8.14436 11.1098 7.72161L11.6621 4.35114C11.7518 3.80359 11.7262 3.24329 11.5868 2.70623C11.4714 2.26133 11.1282 1.90409 10.6768 1.75907L10.5559 1.72025C10.2831 1.63261 9.98534 1.653 9.72809 1.77695C9.44501 1.91339 9.23784 2.16224 9.16109 2.4582L8.76467 3.98641C8.63851 4.47265 8.45484 4.942 8.21792 5.38548C7.87179 6.03344 7.33664 6.55201 6.78037 7.03137L5.58142 8.06454C5.24337 8.35588 5.06583 8.79213 5.1043 9.23696L5.78111 17.0642C5.84318 17.7821 6.44343 18.3333 7.16325 18.3333H11.0371C13.9382 18.3333 16.414 16.312 16.891 13.5541Z" fill="#D71A30"/>
                                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2.47306 7.90428C2.80744 7.88985 3.09384 8.1414 3.12268 8.47488L3.93234 17.8386C3.98435 18.4401 3.51057 18.9585 2.90559 18.9585C2.33574 18.9585 1.875 18.4962 1.875 17.9275V8.52871C1.875 8.194 2.13867 7.91871 2.47306 7.90428Z" fill="#D71A30"/>
                                        </svg> */}
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.25 8.5285L3.87268 8.47467C3.84384 8.14121 3.55744 7.88965 3.22306 7.90408C2.88867 7.91851 2.625 8.1938 2.625 8.5285H3.25ZM17.6134 10.0478L17.0255 13.4476L18.2572 13.6607L18.8452 10.2608L17.6134 10.0478ZM11.7875 17.7083H7.91363V18.9583H11.7875V17.7083ZM7.15415 17.0104L6.47735 9.18317L5.232 9.29083L5.9088 17.1181L7.15415 17.0104ZM17.0255 13.4476C16.6032 15.8897 14.4011 17.7083 11.7875 17.7083V18.9583C14.976 18.9583 17.7257 16.7342 18.2572 13.6607L17.0255 13.4476ZM11.7957 4.25012L11.2434 7.6206L12.477 7.82271L13.0293 4.45224L11.7957 4.25012ZM6.73978 8.538L7.93872 7.50487L7.12274 6.55795L5.92379 7.59111L6.73978 8.538ZM10.12 4.14338L10.5164 2.61518L9.3065 2.30131L8.91007 3.82952L10.12 4.14338ZM11.1152 2.31534L11.236 2.35415L11.6183 1.16406L11.4975 1.12525L11.1152 2.31534ZM9.51958 5.67999C9.7795 5.19332 9.98142 4.67782 10.12 4.14338L8.91007 3.82952C8.79644 4.26756 8.63083 4.69077 8.41702 5.09103L9.51958 5.67999ZM11.236 2.35415C11.4913 2.43618 11.6727 2.63341 11.7323 2.8632L12.9423 2.54934C12.771 1.88933 12.2658 1.37207 11.6183 1.16406L11.236 2.35415ZM10.5164 2.61518C10.5457 2.50267 10.6269 2.39928 10.7498 2.34003L10.2072 1.21396C9.76383 1.42758 9.43083 1.82189 9.3065 2.30131L10.5164 2.61518ZM10.7498 2.34003C10.8621 2.28593 10.9943 2.27651 11.1152 2.31534L11.4975 1.12525C11.0728 0.988792 10.6093 1.02017 10.2072 1.21396L10.7498 2.34003ZM12.5448 9.1535H16.8623V7.9035H12.5448V9.1535ZM4.68234 17.8384L3.87268 8.47467L2.62732 8.58233L3.43699 17.9461L4.68234 17.8384ZM3.875 17.9272V8.5285H2.625V17.9272H3.875ZM3.43699 17.9461C3.426 17.819 3.52622 17.7083 3.65559 17.7083V18.9583C4.26057 18.9583 4.73435 18.4399 4.68234 17.8384L3.43699 17.9461ZM13.0293 4.45224C13.133 3.8188 13.1034 3.17065 12.9423 2.54934L11.7323 2.8632C11.8498 3.31603 11.8713 3.78843 11.7957 4.25012L13.0293 4.45224ZM7.91363 17.7083C7.5187 17.7083 7.18834 17.4058 7.15415 17.0104L5.9088 17.1181C5.99877 18.1585 6.86892 18.9583 7.91363 18.9583V17.7083ZM7.93872 7.50487C8.50527 7.01667 9.116 6.43556 9.51958 5.67999L8.41702 5.09103C8.12837 5.63139 7.66875 6.08744 7.12274 6.55795L7.93872 7.50487ZM18.8452 10.2608C19.0579 9.03042 18.1118 7.9035 16.8623 7.9035V9.1535C17.3345 9.1535 17.6943 9.57992 17.6134 10.0478L18.8452 10.2608ZM3.65559 17.7083C3.77743 17.7083 3.875 17.807 3.875 17.9272H2.625C2.625 18.4961 3.08574 18.9583 3.65559 18.9583V17.7083ZM11.2434 7.6206C11.112 8.42301 11.7305 9.1535 12.5448 9.1535V7.9035C12.5032 7.9035 12.4699 7.86584 12.477 7.82271L11.2434 7.6206ZM6.47735 9.18317C6.45617 8.93817 6.55396 8.69817 6.73978 8.538L5.92379 7.59111C5.43352 8.01359 5.17624 8.64608 5.232 9.29083L6.47735 9.18317Z" fill="#858484"/>
                                        </svg>
                                        <h1 className='text-[14px] text-[#858484] ml-1'>123</h1>
                                    </div>
                                    <div className='flex items-center'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.50016 9.99996C7.50016 11.1505 6.56742 12.0833 5.41683 12.0833C4.26624 12.0833 3.3335 11.1505 3.3335 9.99996C3.3335 8.84938 4.26624 7.91663 5.41683 7.91663C6.56742 7.91663 7.50016 8.84938 7.50016 9.99996Z" stroke="#858484" stroke-width="1.5"/>
                                            <path d="M11.6667 5.41663L7.5 8.33329" stroke="#858484" stroke-width="1.5" stroke-linecap="round"/>
                                            <path d="M11.6667 14.5833L7.5 11.6666" stroke="#858484" stroke-width="1.5" stroke-linecap="round"/>
                                            <path d="M15.8332 15.4167C15.8332 16.5673 14.9004 17.5 13.7498 17.5C12.5993 17.5 11.6665 16.5673 11.6665 15.4167C11.6665 14.2661 12.5993 13.3334 13.7498 13.3334C14.9004 13.3334 15.8332 14.2661 15.8332 15.4167Z" stroke="#858484" stroke-width="1.5"/>
                                            <path d="M15.8332 4.58333C15.8332 5.73392 14.9004 6.66667 13.7498 6.66667C12.5993 6.66667 11.6665 5.73392 11.6665 4.58333C11.6665 3.43274 12.5993 2.5 13.7498 2.5C14.9004 2.5 15.8332 3.43274 15.8332 4.58333Z" stroke="#858484" stroke-width="1.5"/>
                                        </svg>
                                        <h1 className='text-[14px] text-[#858484] ml-1'>Share</h1>
                                    </div>
                                    <div className='flex items-center'>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M3.25 12.5C3.25 14.857 3.25 16.0355 3.98223 16.7677C4.71447 17.5 5.89297 17.5 8.25 17.5H13.25C15.607 17.5 16.7855 17.5 17.5177 16.7677C18.25 16.0355 18.25 14.857 18.25 12.5" stroke="#858484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.75 2.5V13.3333M10.75 13.3333L14.0833 9.6875M10.75 13.3333L7.41663 9.6875" stroke="#858484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <h1 className='text-[14px] text-[#858484] ml-1'>Download</h1>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
