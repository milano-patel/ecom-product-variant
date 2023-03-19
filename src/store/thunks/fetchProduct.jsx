import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchProduct = createAsyncThunk('product/fetch', async () => {
  const response = await axios.get('PUT YOUR OWN LINK TO JSON FILE');
  return response.data;
});

export { fetchProduct };
