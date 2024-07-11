import React from 'react'
import styles from '../../styles/home.module.css'
import people from '../../../../public/assets/images/people.png'
import Image from 'next/image'


const Recommend = () => {
  return (
    <div className={`px-[13%] w-full ${styles.myFont}`}>
        <div className='w-[30%] mx-auto flex flex-col items-center'>
            <svg width="161" height="66" viewBox="0 0 161 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1563 32.2999C15.1563 35.7136 16.6289 38.5249 18.8377 40.9345C20.2434 42.474 21.9167 43.7458 23.4563 45.1514C23.8579 45.4861 24.3264 45.7539 24.6611 46.1555C25.5982 47.2264 25.3304 48.5651 24.0587 49.2345C23.6571 49.4353 23.2555 49.5022 22.8538 49.703C18.1014 51.6442 14.6208 54.7901 13.4829 60.078C13.2821 60.9481 13.0813 61.7514 12.8805 62.5546C12.7466 63.0901 12.5458 63.6925 12.345 64.228C12.0773 64.9642 11.5418 65.4997 10.6716 65.4328C9.80148 65.3659 9.33294 64.8304 9.13212 64.0272C8.86438 63.0231 8.66358 61.9522 8.39583 60.8812C7.72648 58.1369 7.05714 55.3925 5.71844 52.849C4.84828 51.1087 3.71038 49.6361 2.03701 48.4982C0.430558 47.4272 0.363623 46.0885 1.83619 44.8168C3.04103 43.8127 4.44667 42.9426 5.71844 42.0055C8.73052 39.7966 10.4708 36.8515 10.7386 33.0362C10.8725 32.4338 10.8725 31.6306 11.0063 30.8273C11.1402 29.2878 11.341 29.087 12.6797 29.0201C14.0184 28.8862 14.7547 29.4217 15.0224 30.6265C15.1563 31.162 15.0894 31.7644 15.1563 32.2999Z" fill="black"/>
                <path d="M78.2699 42.4114C78.0648 40.6333 77.9964 38.7868 77.7228 37.0771C77.2441 34.2048 75.8763 31.948 73.2776 30.5118C71.0891 29.3492 68.9007 28.3234 66.6439 27.2292C65.96 26.8872 65.2077 26.6137 64.5239 26.2717C63.9768 25.9982 63.6348 25.5195 63.84 24.904C63.9768 24.4937 64.4555 24.2201 64.7974 23.8782C64.8658 23.8098 65.0026 23.8098 65.1394 23.8098C70.542 22.7156 74.1666 19.2277 76.6286 14.5773C78.817 10.5424 80.5951 6.30236 82.5784 2.19906C82.8519 1.58356 83.1255 0.968065 83.4674 0.489347C83.6726 0.215794 84.2197 -0.0577596 84.5616 0.0106287C84.9036 0.0790171 85.3139 0.489347 85.3823 0.899677C85.5191 1.31001 85.4507 1.85711 85.3823 2.33583C85.2455 3.29327 85.1088 4.2507 84.9036 5.27653C84.0829 9.31144 84.9036 13.2096 85.7243 17.1077C86.1346 18.8174 87.1604 20.0484 88.6649 20.8691C90.5798 21.8949 92.5631 22.5788 94.6831 23.0575C95.367 23.1943 96.3244 23.1943 96.3928 24.2201C96.4612 25.3143 95.5038 25.5879 94.7515 25.793C91.4689 26.6137 89.1437 28.8021 87.0236 31.3325C84.8352 33.9312 83.1255 36.8719 82.0313 40.0862C81.4158 41.8643 80.8687 43.6424 80.2532 45.3521C80.1164 45.694 80.1164 46.036 79.9112 46.2411C79.6377 46.5831 79.159 47.0618 78.8854 46.9934C78.5435 46.925 78.2699 46.3779 78.0648 45.9676C77.928 45.694 77.9964 45.3521 77.9964 45.0102C77.9964 44.1211 77.9964 43.2321 77.9964 42.4114C78.1331 42.4114 78.2015 42.4114 78.2699 42.4114Z" fill="#D71A30"/>
                <path d="M150.156 32.2999C150.156 35.7136 151.629 38.5249 153.838 40.9345C155.243 42.474 156.917 43.7458 158.456 45.1514C158.858 45.4861 159.326 45.7539 159.661 46.1555C160.598 47.2264 160.33 48.5651 159.059 49.2345C158.657 49.4353 158.255 49.5022 157.854 49.703C153.101 51.6442 149.621 54.7901 148.483 60.078C148.282 60.9481 148.081 61.7514 147.88 62.5546C147.747 63.0901 147.546 63.6925 147.345 64.228C147.077 64.9642 146.542 65.4997 145.672 65.4328C144.801 65.3659 144.333 64.8304 144.132 64.0272C143.864 63.0231 143.664 61.9522 143.396 60.8812C142.726 58.1369 142.057 55.3925 140.718 52.849C139.848 51.1087 138.71 49.6361 137.037 48.4982C135.431 47.4272 135.364 46.0885 136.836 44.8168C138.041 43.8127 139.447 42.9426 140.718 42.0055C143.731 39.7966 145.471 36.8515 145.739 33.0362C145.872 32.4338 145.872 31.6306 146.006 30.8273C146.14 29.2878 146.341 29.087 147.68 29.0201C149.018 28.8862 149.755 29.4217 150.022 30.6265C150.156 31.162 150.089 31.7644 150.156 32.2999Z" fill="black"/>
            </svg>
            <h1 className={`my-10 text-[#D71A30] text-[32px] font-[600] ${styles.myFont2}`}>Recommended for you!</h1>
        </div>
        <div className='flex'>
            <div className='relative w-[256px] h-[265px]'>
                <Image
                    src={people}
                    layout="fill"
                    objectFit="contain"
                    alt="Person"
                />
            </div>
            <div className='ml-5 py-3 w-[25%] flex flex-col justify-between'>
                <h1 className='text-xs font-medium text-[#9D9D9D]'>07 June 2023</h1>
                <h1 className='text-[20px] font-medium text-black'>Gender transformative Approaches</h1>
                <h1 className='text-normal  text-[#000]'>Diam ac ut ac sed magna arcu lacus ut nisl. Aliquam viverra et sed scelerisque. Consequat pulvinar tellus laoreet orci. Eget faucibus proin fermentum urna mi. Ac imperdiet risus mi non velit sed. Senectus laoreet dui dui malesuada mauris proin accumsan.</h1>
                <div className='flex justify-between w-2/3'>
                    <div className='flex items-center'>
                        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.891 13.5541L17.4789 10.1543C17.6258 9.30513 16.9728 8.52846 16.1119 8.52846H11.7943C11.3664 8.52846 11.0406 8.14436 11.1098 7.72161L11.6621 4.35114C11.7518 3.80359 11.7262 3.24329 11.5868 2.70623C11.4714 2.26133 11.1282 1.90409 10.6768 1.75907L10.5559 1.72025C10.2831 1.63261 9.98534 1.653 9.72809 1.77695C9.44501 1.91339 9.23784 2.16224 9.16109 2.4582L8.76467 3.98641C8.63851 4.47265 8.45484 4.942 8.21792 5.38548C7.87179 6.03344 7.33664 6.55201 6.78037 7.03137L5.58142 8.06454C5.24337 8.35588 5.06583 8.79213 5.1043 9.23696L5.78111 17.0642C5.84318 17.7821 6.44343 18.3333 7.16325 18.3333H11.0371C13.9382 18.3333 16.414 16.312 16.891 13.5541Z" fill="#D71A30"/>
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2.47306 7.90428C2.80744 7.88985 3.09384 8.1414 3.12268 8.47488L3.93234 17.8386C3.98435 18.4401 3.51057 18.9585 2.90559 18.9585C2.33574 18.9585 1.875 18.4962 1.875 17.9275V8.52871C1.875 8.194 2.13867 7.91871 2.47306 7.90428Z" fill="#D71A30"/>
                        </svg>
                        <h1 className='text-[16px] text-[#9D9D9D] ml-1'>123</h1>
                    </div>
                    <div className='flex items-center'>
                        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.891 13.5541L17.4789 10.1543C17.6258 9.30513 16.9728 8.52846 16.1119 8.52846H11.7943C11.3664 8.52846 11.0406 8.14436 11.1098 7.72161L11.6621 4.35114C11.7518 3.80359 11.7262 3.24329 11.5868 2.70623C11.4714 2.26133 11.1282 1.90409 10.6768 1.75907L10.5559 1.72025C10.2831 1.63261 9.98534 1.653 9.72809 1.77695C9.44501 1.91339 9.23784 2.16224 9.16109 2.4582L8.76467 3.98641C8.63851 4.47265 8.45484 4.942 8.21792 5.38548C7.87179 6.03344 7.33664 6.55201 6.78037 7.03137L5.58142 8.06454C5.24337 8.35588 5.06583 8.79213 5.1043 9.23696L5.78111 17.0642C5.84318 17.7821 6.44343 18.3333 7.16325 18.3333H11.0371C13.9382 18.3333 16.414 16.312 16.891 13.5541Z" fill="#D71A30"/>
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2.47306 7.90428C2.80744 7.88985 3.09384 8.1414 3.12268 8.47488L3.93234 17.8386C3.98435 18.4401 3.51057 18.9585 2.90559 18.9585C2.33574 18.9585 1.875 18.4962 1.875 17.9275V8.52871C1.875 8.194 2.13867 7.91871 2.47306 7.90428Z" fill="#D71A30"/>
                        </svg>
                        <h1 className='text-[16px] text-[#9D9D9D] ml-1'>123</h1>
                    </div>
                    <div className='flex items-center'>
                        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.891 13.5541L17.4789 10.1543C17.6258 9.30513 16.9728 8.52846 16.1119 8.52846H11.7943C11.3664 8.52846 11.0406 8.14436 11.1098 7.72161L11.6621 4.35114C11.7518 3.80359 11.7262 3.24329 11.5868 2.70623C11.4714 2.26133 11.1282 1.90409 10.6768 1.75907L10.5559 1.72025C10.2831 1.63261 9.98534 1.653 9.72809 1.77695C9.44501 1.91339 9.23784 2.16224 9.16109 2.4582L8.76467 3.98641C8.63851 4.47265 8.45484 4.942 8.21792 5.38548C7.87179 6.03344 7.33664 6.55201 6.78037 7.03137L5.58142 8.06454C5.24337 8.35588 5.06583 8.79213 5.1043 9.23696L5.78111 17.0642C5.84318 17.7821 6.44343 18.3333 7.16325 18.3333H11.0371C13.9382 18.3333 16.414 16.312 16.891 13.5541Z" fill="#D71A30"/>
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2.47306 7.90428C2.80744 7.88985 3.09384 8.1414 3.12268 8.47488L3.93234 17.8386C3.98435 18.4401 3.51057 18.9585 2.90559 18.9585C2.33574 18.9585 1.875 18.4962 1.875 17.9275V8.52871C1.875 8.194 2.13867 7.91871 2.47306 7.90428Z" fill="#D71A30"/>
                        </svg>
                        <h1 className='text-[16px] text-[#9D9D9D] ml-1'>123</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recommend
