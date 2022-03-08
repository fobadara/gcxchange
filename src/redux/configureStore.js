import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currencies/currencies';
import countryReducer from './countries/countries';

const reducer = {
  currency: currencyReducer,
  country: countryReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }, ['redux-immutable-state-invariant']),
  preloadedState: undefined,
  devTools: true,
});

export default store;
