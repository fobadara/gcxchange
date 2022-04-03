import currencyReducer from './currencies/currencies';
import countriesReducer from './countries/countries';

test('should return initial state for currency', () => {
  const initialState = {
    currency: {},
    loading: 'idle',
  };

  const newState = currencyReducer(undefined, {});

  expect(newState).toEqual(initialState);
});

test('should return initial state for countries', () => {
  const initialState = {
    country: {},
    loading: 'idle',
  };

  const newState = countriesReducer(undefined, {});

  expect(newState).toEqual(initialState);
});
