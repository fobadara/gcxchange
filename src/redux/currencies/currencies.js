import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// First, create the thunk
export const fetchCurrencyRates = createAsyncThunk('gcxchange/currencies/getForexcurrency', async () => {
  const response = await axios.get('https://v6.exchangerate-api.com/v6/eea2ec71ea830a1a5efd3eb9/latest/USD');
  return response.data;
});
// Then, handle actions in your reducers:
const currencySlice = createSlice({
  name: 'currency',
  initialState: { currency: {}, loading: 'idle' },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    [fetchCurrencyRates.pending]: (state) => ({ ...state, loading: 'true' }),
    [fetchCurrencyRates.fulfilled]: (state, { payload }) => ({ ...state, currency: payload, loading: 'successful' }),
    [fetchCurrencyRates.rejected]: (state) => ({ ...state, loading: 'rejected' }),
  },
});

export const getSortedData = (state) => state.sorted;
export const getCurrency = (state) => state.currency;
export default currencySlice.reducer;
