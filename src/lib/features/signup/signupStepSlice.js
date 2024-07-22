import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 0,
  formData: {
    sectionOne: {
      fullName: '',
      email: '',
      phoneNumber: '',
      gender: '',
      country: ''
    },
    sectionTwo: {
      organisation: '',
      position: '',
      password: '',
      confirmPassword: ''
    }
  }
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    updateSectionOne: (state, action) => {
      state.formData.sectionOne = action.payload;
    },
    updateSectionTwo: (state, action) => {
      state.formData.sectionTwo = action.payload;
    }
  }
});

export const { nextStep, prevStep, updateSectionOne, updateSectionTwo } = signupSlice.actions;
export default signupSlice.reducer;
