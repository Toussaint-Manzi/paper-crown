import { configureStore, Tuple } from '@reduxjs/toolkit';
import signupReducer from './features/signup/signupStepSlice';
import authReducer from './features/auth/authSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      signup: signupReducer,
      authData: authReducer
    },
  });
};
