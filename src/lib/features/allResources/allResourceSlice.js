import { getAllResources } from '@/lib/services/userServices';
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

export const allResoucesSlice = createSlice({
  name: 'allResouces',
  initialState,
  reducers: {
    // for synchronous reducers
  },

  extraReducers: (builder) => {
    builder.addCase(getAllResources.fulfilled, (state, action) => {
      return action.payload.items;
    });
  },
});

export default allResoucesSlice.reducer;
