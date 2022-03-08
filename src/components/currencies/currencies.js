import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCountry } from '../../redux/countries/countries';
import { fetchCurrencyRates } from '../../redux/currencies/currencies';
import Top from './currenciesTop';
import CurrencyListing from './currencyListing';
import './currencies.scss';

const Currencies = () => {
  const { loading, country, currency } = useSelector((state) => state);
  console.log(loading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!country.length && !currency.length) {
      dispatch(fetchCurrencyRates());
      dispatch(fetchAsyncCountry());
    }
  }, []);

  return (
    <section id="currencies">
      <Top />
      <CurrencyListing />
    </section>
  );
};

export default Currencies;
