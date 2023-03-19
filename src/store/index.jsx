import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './slices/productSlice';
import { selectedVariantReducer } from './slices/selectedVariantSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    selectedVariant: selectedVariantReducer,
  },
});

export * from './thunks/fetchProduct';
