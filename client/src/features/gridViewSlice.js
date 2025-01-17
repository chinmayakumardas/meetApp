// src/redux/gridViewSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isGridView: true, // Default value for the view
};

const gridViewSlice = createSlice({
  name: 'gridView',
  initialState,
  reducers: {
    toggleGridView: (state) => {
      state.isGridView = !state.isGridView;
    },
  },
});

export const { toggleGridView } = gridViewSlice.actions;
export default gridViewSlice.reducer;
