"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import styles from '@/app/styles/home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import decor from '../../../public/assets/images/decor.png';

export default function About() {
    const logos = Array.from({ length: 15 }, (_, i) => `/assets/images/logo${i + 1}.png`);

    return (
      <div className={`bg-white h-full ${styles.myFont}`}>
        <Navbar/>
        <div className='h-full pb-[200px] w-full px-[13%] pt-[200px] flex justify-between items-center 2xl:h-full xl:py-[150px]'>
            <div className='relative h-[500px] w-[45%] xl:hidden'>
                <div className='absolute h-[350px] w-[550px] rounded-xl'>
                <div className="w-full h-full p-1 md:p-2 relative">
                    <Image
                    alt="gallery"
                    className="block h-full w-full rounded-2xl object-cover object-center cursor-pointer"
                    src="/assets/images/people.png"
                    fill
                    />
                </div>
                </div>
                <div className='absolute bottom-[10%] right-[0%] h-[200px] w-[350px] rounded-xl'>
                <div className="w-full h-full p-1 md:p-2 relative">
                    <Image
                    alt="gallery"
                    className="block h-full w-full rounded-2xl object-cover object-center cursor-pointer"
                    src="/assets/images/people.png"
                    fill
                    />
                </div>
                </div>
            </div>
            <div className='w-[45%] self-start xl:w-full'>
                <h1 className={`text-[32px] text-[#D71A30] font-semibold xs:text-[25px] ${styles.myFont2}`}>Who we are</h1>
                <h1 className={`text-[25px] text-[#343434] font-[600] grotesk  my-8 xs:text-[20px] ${styles.myFont2}`}>Paper Crown Rwanda is a feminist, non-profit organization in Rwanda, that works with youth to transform gender norms, foster leadership and create lasting social change.</h1>
                <h1 className='text-[20px] text-black font-[300] roboto my-8 xs:text-[18px]'>Paper Crown Rwanda is a feminist, non-profit organization in Rwanda, that works with youth to transform gender norms, foster leadership and create lasting social change.</h1>
                <button className='h-[60px] text-white text-lg mt-3 px-8 self-start bg-[#D71A30] rounded-xl flex items-center'>
                    Visit Paper Crown
                    <IoIosArrowRoundForward className='text-3xl ml-1'/>
                </button>
                <div className='relative w-full'>
                </div>
            </div>
        </div>
        <div className='flex justify-between px-[10%]'>
            <div className='w-[30%] mx-auto flex flex-col items-start'>
                <svg width="100" height="33" viewBox="0 0 161 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1563 32.2999C15.1563 35.7136 16.6289 38.5249 18.8377 40.9345C20.2434 42.474 21.9167 43.7458 23.4563 45.1514C23.8579 45.4861 24.3264 45.7539 24.6611 46.1555C25.5982 47.2264 25.3304 48.5651 24.0587 49.2345C23.6571 49.4353 23.2555 49.5022 22.8538 49.703C18.1014 51.6442 14.6208 54.7901 13.4829 60.078C13.2821 60.9481 13.0813 61.7514 12.8805 62.5546C12.7466 63.0901 12.5458 63.6925 12.345 64.228C12.0773 64.9642 11.5418 65.4997 10.6716 65.4328C9.80148 65.3659 9.33294 64.8304 9.13212 64.0272C8.86438 63.0231 8.66358 61.9522 8.39583 60.8812C7.72648 58.1369 7.05714 55.3925 5.71844 52.849C4.84828 51.1087 3.71038 49.6361 2.03701 48.4982C0.430558 47.4272 0.363623 46.0885 1.83619 44.8168C3.04103 43.8127 4.44667 42.9426 5.71844 42.0055C8.73052 39.7966 10.4708 36.8515 10.7386 33.0362C10.8725 32.4338 10.8725 31.6306 11.0063 30.8273C11.1402 29.2878 11.341 29.087 12.6797 29.0201C14.0184 28.8862 14.7547 29.4217 15.0224 30.6265C15.1563 31.162 15.0894 31.7644 15.1563 32.2999Z" fill="black"/>
                    <path d="M78.2699 42.4114C78.0648 40.6333 77.9964 38.7868 77.7228 37.0771C77.2441 34.2048 75.8763 31.948 73.2776 30.5118C71.0891 29.3492 68.9007 28.3234 66.6439 27.2292C65.96 26.8872 65.2077 26.6137 64.5239 26.2717C63.9768 25.9982 63.6348 25.5195 63.84 24.904C63.9768 24.4937 64.4555 24.2201 64.7974 23.8782C64.8658 23.8098 65.0026 23.8098 65.1394 23.8098C70.542 22.7156 74.1666 19.2277 76.6286 14.5773C78.817 10.5424 80.5951 6.30236 82.5784 2.19906C82.8519 1.58356 83.1255 0.968065 83.4674 0.489347C83.6726 0.215794 84.2197 -0.0577596 84.5616 0.0106287C84.9036 0.0790171 85.3139 0.489347 85.3823 0.899677C85.5191 1.31001 85.4507 1.85711 85.3823 2.33583C85.2455 3.29327 85.1088 4.2507 84.9036 5.27653C84.0829 9.31144 84.9036 13.2096 85.7243 17.1077C86.1346 18.8174 87.1604 20.0484 88.6649 20.8691C90.5798 21.8949 92.5631 22.5788 94.6831 23.0575C95.367 23.1943 96.3244 23.1943 96.3928 24.2201C96.4612 25.3143 95.5038 25.5879 94.7515 25.793C91.4689 26.6137 89.1437 28.8021 87.0236 31.3325C84.8352 33.9312 83.1255 36.8719 82.0313 40.0862C81.4158 41.8643 80.8687 43.6424 80.2532 45.3521C80.1164 45.694 80.1164 46.036 79.9112 46.2411C79.6377 46.5831 79.159 47.0618 78.8854 46.9934C78.5435 46.925 78.2699 46.3779 78.0648 45.9676C77.928 45.694 77.9964 45.3521 77.9964 45.0102C77.9964 44.1211 77.9964 43.2321 77.9964 42.4114C78.1331 42.4114 78.2015 42.4114 78.2699 42.4114Z" fill="#D71A30"/>
                    <path d="M150.156 32.2999C150.156 35.7136 151.629 38.5249 153.838 40.9345C155.243 42.474 156.917 43.7458 158.456 45.1514C158.858 45.4861 159.326 45.7539 159.661 46.1555C160.598 47.2264 160.33 48.5651 159.059 49.2345C158.657 49.4353 158.255 49.5022 157.854 49.703C153.101 51.6442 149.621 54.7901 148.483 60.078C148.282 60.9481 148.081 61.7514 147.88 62.5546C147.747 63.0901 147.546 63.6925 147.345 64.228C147.077 64.9642 146.542 65.4997 145.672 65.4328C144.801 65.3659 144.333 64.8304 144.132 64.0272C143.864 63.0231 143.664 61.9522 143.396 60.8812C142.726 58.1369 142.057 55.3925 140.718 52.849C139.848 51.1087 138.71 49.6361 137.037 48.4982C135.431 47.4272 135.364 46.0885 136.836 44.8168C138.041 43.8127 139.447 42.9426 140.718 42.0055C143.731 39.7966 145.471 36.8515 145.739 33.0362C145.872 32.4338 145.872 31.6306 146.006 30.8273C146.14 29.2878 146.341 29.087 147.68 29.0201C149.018 28.8862 149.755 29.4217 150.022 30.6265C150.156 31.162 150.089 31.7644 150.156 32.2999Z" fill="black"/>
                </svg>
                <h1 className={`my-5 text-[#D71A30] text-[22px] font-[600] ${styles.myFont2}`}>Our Vision</h1>
                <h1 className='text-[18px] text-black font-[300] xs:text-[18px]'>We’re working tirelessly towards a world in which the beliefs and attitudes that enable gender discrimination and violence are permanently transformed for the better.</h1>
            </div>
            <div className='w-[45%] mx-auto flex flex-col items-start'>
                <svg width="100" height="33" viewBox="0 0 161 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1563 32.2999C15.1563 35.7136 16.6289 38.5249 18.8377 40.9345C20.2434 42.474 21.9167 43.7458 23.4563 45.1514C23.8579 45.4861 24.3264 45.7539 24.6611 46.1555C25.5982 47.2264 25.3304 48.5651 24.0587 49.2345C23.6571 49.4353 23.2555 49.5022 22.8538 49.703C18.1014 51.6442 14.6208 54.7901 13.4829 60.078C13.2821 60.9481 13.0813 61.7514 12.8805 62.5546C12.7466 63.0901 12.5458 63.6925 12.345 64.228C12.0773 64.9642 11.5418 65.4997 10.6716 65.4328C9.80148 65.3659 9.33294 64.8304 9.13212 64.0272C8.86438 63.0231 8.66358 61.9522 8.39583 60.8812C7.72648 58.1369 7.05714 55.3925 5.71844 52.849C4.84828 51.1087 3.71038 49.6361 2.03701 48.4982C0.430558 47.4272 0.363623 46.0885 1.83619 44.8168C3.04103 43.8127 4.44667 42.9426 5.71844 42.0055C8.73052 39.7966 10.4708 36.8515 10.7386 33.0362C10.8725 32.4338 10.8725 31.6306 11.0063 30.8273C11.1402 29.2878 11.341 29.087 12.6797 29.0201C14.0184 28.8862 14.7547 29.4217 15.0224 30.6265C15.1563 31.162 15.0894 31.7644 15.1563 32.2999Z" fill="black"/>
                    <path d="M78.2699 42.4114C78.0648 40.6333 77.9964 38.7868 77.7228 37.0771C77.2441 34.2048 75.8763 31.948 73.2776 30.5118C71.0891 29.3492 68.9007 28.3234 66.6439 27.2292C65.96 26.8872 65.2077 26.6137 64.5239 26.2717C63.9768 25.9982 63.6348 25.5195 63.84 24.904C63.9768 24.4937 64.4555 24.2201 64.7974 23.8782C64.8658 23.8098 65.0026 23.8098 65.1394 23.8098C70.542 22.7156 74.1666 19.2277 76.6286 14.5773C78.817 10.5424 80.5951 6.30236 82.5784 2.19906C82.8519 1.58356 83.1255 0.968065 83.4674 0.489347C83.6726 0.215794 84.2197 -0.0577596 84.5616 0.0106287C84.9036 0.0790171 85.3139 0.489347 85.3823 0.899677C85.5191 1.31001 85.4507 1.85711 85.3823 2.33583C85.2455 3.29327 85.1088 4.2507 84.9036 5.27653C84.0829 9.31144 84.9036 13.2096 85.7243 17.1077C86.1346 18.8174 87.1604 20.0484 88.6649 20.8691C90.5798 21.8949 92.5631 22.5788 94.6831 23.0575C95.367 23.1943 96.3244 23.1943 96.3928 24.2201C96.4612 25.3143 95.5038 25.5879 94.7515 25.793C91.4689 26.6137 89.1437 28.8021 87.0236 31.3325C84.8352 33.9312 83.1255 36.8719 82.0313 40.0862C81.4158 41.8643 80.8687 43.6424 80.2532 45.3521C80.1164 45.694 80.1164 46.036 79.9112 46.2411C79.6377 46.5831 79.159 47.0618 78.8854 46.9934C78.5435 46.925 78.2699 46.3779 78.0648 45.9676C77.928 45.694 77.9964 45.3521 77.9964 45.0102C77.9964 44.1211 77.9964 43.2321 77.9964 42.4114C78.1331 42.4114 78.2015 42.4114 78.2699 42.4114Z" fill="#D71A30"/>
                    <path d="M150.156 32.2999C150.156 35.7136 151.629 38.5249 153.838 40.9345C155.243 42.474 156.917 43.7458 158.456 45.1514C158.858 45.4861 159.326 45.7539 159.661 46.1555C160.598 47.2264 160.33 48.5651 159.059 49.2345C158.657 49.4353 158.255 49.5022 157.854 49.703C153.101 51.6442 149.621 54.7901 148.483 60.078C148.282 60.9481 148.081 61.7514 147.88 62.5546C147.747 63.0901 147.546 63.6925 147.345 64.228C147.077 64.9642 146.542 65.4997 145.672 65.4328C144.801 65.3659 144.333 64.8304 144.132 64.0272C143.864 63.0231 143.664 61.9522 143.396 60.8812C142.726 58.1369 142.057 55.3925 140.718 52.849C139.848 51.1087 138.71 49.6361 137.037 48.4982C135.431 47.4272 135.364 46.0885 136.836 44.8168C138.041 43.8127 139.447 42.9426 140.718 42.0055C143.731 39.7966 145.471 36.8515 145.739 33.0362C145.872 32.4338 145.872 31.6306 146.006 30.8273C146.14 29.2878 146.341 29.087 147.68 29.0201C149.018 28.8862 149.755 29.4217 150.022 30.6265C150.156 31.162 150.089 31.7644 150.156 32.2999Z" fill="black"/>
                </svg>
                <h1 className={`my-5 text-[#D71A30] text-[22px] font-[600] ${styles.myFont2}`}>Our mission</h1>
                <h1 className='text-[18px] text-black font-[300] xs:text-[18px]'>We’ll achieve this vision by equipping adolescents, especially girls, to be vocal community activists through participatory, transformative workshops and clubs, so they are empowered to challenge gender norms and break the intergenerational cycle of discrimination and violence.</h1>
            </div>
        </div>
        <div className='flex justify-between items-center w-[77%] mx-auto h-[250px] rounded-[40px] px-[13%] bg-black my-24'>
            <div className='relative w-[110px] h-[130px]'>
                <Image
                    src={decor}
                    layout="fill"
                    objectFit="contain"
                    alt="Person"
                />
            </div>
            <div className='w-[70%] mx-auto'>
                <h1 className={`text-white text-center font-semibold text-[40px] w-[100%] mx-auto my-4 ${styles.myFont2}`}>Change a heart, change a mind, change the world.</h1>
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
        <div className='h-full pb-[200px] w-full px-[13%] pt-[200px] flex justify-between items-center 2xl:h-full xl:py-[150px]'>
            <div className='relative h-[500px] w-[45%] xl:hidden'>
                <div className='absolute h-[350px] w-[550px] rounded-xl'>
                <div className="w-full h-full p-1 md:p-2 relative">
                    <Image
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center cursor-pointer"
                        src="/assets/images/people.png"
                        fill
                    />
                </div>
                </div>
                <div className='absolute bottom-[10%] right-[0%] h-[200px] w-[350px] rounded-xl'>
                <div className="w-full h-full p-1 md:p-2 relative">
                    <Image
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center cursor-pointer"
                        src="/assets/images/people.png"
                        fill
                    />
                </div>
                </div>
            </div>
            <div className='w-[45%] self-start xl:w-full'>
                <div className='flex items-center w-[45%] justify-between'>
                    <div className="h-[2px] w-[80px] bg-black"></div>
                    <h1 className={`text-[#D71A30] text-xl font-semibold ${styles.myFont2}`}>Our Founding Story</h1>
                </div>
                <h1 className={`text-[25px] text-[#343434] font-[600] grotesk  my-8 xs:text-[20px] ${styles.myFont2}`}>Paper Crown was founded by gender and development specialist Katie Carlson, a Canadian feminist activist and resident of Rwanda since 2012.</h1>
                <h1 className='text-[18px] text-black font-[300] my-8 xs:text-[18px]'>Throughout her time spent living and working in the country, Katie was continually inspired by the stories of Rwanda’s girls and young women, who persistently struggled with issues of discrimination and violence despite the strong leadership and political will shown across the country’s government to create a more gender equal society in Rwanda. After piloting a series of participatory workshops with adolescent girls that directly called out the gender issues permeating their daily lives and empowered girls to know their rights and believe in themselves, Katie realized there was tremendous potential to break the intergenerational cycle of gender inequality and violence by spending meaningful time with young people and changing hearts and minds for the better - through feminist critical thinking and the development of strong personal self-confidence and leadership skills that would lead to community advocacy and transformative gender norms change.</h1>
            </div>
        </div>
        <div className='h-full pb-[200px] w-full px-[13%] flex flex-row justify-between items-start 2xl:h-full xl:py-[150px]'>
            <div className='w-[40%]'>
                <div className='flex items-center w-[55%] justify-between'>
                <div className="h-[2px] w-[80px] bg-black"></div>
                <h1 className='text-[#D71A30] text-xl font-semibold'>Our Members & Partners</h1>
                </div>
                <h1 className='text-[25px] text-[#343434] font-[600] my-8 xs:text-[20px]'>Our partners make it possible for us to do what we do. We are proud to list the following organizations as collaborators and supporters of the work of Paper Crown.</h1>
            </div>
            
            {/* Logos Container */}
            <div className='grid grid-cols-4 gap-8 w-[50%]'>
                {Array.from({ length: 4 }).map((_, colIdx) => (
                <div key={colIdx} className='flex flex-col items-center space-y-4 relative'>
                    {logos.slice(colIdx * 4, colIdx * 4 + 4).map((logo, logoIdx) => (
                    <Image key={logoIdx} src={logo} alt={`Logo ${colIdx * 4 + logoIdx + 1}`} width={96} height={96} objectFit="contain" />
                    ))}
                    {colIdx < 3 && <div className='absolute right-0 top-0 bottom-0 w-[2px] bg-gray-300'></div>}
                </div>
                ))}
            </div>
        </div>

        <Footer/>
      </div>
    );
}
