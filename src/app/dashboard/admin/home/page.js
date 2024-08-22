'use client'

import { useEffect,useState } from 'react';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';
import { AiTwotoneShop } from 'react-icons/ai';
import { BsBoxSeamFill } from 'react-icons/bs';
import { RiEBike2Fill } from 'react-icons/ri';
import SideBar from '@/app/components/SideBar';
import Header from '@/app/components/Header';
import styles from '@/app/styles/home.module.css';

const Analytics = () => {
    const [ shops , setShops ] = useState([]);
    const [ products , setProducts ] = useState([]);
    const [ riders , setRiders ] = useState([]);
    const [ orders , setOrders ] = useState([]);


    const [ isLoading,setIsLoading ] = useState(true);
    // const token = localStorage.getItem("token");

    // const fetchShopData = async () => {
    //     try {
    //       const response = await axios.get('https://kezaeshop-eb52ead4036f.herokuapp.com/api/v1/shop/all',{
    //       headers: {
    //           "Authorization" : `Bearer ${token}`
    //         }
    //       });
    //       setShops(response.data.shops);
    //       setIsLoading(false);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    // };

    // const fetchProductsData = async () => {
    //     try {
    //       const response = await axios.get('https://kezaeshop-eb52ead4036f.herokuapp.com/api/v1/product/all',{
    //       headers: {
    //           "Authorization" : `Bearer ${token}`
    //         }
    //       });
    //       setProducts(response.data.products);
    //       setIsLoading(false);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    // };

    // const fetchOrdersData = async () => {
    //     try {
    //       const response = await axios.get('https://kezaeshop-eb52ead4036f.herokuapp.com/api/v1/order/all',{
    //       headers: {
    //           "Authorization" : `Bearer ${token}`
    //         }
    //       });
    //       setOrders(response.data.orders);
    //       setIsLoading(false);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    // };

    // const fetchMotardData = async () => {
    //     try {
    //       const response = await axios.get('https://kezaeshop-eb52ead4036f.herokuapp.com/api/v1/motard/all',{
    //       headers: {
    //           "Authorization" : `Bearer ${token}`
    //         }
    //       });
    //       setRiders(response.data.motards);
    //       setIsLoading(false);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    // };

    // useEffect(() => {   
    //     fetchShopData();
    //     fetchOrdersData();
    //     fetchMotardData();
    //     fetchProductsData();
    //   },[]);
  return (
    <div className={`bg-white ${styles.myFont}`}>
      <SideBar/>
      <div className="font h-screen ml-[230px]">
        <Header/>
        <div className='px-20 py-10'>
            <h1 className='text-3xl text-gray-600'>Dashboard</h1>
            <h1 className='text-lg text-gray-600'>Welcome back !</h1>
            <h1 className='text-4xl mt-10'>Overview</h1>
            <div className='mt-10 flex justify-between'>
                <div className='w-[220px] h-[150px] bg-orange-100 rounded-lg p-5'>
                    <div className='flex justify-start items-start'>
                        <RiEBike2Fill className={`text-4xl text-orange-500`}/>
                        <h1 className='text-black text-xl ml-2 font-medium self-center'>Riders</h1>
                    </div>
                    {/* <h1 className='text-2xl font-bold mt-3 text'>{riders.length}</h1> */}
                    <h1 className='text-sm mt-3 text-gray-500'>Total users</h1>
                </div>
                <div className='w-[220px] h-[150px] bg-emerald-100 rounded-lg p-5'>
                    <div className='flex justify-start items-center'>
                        <FaShoppingCart className={`text-4xl text-emerald-600`}/>
                        <h1 className='text-black text-xl ml-2 font-medium'>Orders</h1>
                    </div>
                    {/* <h1 className='text-2xl font-bold mt-3 text'>{orders.length}</h1> */}
                    <h1 className='text-sm mt-3 text-gray-500'>Total orders</h1>
                </div>
                <div className='w-[220px] h-[150px] bg-blue-100 rounded-lg p-5'>
                    <div className='flex justify-start items-center'>
                        <AiTwotoneShop className={`text-4xl text-blue-600`}/>
                        <h1 className='text-black text-xl ml-2 font-medium'>Shops</h1>
                    </div>
                    {/* <h1 className='text-2xl font-bold mt-3 text'>{shops.length}</h1> */}
                    <h1 className='text-sm mt-3 text-gray-500'>Total shops</h1>
                </div>
                <div className='w-[220px] h-[150px] bg-purple-100 rounded-lg p-5'>
                    <div className='flex justify-start items-center'>
                        <BsBoxSeamFill className={`text-4xl text-purple-600`}/>
                        <h1 className='text-black text-xl ml-2 font-medium'>Products</h1>
                    </div>
                    {/* <h1 className='text-2xl font-bold mt-3 text'>{products.length}</h1> */}
                    <h1 className='text-sm mt-3 text-gray-500'>Total products</h1>
                </div>
            </div>
        </div>
    </div>
  </div>
    
  )
}

export default Analytics
