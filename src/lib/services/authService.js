import { common } from '@mui/material/colors';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const selectAccessToken = (state) =>
  state.signupData.token;

export const userSignInAsync = createAsyncThunk(
  '/auth/user/sign-in',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/auth/login`, {
        account:email,
        password,
      });
      const { data } = response;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSignUpAsync = createAsyncThunk(
  '/auth/user/sign-up',
  async ({ formData }, thunkAPI) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/user/signup`, {
        ...formData, gender:'male'
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const otpVerification = async ({otpCode}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/auth/phone/verify/token`, {
      token: otpCode
    });
    const { data, status } = response;
    return { data, status };
  } catch (error) {
    return error.response;
  }
};

export const profileSubmission = createAsyncThunk(
  "profile/creation",
  async ({ firstName, lastName, school, interests }, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/account/talent_profile`, {
        firstName,
        lastName,
        school,
        interests,
      }, { headers });
      const { status } = response;
      return status;
    } catch (error) {
      return error.response.status;
    }
  }
); 

export const quizGenerator = createAsyncThunk(
  "quiz/generate",
  async ({ interest }, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/assessments/generate/${interest}`,{ headers });
      return response;
    } catch (error) {
      return error.response;
    }
  }
); 

export const companyProfileSubmission = createAsyncThunk(
  "profile/company",
  async ({ formData }, thunkAPI) => {
    console.log('hiiiiii', formData);
    const accessToken = selectAccessToken(thunkAPI.getState());
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    try {
      const response = await axios.patch(`${API_BASE_URL}/api/v1/company/company_profile`, {
        ...formData
      }, { headers });
      return response;
    } catch (error) {
      return error.response;
    }
  }
); 
