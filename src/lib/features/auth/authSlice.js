import { userSignInAsync } from '@/lib/services/authService';
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  adminData: null,
  isAuth: false,
  userClient: null,
  access_token:null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: (state) => initialState
  },

  extraReducers: (builder) => {
    builder
      .addCase(userSignInAsync.fulfilled, (state, action) => {
        state.userClient = action.payload.data.user;
        state.access_token = action.payload.data.token;
      })
  },
});

export const { resetAuthState } = authSlice.actions;

export default authSlice.reducer;
