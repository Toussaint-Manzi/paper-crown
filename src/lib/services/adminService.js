import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { selectAccessToken } from './adminService';

// API endpoint URLs
const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// get access token from redux
export const selectAccessToken = (state) =>
  state.authData.access_token;

export const addTopic = createAsyncThunk(
  'topics',
  async ({ title }, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState()); // Get access token from selector
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/topic`,{ title }, { headers });
      const { data } = response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addSubTopic = createAsyncThunk(
    'topics',
    async ({ title, topicId }, thunkAPI) => {
      const accessToken = selectAccessToken(thunkAPI.getState()); // Get access token from selector
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
  
      try {
        const response = await axios.post(`${API_BASE_URL}/api/v1/topic/${topicId}`,{ title }, { headers });
        const { data } = response.data;
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
