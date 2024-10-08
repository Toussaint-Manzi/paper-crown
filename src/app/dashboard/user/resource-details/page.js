'use client'

import Navbar from '@/app/components/Navbar'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../../../styles/home.module.css';
import { LoadingButton } from '@mui/lab';
// import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getAllResources } from '@/lib/services/userServices';
import DashboardNavbar from '@/app/components/DashboardNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/app/components/Footer';

const ResourceDetails = () => {
    // const router = useRouter()
    const [ selectedResource, setSelectedResource ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isCommenting, setIsCommenting ] = useState(false);
    const [ comment, setComment ] = useState('');
    const searchParams = useSearchParams();
    const user = useSelector( state => state.authData.userClient)
    const resources = useSelector(state => state.allResources);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = searchParams.get('data');
            let resourceId;

            try {
                const resourceData = JSON.parse(decodeURIComponent(data));
                resourceId = resourceData.resource?.id;
            } catch (error) {
                console.error('Error parsing data:', error);
            }

            if (resourceId) {
                // Find the resource by ID from the Redux state
                const resourceFromStore = resources.find(res => res.id === resourceId);
                if (resourceFromStore) {
                    setSelectedResource(resourceFromStore);
                } else {
                    // If not found, you might want to handle it (e.g., show an error or redirect)
                    console.error('Resource not found in store');
                }
            }

            setIsLoading(false);
        };

        fetchData();
    }, [searchParams, resources]); // Ensure resources is a dependency

    useEffect(() =>{
        dispatch(getAllResources());
    },[dispatch])

    const handleComments = async() => {
        setIsCommenting(true);
        try {
            const response = await dispatch(addComment({ resourceId:selectedResource.id, content: comment }));
            if(response.payload.status === 201 || response.payload.status === 200) {
                dispatch(getAllResources());
                setComment('');
            } else {
                toast.error('Commenting failed , please try again', {
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error('Commenting failed , please try again', {
                autoClose: 3000,
              });
        } finally {
            setIsCommenting(false);
        }
    }

  return (
    <div className='bg-white h-full'>
        <ToastContainer/>
        <DashboardNavbar/>
        { isLoading ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <rect width="2.8" height="12" x="1" y="6" fill="#3b82f6">
                <animate id="svgSpinnersBarsScale0" attributeName="y" begin="0;svgSpinnersBarsScale1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/>
                <animate attributeName="height" begin="0;svgSpinnersBarsScale1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/>
            </rect>
            <rect width="2.8" height="12" x="5.8" y="6" fill="#3b82f6">
                <animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/>
                <animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/>
            </rect>
            <rect width="2.8" height="12" x="10.6" y="6" fill="#3b82f6">
                <animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/>
                <animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/>
            </rect>
            <rect width="2.8" height="12" x="15.4" y="6" fill="#3b82f6">
                <animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.3s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/>
                <animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.3s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/>
            </rect>
            <rect width="2.8" height="12" x="20.2" y="6" fill="#3b82f6">
                <animate id="svgSpinnersBarsScale1" attributeName="y" begin="svgSpinnersBarsScale0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/>
                <animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/>
            </rect>
        </svg>:
        <div className='w-full px-[10%] pt-[150px] pb-20'>
            <div className='w-full flex justify-between'>
                <div className='w-[65%]'>
                    <div className='w-full h-[400px] relative'>
                        <Image
                            src={selectedResource.thumbnail && selectedResource?.thumbnail[0] }
                            className="block h-full w-full rounded-2xl object-cover object-top cursor-pointer"
                            alt='Thumbnail'
                            fill
                        />
                    </div>
                    <div className='w-full flex justify-between my-10'>
                        <div className='w-[25%]  flex items-center justify-between'>
                            <div className=' flex justify-center items-center h-[40px] w-[130px] bg-[#FFEBE5]'>
                                <h1 className='text-black text-[14px]'>{selectedResource?.subtopic?.topic?.title}</h1>
                            </div>
                            <h1 className='text-[17px] text-black font-[300] mt-2'>{selectedResource.createdAt && selectedResource?.createdAt.substring(0,10)}</h1>
                        </div>
                        <div className='w-[20%] flex items-center justify-between'>
                            <div className='flex items-center'>
                                {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.891 13.5541L17.4789 10.1543C17.6258 9.30513 16.9728 8.52846 16.1119 8.52846H11.7943C11.3664 8.52846 11.0406 8.14436 11.1098 7.72161L11.6621 4.35114C11.7518 3.80359 11.7262 3.24329 11.5868 2.70623C11.4714 2.26133 11.1282 1.90409 10.6768 1.75907L10.5559 1.72025C10.2831 1.63261 9.98534 1.653 9.72809 1.77695C9.44501 1.91339 9.23784 2.16224 9.16109 2.4582L8.76467 3.98641C8.63851 4.47265 8.45484 4.942 8.21792 5.38548C7.87179 6.03344 7.33664 6.55201 6.78037 7.03137L5.58142 8.06454C5.24337 8.35588 5.06583 8.79213 5.1043 9.23696L5.78111 17.0642C5.84318 17.7821 6.44343 18.3333 7.16325 18.3333H11.0371C13.9382 18.3333 16.414 16.312 16.891 13.5541Z" fill="#D71A30"/>
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2.47306 7.90428C2.80744 7.88985 3.09384 8.1414 3.12268 8.47488L3.93234 17.8386C3.98435 18.4401 3.51057 18.9585 2.90559 18.9585C2.33574 18.9585 1.875 18.4962 1.875 17.9275V8.52871C1.875 8.194 2.13867 7.91871 2.47306 7.90428Z" fill="#D71A30"/>
                                </svg> */}
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.25 8.5285L3.87268 8.47467C3.84384 8.14121 3.55744 7.88965 3.22306 7.90408C2.88867 7.91851 2.625 8.1938 2.625 8.5285H3.25ZM17.6134 10.0478L17.0255 13.4476L18.2572 13.6607L18.8452 10.2608L17.6134 10.0478ZM11.7875 17.7083H7.91363V18.9583H11.7875V17.7083ZM7.15415 17.0104L6.47735 9.18317L5.232 9.29083L5.9088 17.1181L7.15415 17.0104ZM17.0255 13.4476C16.6032 15.8897 14.4011 17.7083 11.7875 17.7083V18.9583C14.976 18.9583 17.7257 16.7342 18.2572 13.6607L17.0255 13.4476ZM11.7957 4.25012L11.2434 7.6206L12.477 7.82271L13.0293 4.45224L11.7957 4.25012ZM6.73978 8.538L7.93872 7.50487L7.12274 6.55795L5.92379 7.59111L6.73978 8.538ZM10.12 4.14338L10.5164 2.61518L9.3065 2.30131L8.91007 3.82952L10.12 4.14338ZM11.1152 2.31534L11.236 2.35415L11.6183 1.16406L11.4975 1.12525L11.1152 2.31534ZM9.51958 5.67999C9.7795 5.19332 9.98142 4.67782 10.12 4.14338L8.91007 3.82952C8.79644 4.26756 8.63083 4.69077 8.41702 5.09103L9.51958 5.67999ZM11.236 2.35415C11.4913 2.43618 11.6727 2.63341 11.7323 2.8632L12.9423 2.54934C12.771 1.88933 12.2658 1.37207 11.6183 1.16406L11.236 2.35415ZM10.5164 2.61518C10.5457 2.50267 10.6269 2.39928 10.7498 2.34003L10.2072 1.21396C9.76383 1.42758 9.43083 1.82189 9.3065 2.30131L10.5164 2.61518ZM10.7498 2.34003C10.8621 2.28593 10.9943 2.27651 11.1152 2.31534L11.4975 1.12525C11.0728 0.988792 10.6093 1.02017 10.2072 1.21396L10.7498 2.34003ZM12.5448 9.1535H16.8623V7.9035H12.5448V9.1535ZM4.68234 17.8384L3.87268 8.47467L2.62732 8.58233L3.43699 17.9461L4.68234 17.8384ZM3.875 17.9272V8.5285H2.625V17.9272H3.875ZM3.43699 17.9461C3.426 17.819 3.52622 17.7083 3.65559 17.7083V18.9583C4.26057 18.9583 4.73435 18.4399 4.68234 17.8384L3.43699 17.9461ZM13.0293 4.45224C13.133 3.8188 13.1034 3.17065 12.9423 2.54934L11.7323 2.8632C11.8498 3.31603 11.8713 3.78843 11.7957 4.25012L13.0293 4.45224ZM7.91363 17.7083C7.5187 17.7083 7.18834 17.4058 7.15415 17.0104L5.9088 17.1181C5.99877 18.1585 6.86892 18.9583 7.91363 18.9583V17.7083ZM7.93872 7.50487C8.50527 7.01667 9.116 6.43556 9.51958 5.67999L8.41702 5.09103C8.12837 5.63139 7.66875 6.08744 7.12274 6.55795L7.93872 7.50487ZM18.8452 10.2608C19.0579 9.03042 18.1118 7.9035 16.8623 7.9035V9.1535C17.3345 9.1535 17.6943 9.57992 17.6134 10.0478L18.8452 10.2608ZM3.65559 17.7083C3.77743 17.7083 3.875 17.807 3.875 17.9272H2.625C2.625 18.4961 3.08574 18.9583 3.65559 18.9583V17.7083ZM11.2434 7.6206C11.112 8.42301 11.7305 9.1535 12.5448 9.1535V7.9035C12.5032 7.9035 12.4699 7.86584 12.477 7.82271L11.2434 7.6206ZM6.47735 9.18317C6.45617 8.93817 6.55396 8.69817 6.73978 8.538L5.92379 7.59111C5.43352 8.01359 5.17624 8.64608 5.232 9.29083L6.47735 9.18317Z" fill="#858484"/>
                                </svg>
                                <h1 className='text-[14px] text-[#858484] ml-1'>{selectedResource?.likes && selectedResource?.likes.length}</h1>
                            </div>
                            <div className='flex justify-start'>
                                { selectedResource && selectedResource.comments && (
                                    selectedResource?.comments.length === 0 ? (
                                        <div className='flex items-center'>
                                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.25C9.27 16.25 8.565 16.165 7.8875 16.0206L4.945 17.7894L4.98438 14.89C2.72875 13.5338 1.25 11.2913 1.25 8.75C1.25 4.60813 5.1675 1.25 10 1.25C14.8325 1.25 18.75 4.60813 18.75 8.75C18.75 12.8925 14.8325 16.25 10 16.25ZM10 0C4.4775 0 0 3.91813 0 8.75C0 11.5119 1.46563 13.9713 3.75 15.5744V20L8.13063 17.3419C8.73688 17.4419 9.36063 17.5 10 17.5C15.5225 17.5 20 13.5825 20 8.75C20 3.91813 15.5225 0 10 0ZM14.375 6.875H5.625C5.28 6.875 5 7.155 5 7.5C5 7.84562 5.28 8.125 5.625 8.125H14.375C14.72 8.125 15 7.84562 15 7.5C15 7.155 14.72 6.875 14.375 6.875ZM13.125 10.625H6.875C6.53 10.625 6.25 10.9044 6.25 11.25C6.25 11.5956 6.53 11.875 6.875 11.875H13.125C13.47 11.875 13.75 11.5956 13.75 11.25C13.75 10.9044 13.47 10.625 13.125 10.625Z" fill="#858484"/>
                                            </svg>
                                            <h1 className='text-[14px] text-[#858484] ml-1'>0</h1>
                                        </div>
                                    ) : (
                                        // selectedResource && selectedResource.comments &&
                                        selectedResource?.comments.map((comment, index) => (
                                            comment.user.avatar ? (
                                                <div
                                                    className='w-[40px] h-[40px] bg-black rounded-full relative overflow-hidden'
                                                    key={index}
                                                    style={{ marginLeft: index !== 0 ? '-15px' : '0', display: index > 2 && "none" }} // Adjust the overlap here
                                                >
                                                    <Image
                                                        src={comment.user.avatar }
                                                        alt='profile'
                                                        fill
                                                        className='object-cover'
                                                    />
                                                </div>

                                            ) : (
                                                <div 
                                                    className="flex justify-center items-center w-[38px] h-[38px] bg-[#82C1FE] rounded-full"
                                                    style={{ marginLeft: index !== 0 ? '-15px' : '0', display: index > 2 && "none" }}
                                                >
                                                    <h1 className="font-bold text-white text-xl">{comment?.user?.fullname && comment?.user?.fullname[0]}</h1>
                                                </div>
                                            )
                                        )
                                    ))
                                )
                                }
                                { [selectedResource.comments].length > 3 && (
                                    <div className='w-[40px] h-[40px] bg-gray-300 rounded-full relative overflow-hidden flex justify-center items-center' style={{ marginLeft: '-20px' }}>
                                    <span className='text-black text-sm'>+{[selectedResource.comments].length - 3}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className={`text-[28px] font-[800] text-black ${styles.myFont2}`}>{selectedResource.title}</h1>
                    </div>
                    
                </div>
                <div className='w-[30%]'>
                    <div>
                        <div className='flex w-full'>
                            <h1 className='text-[18px] text-black font-[500]'>Resources</h1>
                            <div className='flex justify-center items-center w-[30px] h-[30px] rounded-[8px] bg-[#D8E6FF] ml-5'>
                                <h1 className='text-[16px] text-black font-[500]'>{selectedResource.resources && selectedResource?.resources.length}</h1>
                            </div>
                        </div>
                        <div className='flex w-2/3 justify-start items-center my-7'>
                        { selectedResource.resources && (
                            selectedResource.resources.length === 0 ? (
                                <h1 className='text-black text-lg'>No resources</h1>
                            ):
                            selectedResource?.resources.map(resource => (
                                <>
                                    <div>
                                        <h1 className='text-[14px] text-black font-[400]'>{resource.title}</h1>
                                        <h1 className='text-[12px] text-[#B0B0B0] font-[600]'>PDF</h1>
                                    </div>
                                    <svg width="30" height="24" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M3.25 12.5C3.25 14.857 3.25 16.0355 3.98223 16.7677C4.71447 17.5 5.89297 17.5 8.25 17.5H13.25C15.607 17.5 16.7855 17.5 17.5177 16.7677C18.25 16.0355 18.25 14.857 18.25 12.5" stroke="#858484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.75 2.5V13.3333M10.75 13.3333L14.0833 9.6875M10.75 13.3333L7.41663 9.6875" stroke="#858484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </>
                            ))
                        )
                        }
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex w-full'>
                            <h1 className='text-[18px] text-black font-[500]'>Comments</h1>
                            <div className='flex justify-center items-center w-[30px] h-[30px] rounded-[8px] bg-[#D8E6FF] ml-5'>
                                <h1 className='text-[16px] text-black font-[500]'>{selectedResource.comments && selectedResource?.comments.length}</h1>
                            </div>
                        </div>
                        <textarea name="" rows={5} value={comment} id="" placeholder='Write something...' className='w-full mt-7 mb-2 px-4 py-2 outline-none text-[#000] border border-[#F4F4F4]' onChange={(e) => setComment(e.target.value)}></textarea>
                        <LoadingButton variant="contained" loading={isCommenting} sx={{ ml: 'auto', mb: 3 }} onClick={handleComments}>
                            Comment
                        </LoadingButton>
                    </div>
                    <div className='w-full h-[350px] overflow-y-scroll'>
                        { selectedResource.comments && (
                            selectedResource.comments.map((comment, index) => (
                                <div className='border border-[#F4F4F4] p-4' key={index}>
                                    <div className='flex items-center'>
                                        {comment.user.avatar ? 
                                        <div
                                            className='w-[40px] h-[40px] bg-black rounded-full relative overflow-hidden mr-2'
                                            key={index}
                                        >
                                            <Image
                                                src='/assets/images/person.png'
                                                alt='profile'
                                                fill
                                                className='object-cover'
                                            />
                                        </div>:
                                        <div className="flex justify-center items-center w-[38px] h-[38px] bg-[#82C1FE] rounded-full">
                                            <h1 className="font-bold text-white text-xl">{comment?.user?.fullname && comment?.user?.fullname[0]}</h1>
                                        </div>
                                        }
                                        <div className='ml-1'>
                                            <h1 className='text-[14px] text-black font-[400]'>
                                                { comment.user.id === user?.id ? 'You' : comment?.user?.fullname }
                                            </h1>
                                            <h1 className='text-[12px] text-[#B0B0B0] font-[600]'>{comment?.createdAt.substring(0,10)} <span className='ml-2'>{comment?.createdAt.substring(11,16)}</span></h1>
                                        </div>
                                    </div>
                                    <h1 className='text-[14px] text-[#B0B0B0] font-[400] my-3'>{comment?.content}</h1>
                                </div>
                            ))

                        ) }
                    </div>
                </div>
                
            </div>
        </div>}
        <Footer/>
    </div>
  )
}

export default ResourceDetails
