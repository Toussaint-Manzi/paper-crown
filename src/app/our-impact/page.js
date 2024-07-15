import React from 'react';
import styles from '../styles/home.module.css';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Footer from '../components/Footer';
import decor from '../../../public/assets/images/decor.png';


const OurImpact = () => {
  return (
    <div className={`w-full bg-white h-full ${styles.myFont}`}>
        <Navbar/>
        <div className='w-full px-[13%] pt-[150px]'>
            <div className='w-[80%] mx-auto'>
                <h1 className={`text-center text-[#D71A30] text-[32px]  font-[700] ${styles.myFont2}`}>Impact Data from the Field</h1>
                <h1 className={`text-center text-[#343434] text-[24px]  font-[700] my-10 ${styles.myFont2}`}>Below we highlight impact data from our community work in Rwanda that demonstrates the power of our approach and the importance of transforming hearts, minds and communities from the grassroots up!</h1>
            </div>
            <div className='w-full flex justify-between'>
                <div className="w-[35%] h-[350px] p-1 md:p-2 relative">
                    <Image
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center cursor-pointer"
                        src="/assets/images/people.png"
                        fill
                    />
                </div>
                <div className="w-[62%] h-[350px] p-1 md:p-2 relative">
                    <Image
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center cursor-pointer"
                        src="/assets/images/people.png"
                        fill
                    />
                </div>
            </div>
            <div className='my-32'>
                <div className='w-[30%] mx-auto flex flex-col items-center'>
                    <svg width="131" height="43" viewBox="0 0 161 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1563 32.2999C15.1563 35.7136 16.6289 38.5249 18.8377 40.9345C20.2434 42.474 21.9167 43.7458 23.4563 45.1514C23.8579 45.4861 24.3264 45.7539 24.6611 46.1555C25.5982 47.2264 25.3304 48.5651 24.0587 49.2345C23.6571 49.4353 23.2555 49.5022 22.8538 49.703C18.1014 51.6442 14.6208 54.7901 13.4829 60.078C13.2821 60.9481 13.0813 61.7514 12.8805 62.5546C12.7466 63.0901 12.5458 63.6925 12.345 64.228C12.0773 64.9642 11.5418 65.4997 10.6716 65.4328C9.80148 65.3659 9.33294 64.8304 9.13212 64.0272C8.86438 63.0231 8.66358 61.9522 8.39583 60.8812C7.72648 58.1369 7.05714 55.3925 5.71844 52.849C4.84828 51.1087 3.71038 49.6361 2.03701 48.4982C0.430558 47.4272 0.363623 46.0885 1.83619 44.8168C3.04103 43.8127 4.44667 42.9426 5.71844 42.0055C8.73052 39.7966 10.4708 36.8515 10.7386 33.0362C10.8725 32.4338 10.8725 31.6306 11.0063 30.8273C11.1402 29.2878 11.341 29.087 12.6797 29.0201C14.0184 28.8862 14.7547 29.4217 15.0224 30.6265C15.1563 31.162 15.0894 31.7644 15.1563 32.2999Z" fill="black"/>
                        <path d="M78.2699 42.4114C78.0648 40.6333 77.9964 38.7868 77.7228 37.0771C77.2441 34.2048 75.8763 31.948 73.2776 30.5118C71.0891 29.3492 68.9007 28.3234 66.6439 27.2292C65.96 26.8872 65.2077 26.6137 64.5239 26.2717C63.9768 25.9982 63.6348 25.5195 63.84 24.904C63.9768 24.4937 64.4555 24.2201 64.7974 23.8782C64.8658 23.8098 65.0026 23.8098 65.1394 23.8098C70.542 22.7156 74.1666 19.2277 76.6286 14.5773C78.817 10.5424 80.5951 6.30236 82.5784 2.19906C82.8519 1.58356 83.1255 0.968065 83.4674 0.489347C83.6726 0.215794 84.2197 -0.0577596 84.5616 0.0106287C84.9036 0.0790171 85.3139 0.489347 85.3823 0.899677C85.5191 1.31001 85.4507 1.85711 85.3823 2.33583C85.2455 3.29327 85.1088 4.2507 84.9036 5.27653C84.0829 9.31144 84.9036 13.2096 85.7243 17.1077C86.1346 18.8174 87.1604 20.0484 88.6649 20.8691C90.5798 21.8949 92.5631 22.5788 94.6831 23.0575C95.367 23.1943 96.3244 23.1943 96.3928 24.2201C96.4612 25.3143 95.5038 25.5879 94.7515 25.793C91.4689 26.6137 89.1437 28.8021 87.0236 31.3325C84.8352 33.9312 83.1255 36.8719 82.0313 40.0862C81.4158 41.8643 80.8687 43.6424 80.2532 45.3521C80.1164 45.694 80.1164 46.036 79.9112 46.2411C79.6377 46.5831 79.159 47.0618 78.8854 46.9934C78.5435 46.925 78.2699 46.3779 78.0648 45.9676C77.928 45.694 77.9964 45.3521 77.9964 45.0102C77.9964 44.1211 77.9964 43.2321 77.9964 42.4114C78.1331 42.4114 78.2015 42.4114 78.2699 42.4114Z" fill="#D71A30"/>
                        <path d="M150.156 32.2999C150.156 35.7136 151.629 38.5249 153.838 40.9345C155.243 42.474 156.917 43.7458 158.456 45.1514C158.858 45.4861 159.326 45.7539 159.661 46.1555C160.598 47.2264 160.33 48.5651 159.059 49.2345C158.657 49.4353 158.255 49.5022 157.854 49.703C153.101 51.6442 149.621 54.7901 148.483 60.078C148.282 60.9481 148.081 61.7514 147.88 62.5546C147.747 63.0901 147.546 63.6925 147.345 64.228C147.077 64.9642 146.542 65.4997 145.672 65.4328C144.801 65.3659 144.333 64.8304 144.132 64.0272C143.864 63.0231 143.664 61.9522 143.396 60.8812C142.726 58.1369 142.057 55.3925 140.718 52.849C139.848 51.1087 138.71 49.6361 137.037 48.4982C135.431 47.4272 135.364 46.0885 136.836 44.8168C138.041 43.8127 139.447 42.9426 140.718 42.0055C143.731 39.7966 145.471 36.8515 145.739 33.0362C145.872 32.4338 145.872 31.6306 146.006 30.8273C146.14 29.2878 146.341 29.087 147.68 29.0201C149.018 28.8862 149.755 29.4217 150.022 30.6265C150.156 31.162 150.089 31.7644 150.156 32.2999Z" fill="black"/>
                    </svg>
                    <h1 className={`my-10 text-[#D71A30] text-center text-[28px] font-[600] ${styles.myFont2}`}>Some of the tools we use to assess our impact include:</h1>
                </div>
                <div className='w-full grid grid-cols-3 gap-4 my-4'>
                    <div className="bg-[#F5F5F5] p-5 rounded-xl">
                        <h1 className='text-black text-[18px]'>Focus group discussions with skilled Rwandan facilitators, engaging boys and girls separately</h1>
                    </div>
                    <div className="bg-[#F5F5F5] p-5 rounded-xl">
                        <h1 className='text-black text-[18px]'>KAP assessments (specific measurement of changes in Knowledge, Attitudes and Practices)</h1>
                    </div>
                    <div className="bg-[#F5F5F5] p-5 rounded-xl">
                        <h1 className='text-black text-[18px]'>Self-esteem assessments based on standardized best practice tools, adapted for the Rwandan context</h1>
                    </div>
                    <div className="bg-[#F5F5F5] p-5 rounded-xl">
                        <h1 className='text-black text-[18px]'>Specific knowledge tests that assess retention of key pieces of information, such as where and how to report violence</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center w-full mx-auto h-[250px] rounded-[40px] px-[13%] bg-black my-24'>
                <div className='relative w-[110px] h-[130px]'>
                    <Image
                        src={decor}
                        layout="fill"
                        objectFit="contain"
                        alt="Person"
                    />
                </div>
                <div className='w-[70%] mx-auto'>
                    <h1 className={`text-white text-center font-semibold text-[24px] w-[100%] mx-auto my-4 ${styles.myFont2}`}>I want to keep the conversation going, keep pushing them [parents], there’s nothing men can do that women can’t do – and I will keep pushing this until they change their mindsets.</h1>
                    <h1 className={`text-[#A8A8A8] text-center text-[18px] w-[100%] mx-auto my-4`}>adolescent girl in rural Rwanda, aged 14-17</h1>
                </div>
                <div className='relative w-[110px] h-[130px]'>
                    <Image
                        src={decor}
                        layout="fill"
                        objectFit="contain"
                        alt="Person"
                    />
                </div>
            </div>
            <div className='w-full flex justify-between my-20'>
                <div className='w-[40%] flex flex-col justify-start items-start'>
                    <h1 className={`text-[32px] text-[#D71A30] font-semibold xs:text-[25px] ${styles.myFont2}`}>Major and measurable shifts in harmful attitudes and beliefs</h1>
                    <div className='w-[80%] h-[400px] relative my-10'>
                        <Image
                            alt="gallery"
                            className="block h-full w-full rounded-2xl object-cover object-center cursor-pointer"
                            src="/assets/images/people.png"
                            fill
                        />
                    </div>
                </div>
                <div className='w-[50%]'>
                    <h1 className='text-[18px] text-[#444343] mb-10'>Our work aims to influence both the hearts and minds of young people on a deep, personal level that will stand the test of time long after we have worked with them. Our approach is participatory, conversational, vulnerable, challenging, honest and transformative - and it works.</h1>
                    <h1 className='text-[18px] text-[#D71A30] font-[600] mb-3'>Some highlights of our impact in terms of attitudes and beliefs include:</h1>
                    <h1 className='text-[18px] text-[#444343] mb-5'>Significant improvements among both boys and girls from baseline to endline focus group discussions, related to gender inequality and stereotypes, power and agency, decision making, gender-based violence, victim blaming, consent and youth leadership in the community.</h1>
                    <h1 className='text-[18px] text-[#444343] mb-5'>Significant improvements among both boys and girls from baseline to endline focus group discussions, related to gender inequality and stereotypes, power and agency, decision making, gender-based violence, victim blaming, consent and youth leadership in the community.</h1>
                    <h1 className='text-[18px] text-[#444343] mb-5'>Girls positively transformed their attitudes and beliefs around gender equality and gender-based violence from an average of score of 66% at baseline to 93% at endline in our latest project, My Voice, My Power.</h1>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default OurImpact
