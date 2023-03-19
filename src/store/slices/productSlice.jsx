import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from '../thunks/fetchProduct';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: {},
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const productReducer = productSlice.reducer;
