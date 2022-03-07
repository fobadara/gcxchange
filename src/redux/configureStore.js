import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './currencies/currencies';
import countryReducer from './countries/countries';

const reducer = {
  history: historyReducer,
  country: countryReducer,
};

const store = configureStore({
  reducer,
});

export default store;
