import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { selectAccessToken } from './adminService';

// API endpoint URLs
const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// get access token from redux
export const selectAccessToken = (state) =>
  state.authData.accessToken;

export const getAllResources = createAsyncThunk(
  'resources',
  async (_, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState()); // Get access token from selector
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/stories`);
      const { data } = response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllTopics = createAsyncThunk(
  'topics',
  async (_, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState()); // Get access token from selector
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/topic`);
      const { data } = response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
