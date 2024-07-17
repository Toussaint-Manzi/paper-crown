import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './features/signup/signupStepSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      signup: signupReducer
    }
  });
};
