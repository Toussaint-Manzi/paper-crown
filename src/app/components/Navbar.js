"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowDown, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../public/assets/images/logo.png';

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <h1 className={`text-[16px] font-medium ${router.pathname === '/' ? 'text-[#D71A30] font-bold' : 'text-black hover:text-[#D71A30]'}`}>Home</h1>
              </Link>
            </li>
            <li className="relative">
              <Link href="/about">
                <p className={`font-medium ${router.pathname === '/About' ? 'text-[#D71A30] font-bold' : 'text-black hover:text-[#D71A30]'}`}>About us</p>
              </Link>
            </li>
            <li className="relative">
              <Link href="/our-work">
                <p className={`font-medium ${router.pathname === '/our-work' ? 'text-[#D71A30] font-bold' : 'text-black hover:text-[#D71A30]'}`}>Resources</p>
              </Link>
            </li>
            <li className="relative">
              <Link href="/Contact">
                <p className={`font-medium ${router.pathname === '/Contact' ? 'text-[#D71A30] font-bold' : 'text-black hover:text-[#D71A30]'}`}>Our Impact</p>
              </Link>
            </li>
          </ul>
          <button className='h-[50px] text-white w-[150px] bg-[#D71A30] rounded-xl'>
            Join Now
          </button>
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
    </nav>
  );
};

export default Navbar;
