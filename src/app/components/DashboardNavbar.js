"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa6';
import logo from '../../../public/assets/images/logo.png';
import { useSelector } from 'react-redux';

const DashboardNavbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ onDown, setOnDown ] = useState(false);
  const user = useSelector(state => state.authData.userClient);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const handleLogout = async () => {
        dispatch(resetAuthState());
        await router.replace('/login');
    }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`flex justify-between items-center w-full fixed px-[13%] py-2 mx-auto transition-all duration-300 z-50 xs:px-[5%] ${styles.myFont}  ${isScrolled ? 'bg-[#F9F0EC]' : 'bg-[#fff]'} outfit`}>
      <div className='flex h-full items-center w-full justify-between'>
        <div className='w-40 h-20 relative'>
          <Image src={logo} fill alt="Logo" />
        </div>
        <div className="lgm:hidden">
          <button onClick={handleMenuToggle} aria-label="Toggle menu">
            {!isMenuOpen && <FaBars size={24} className='text-[#D71A30]'/>}
          </button>
        </div>
        <div className='flex w-[85%] justify-between items-center'>
          <ul className="hidden lgm:flex xl:w-[70%] space-x-4 w-[40%] justify-between relative">
            <li className="relative">
              <Link href="/">
                <h1 className={`text-[16px] font-medium ${router.pathname === '/' ? 'text-[#D71A30] font-bold' : 'text-black hover:text-[#D71A30]'}`}>About Us</h1>
              </Link>
            </li>
            <li className="relative">
              <Link href="/about">
                <p className={`font-medium ${router.pathname === '/About' ? 'text-[#D71A30] font-bold' : 'text-black hover:text-[#D71A30]'}`}>Our Impact</p>
              </Link>
            </li>
            <li className="relative">
              <Link href="/our-work">
                <p className={`font-medium ${router.pathname === '/our-work' ? 'text-[#D71A30] font-bold' : 'text-black hover:text-[#D71A30]'}`}>Resources</p>
              </Link>
            </li>
            <li className="relative">
              <Link href="/contact">
                <p className={`font-medium ${router.pathname === '/contact' ? 'text-[#D71A30] font-bold' : 'text-black hover:text-[#D71A30]'}`}>Reach out</p>
              </Link>
            </li>
          </ul>
            <div className="w-[20%] flex justify-between">
                <div className="flex items-center">
                    <div className="flex justify-center items-center w-[38px] h-[38px] bg-[#82C1FE] rounded-full">
                        <h1 className="font-bold text-xl">{user?.fullname[0]}</h1>
                    </div>
                    <div className="flex flex-col py-1 ml-2">
                        <h1 className="font-medium text-sm text-black">{user?.fullname}</h1>
                        <h1 className="font-medium text-sm text-[#615E69]">{user?.email}</h1>
                    </div>
                </div>
                <div className='self-center cursor-pointer' onClick={() => setOnDown(!onDown)}>
                    <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99984 1.66669C14.5948 1.66669 18.3332 5.40502 18.3332 10C18.3332 14.595 14.5948 18.3334 9.99984 18.3334C5.40484 18.3334 1.6665 14.595 1.6665 10C1.6665 5.40502 5.40484 1.66669 9.99984 1.66669ZM9.99984 2.91669C6.094 2.91669 2.9165 6.09419 2.9165 10C2.9165 13.9059 6.094 17.0834 9.99984 17.0834C13.9057 17.0834 17.0832 13.9059 17.0832 10C17.0832 6.09419 13.9057 2.91669 9.99984 2.91669ZM13.334 8.35494C13.5782 8.59827 13.579 8.9941 13.3357 9.2391L10.4423 12.1441C10.349 12.2388 10.2279 12.2998 10.0983 12.3205L9.99984 12.3283C9.834 12.3283 9.674 12.2624 9.55734 12.1441L6.66484 9.2391C6.42067 8.9941 6.42234 8.59827 6.6665 8.35494C6.9115 8.1116 7.30734 8.1116 7.55067 8.3566L9.99984 10.8183L12.4498 8.3566C12.6932 8.1116 13.089 8.1116 13.334 8.35494Z" fill="#615E69"/>
                    </svg>
                </div>
            </div>
            </div>
        <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lgm:hidden`}>
          <button onClick={handleMenuToggle} aria-label="Toggle menu" className='p-4'>
            {isMenuOpen && <FaTimes size={24} className='text-[#D71A30] justify-self-end'/>}
          </button>
          <ul className="flex flex-col space-y-4 p-4">
            <li className="relative">
              <Link href="/" onClick={handleMenuToggle}>
                <h1 className={`text-[16px] uppercase font-semibold ${router.pathname === '/' ? 'text-[#D71A30] font-bold' : 'text-black hover:text-[#D71A30]'}`}>Home</h1>
              </Link>
            </li>
            <li className="relative">
              <Link href="/About" onClick={handleMenuToggle}>
                <p className={`uppercase font-semibold ${router.pathname === '/About' ? 'text-[#D71A30] font-bold' : 'text-black hover:text-[#D71A30]'}`}>About us</p>
              </Link>
            </li>
            <li className="relative">
              <Link href="/our-work" onClick={handleMenuToggle}>
                <p className={`uppercase font-semibold ${router.pathname === '/our-work' ? 'text-[#D71A30] font-bold' : 'text-black hover=text-[#D71A30]'}`}>Resources</p>
              </Link>
            </li>
            <li className="relative">
              <Link href="/Contact" onClick={handleMenuToggle}>
                <p className={`uppercase font-semibold ${router.pathname === '/Contact' ? 'text-[#D71A30] font-bold' : 'text-black hover=text-[#D71A30]'}`}>Our Impact</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      { onDown && <div className="absolute top-[70px] right-48 border border-1 border-gray-300 rounded-xl z-[100] bg-inherit py-2 px-10">
            <ul className="flex flex-col justify-between h-[70px]">
                <li >
                    <Link href='profile' className="flex justify-start items-center text-black cursor-pointer">
                        <FaUserGraduate className="text-xl text-[#615E69] mr-2"/>
                        <h1 className="font-medium text-md text-[#615E69]">Profile</h1>
                    </Link>
                </li>
                <div className="w-full border border-1 border-gray-300 "></div>
                <li className="flex justify-start items-center text-black cursor-pointer" onClick={handleLogout}>
                    <FaSignOutAlt className="text-xl text-[#615E69] mr-2"/>
                    <h1 className="font-medium text-md text-[#615E69]">Logout</h1>
                </li>
            </ul>
        </div>}
    </nav>
  );
};

export default DashboardNavbar;
