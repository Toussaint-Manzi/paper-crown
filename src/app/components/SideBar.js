'use client'

import { RiEBike2Fill } from 'react-icons/ri'
import { AiOutlineDropbox,AiOutlineBarChart } from 'react-icons/ai';
import { BsShop,BsFillCartCheckFill } from 'react-icons/bs';
import { MdFeedback } from 'react-icons/md'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaBookOpen } from 'react-icons/fa'
import { GoSignOut } from "react-icons/go";


const SideBar = () => {
    const router = useRouter();
    const navigate = router.push; // To navigate programmatically
    const pathname = usePathname();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/');
    }
  return (
    <div className='font w-[230px] h-screen border-r-2 font py-7 px-4 flex flex-col justify-between fixed left-0 md:hidden md:w-full'>
        <h1 className='text-black text-2xl text-center'>Testing logo</h1>
        <ul className='-mt-28'>
            <li className={ pathname === '/dashboard/admin/home' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-2' : 'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'}><Link href='/dashboard/admin/home'><div className='flex flex-row items-center'><AiOutlineBarChart className='text-2xl text-black'/><h1 className={ pathname === '/dashboard/admin/home' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' : 'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'}>Analytics</h1></div></Link></li>
            <li className={ pathname === '/dashboard/admin/resources' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-2' : 'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'}><Link href='/dashboard/admin/resources'><div className='flex flex-row items-center'><AiOutlineBarChart className='text-2xl text-black'/><h1 className={ pathname === '/dashboard/admin/resources' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' : 'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'}>Resources</h1></div></Link></li>
            <li className={ pathname === '/dashboard/admin/users' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-2' : 'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'}><Link href='/dashboard/admin/users'><div className='flex flex-row'><BsShop className='text-2xl text-black'/><h1 className={ pathname === '/dashboard/admin/users' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'}>Users</h1></div></Link></li>
            <li className={ pathname === '/dashboard/admin/topics' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-2' : 'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'}> <Link href='/dashboard/admin/topics'><div className='flex flex-row'><AiOutlineDropbox className='text-2xl text-black'/><h1 className={ pathname === '/dashboard/admin/topics' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'}>Topics</h1></div></Link></li>
            <li className={ pathname === '/dashboard/admin/sub-topics' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-2' :'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'}><Link href='/dashboard/admin/sub-topics'><div className='flex flex-row'><BsFillCartCheckFill className='text-2xl text-black'/><h1 className={ pathname === '/dashboard/admin/sub-topics' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'}>Sub Topics</h1></div></Link></li>
            <li className={ pathname === '/dashboard/admin/messages' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-2' :'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'}><Link href='/dashboard/admin/messages'><div className='flex flex-row'><RiEBike2Fill className='text-2xl text-black'/><h1 className={ pathname === '/dashboard/admin/messages' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'}>Messages</h1></div></Link></li>
        </ul>
        <div className="">
            {/* <div className="flex flex-row pb-5 border-b-2 cursor-pointer"><FiSettings/><h1 className='text-[13px] font-semibold text-black ml-3'>Settings</h1></div> */}
            <div className='flex flex-row pt-5 border-t-2'>
                <div className='h-8 w-8 rounded-full bg-image1 bg-cover'></div>
                <div className=''>
                    <h1 className='text-[13px] font-semibold text-black ml-3'>Admin</h1>
                    <h1 className='text-[13px] font-normal ml-3'>admin@info.com</h1>
                </div>
            </div>
            {/* <div className='flex justify-center items-center'> */}
                <button type="button" class="w-full mt-5 justify-center text-white bg-purple-800 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-normal rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  dark:focus:ring-purple-800" onClick={handleLogout}>
                    Sign Out
                    <GoSignOut className='text-xl ml-2'/>
                </button>
            {/* </div> */}
        </div>
    </div>
  )
}

export default SideBar
