import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCountry } from '../../redux/countries/countries';
import { fetchHistoricalRates } from '../../redux/currencies/currencies';
import Top from './currenciesTop';
import CurrencyListing from './currencyListing';
import './currencies.scss';

const Currencies = () => {
  const { loading, country } = useSelector((state) => state);
  console.log(loading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!country.length) {
      dispatch(fetchHistoricalRates());
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
