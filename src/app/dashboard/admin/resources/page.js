'use client'

import { FiPlus } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllResources } from '@/lib/services/userServices';
import DataTable from '@/app/components/DataTable';
import Header from '@/app/components/Header';
import SideBar from '@/app/components/SideBar';
import styles from '@/app/styles/home.module.css';

const Resources = () => {
    const dispatch = useDispatch();
    const allResources = useSelector(state => state.allResources);
    const [formOn, setFormOn] = useState(false);

    useEffect(() => {   
        dispatch(getAllResources());
    }, [dispatch]);

    const columns = [
        { id: 'number', label: '#', minWidth: 50 },
        { id: 'thumbnail', label: 'Thumbnail', minWidth: 100, render: (value) => <img src={value} alt="thumbnail" style={{ width: 50, height: 50 }} /> },
        { id: 'title', label: 'Title', minWidth: 170, editable: true },
        { id: 'comments', label: 'Comments', minWidth: 100, render: (value) => value.length },
        { id: 'resources', label: 'Resources', minWidth: 100, render: (value) => value.length },
        { id: 'likes', label: 'Likes', minWidth: 100, render: (value) => value.length },
        // Add more columns as needed
      ];
    
      const handleEdit = (updatedRow) => {
        console.log('Updated row:', updatedRow);
      };
    
      const handleDelete = (rowToDelete) => {
        console.log('Deleted row:', rowToDelete);
      };

    return (
        <div className={`bg-white ${styles.myFont}`}>
            <SideBar />
            <div className='font flex flex-row'>         
                <div className="w-full h-screen ml-[230px]">
                    <Header />
                    <div className='flex flex-col h-7 py-1 px-7 mb-20'>
                        <button className='flex flex-row h-12 w-130 bg-violet-700 text-white text-xs font-semibold py-2 px-3 rounded-md self-end mt-7' onClick={() => { setFormOn(true) }}>
                            <FiPlus className='text-sm mr-2 mt-1px'/>Add Resource
                        </button>
                    </div>
                    <div>
                        <h1 className='text-black text-xl'>My Resources</h1>
                        <DataTable
                            columns={columns}
                            rows={allResources}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources;
