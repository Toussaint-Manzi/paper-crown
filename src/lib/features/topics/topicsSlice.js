import { getAllTopics } from '@/lib/services/userServices';
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    // for synchronous reducers
  },

  extraReducers: (builder) => {
    builder.addCase(getAllTopics.fulfilled, (state, action) => {
      return action.payload.items;
    });
  },
});

export default topicsSlice.reducer;
