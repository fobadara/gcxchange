import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAsyncCountry = createAsyncThunk('gcxchange/currencies/getAsyncCountry', async () => {
  const response = await axios.get(`https://restcountries.com/v3.1/all`);
  // console.log(response.data);
  return response.data;
});

const countrySlice = createSlice({
  name: 'country',
  initialState: { country: {}, loading: 'idle' },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    [fetchAsyncCountry.pending]: (state) => {
      console.log('pending');
      return { ...state, loading: 'true' };
    },
    [fetchAsyncCountry.fulfilled]: (state, { payload }) => {
      console.log('fulfilled');
      return { ...state, country: payload, loading: 'successful' };
    },
    [fetchAsyncCountry.rejected]: (state) => {
      console.log('rejected');
      return { ...state, loading: 'rejected' };
    },
  },
});

export const getCountry = (state) => state.country.country;
export default countrySlice.reducer;
