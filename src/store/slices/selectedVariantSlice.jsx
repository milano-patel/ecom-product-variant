import { createSlice } from '@reduxjs/toolkit';

const selectedVariantSlice = createSlice({
  name: 'selectedVariant',
  initialState: {},
  reducers: {
    addVariant(state, action) {
      return action.payload;
    },
  },
});

export const selectedVariantReducer = selectedVariantSlice.reducer;
export const { addVariant } = selectedVariantSlice.actions;
