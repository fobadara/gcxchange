import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getCurrentDateTime from '../../common/currentDateTime';

const { numDay, month, year } = getCurrentDateTime();
const baseCurrency = 'USD';
// First, create the thunk
export const fetchCurrencyRates = createAsyncThunk('gcxchange/currencies/getForexcurrency', async () => {
  const response = await axios.get(`https://v6.exchangerate-api.com/v6/eea2ec71ea830a1a5efd3eb9/latest/USD`);
  console.log(response.data)
  return response.data;
});
// Then, handle actions in your reducers:
const currencySlice = createSlice({
  name: 'currency',
  initialState: { currency: {}, loading: 'idle' },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    // saveSorted: (state, action) => {
    //   state.sorted.push(action.payload);
    // },
  },
  extraReducers: {
    [fetchCurrencyRates.pending]: (state) => {
      console.log('pending');
      return { ...state, loading: 'true' };
    },
    [fetchCurrencyRates.fulfilled]: (state, { payload }) => {
      console.log('fulfilled');
      return { ...state, currency: payload, loading: 'successful' };
    },
    [fetchCurrencyRates.rejected]: (state) => {
      console.log('rejected');
      return { ...state, loading: 'rejected' };
    },
  },
});

export const { saveSorted } = currencySlice.actions;
export const getSortedData = (state) => state.sorted;
export const getCurrency = (state) => state.currency;
export default currencySlice.reducer;
