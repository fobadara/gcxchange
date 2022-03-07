import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getCurrentDateTime from '../../common/currentDateTime';

const { numDay, month, year } = getCurrentDateTime();
const baseCurrency = 'USD';
// First, create the thunk
export const fetchHistoricalRates = createAsyncThunk('gcxchange/currencies/getForexHistory', async () => {
  const response = await axios.get(`https://freecurrencyapi.net/api/v2/historical?apikey=25c474a0-8926-11ec-8311-898ca4976dbd&base_currency=${baseCurrency}&date_from=2017-01-01&date_to=${year}-${month}-${numDay}`);
  // console.log(response.data.data)
  return response.data.data;
});
// Then, handle actions in your reducers:
const historySlice = createSlice({
  name: 'history',
  initialState: { history: {}, loading: 'idle' },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    [fetchHistoricalRates.pending]: (state) => {
      console.log('pending');
      return { ...state, loading: 'true' };
    },
    [fetchHistoricalRates.fulfilled]: (state, { payload }) => {
      console.log('fulfilled');
      return { ...state, history: payload, loading: 'successful' };
    },
    [fetchHistoricalRates.rejected]: (state) => {
      console.log('rejected');
      return { ...state, loading: 'rejected' };
    },
  },
});

export const getHistory = (state) => state.history;
export default historySlice.reducer;
