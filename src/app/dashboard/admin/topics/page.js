'use client';

import { FiPlus } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from '@/app/components/DataTable';
import Header from '@/app/components/Header';
import SideBar from '@/app/components/SideBar';
import Modal from '@/app/components/Modal';
import styles from '@/app/styles/home.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllTopics } from '@/lib/services/userServices';
import { addSubTopic, addTopic } from '@/lib/services/adminService';

const Topics = () => {
  const dispatch = useDispatch();
  const allTopics = useSelector(state => state.allTopics);
  const [topicFormOn, setTopicFormOn] = useState(false);
  const [subTopicFormOn, setSubTopicFormOn] = useState(false);
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newSubTopicTitle, setNewSubTopicTitle] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState('');

  useEffect(() => {
    dispatch(getAllTopics());
  }, [dispatch]);

  // Preprocess the data
  const processedRows = allTopics.reduce((acc, topic) => {
    topic.subtopics.forEach((subtopic) => {
      acc.push({
        id: subtopic.id,
        number: acc.length + 1, // Sequential numbering
        topicTitle: topic.title,
        subtopicTitle: subtopic.title,
        createdAt: subtopic.createdAt,
        updatedAt: subtopic.updatedAt,
      });
    });

    return acc;
  }, []);

  const columns = [
    { id: 'number', label: '#', minWidth: 50 },
    { id: 'topicTitle', label: 'Topic Title', minWidth: 170 },
    { id: 'subtopicTitle', label: 'Subtopic Title', minWidth: 170 },
    { id: 'createdAt', label: 'Created At', minWidth: 150 },
    { id: 'updatedAt', label: 'Updated At', minWidth: 150 },
    // Add more columns as needed
  ];

  const handleAddTopic = async () => {
    try {
        const response = await dispatch(addTopic({ title: newTopicTitle }));
        if (response.payload.status === 201 ){
            dispatch(getAllTopics());
            toast.success('Topic Added successfully', {
                autoClose: 3000,
            });
            setTopicFormOn(false); // Close modal after submission
            setNewTopicTitle(''); // Clear form field
        } else {
            toast.error('Adding topic failed , please try again', {
                autoClose: 3000,
            });
        }
    } catch (error) {
        toast.error('Adding topic failed , please try again', {
            autoClose: 3000,
        });
    }
  };

  const handleAddSubTopic = async () => {
    try {
        const response = await dispatch(addSubTopic({ title: newSubTopicTitle, topicId: selectedTopicId }));
        if (response.payload.status === 201 ){
            dispatch(getAllTopics());
            toast.success('Sub-topic Added successfully', {
                autoClose: 3000,
            });
            setSubTopicFormOn(false); // Close modal after submission
            setNewSubTopicTitle(''); // Clear form field
            setSelectedTopicId(''); // Clear selection
        } else {
            toast.error('Adding sub-topic failed , please try again', {
                autoClose: 3000,
            });
        }
    } catch (error) {
        toast.error('Adding sub-topic failed , please try again', {
            autoClose: 3000,
        });
    }
  };

  return (
    <div className={`bg-white ${styles.myFont}`}>
        <ToastContainer/>
      <SideBar />
      <div className="font flex flex-row">
        <div className="w-full h-screen ml-[230px]">
          <Header />
          <div className="flex flex-col h-7 py-1 px-7 mb-20">
            <button
              className="flex flex-row h-12 w-130 bg-violet-700 text-white text-xs font-semibold py-2 px-3 rounded-md self-end mt-7"
              onClick={() => setTopicFormOn(true)}
            >
              <FiPlus className="text-sm mr-2 mt-1px" />
              Add Topic
            </button>
            <button
              className="flex flex-row h-12 w-130 bg-violet-700 text-white text-xs font-semibold py-2 px-3 rounded-md self-end mt-7"
              onClick={() => setSubTopicFormOn(true)}
            >
              <FiPlus className="text-sm mr-2 mt-1px" />
              Add Sub Topic
            </button>
          </div>
          <div>
            <h1 className="text-black text-xl">My Topics</h1>
            <DataTable
              columns={columns}
              rows={processedRows}
              onEdit={(updatedRow) => console.log('Updated row:', updatedRow)}
              onDelete={(rowToDelete) => console.log('Deleted row:', rowToDelete)}
            />
          </div>
        </div>
      </div>

      {/* Add Topic Modal */}
      {topicFormOn && (
        <Modal onClose={() => setTopicFormOn(false)}>
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4 text-black">Add Topic</h2>
            <input
              type="text"
              placeholder="Enter topic title"
              value={newTopicTitle}
              onChange={(e) => setNewTopicTitle(e.target.value)}
              className="border p-2 w-full mb-4 text-black"
            />
            <button
              className="bg-violet-700 text-white px-4 py-2 rounded"
              onClick={handleAddTopic}
            >
              Save Topic
            </button>
          </div>
        </Modal>
      )}

      {/* Add SubTopic Modal */}
      {subTopicFormOn && (
        <Modal onClose={() => setSubTopicFormOn(false)}>
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4 text-black">Add Sub Topic</h2>
            <select
              value={selectedTopicId}
              onChange={(e) => setSelectedTopicId(e.target.value)}
              className="border p-2 w-full mb-4 text-black"
            >
              <option value="" disabled>
                Select Topic
              </option>
              {allTopics.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.title}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Enter subtopic title"
              value={newSubTopicTitle}
              onChange={(e) => setNewSubTopicTitle(e.target.value)}
              className="border p-2 w-full mb-4 text-black"
            />
            <button
              className="bg-violet-700 text-white px-4 py-2 rounded"
              onClick={handleAddSubTopic}
            >
              Save Sub Topic
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Topics;
