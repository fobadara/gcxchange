import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCountry } from '../../redux/countries/countries';
import { fetchCurrencyRates } from '../../redux/currencies/currencies';
import Top from './currenciesTop';
import CurrencyListing from './currencyListing';
import './currencies.scss';

const Currencies = () => {
  const { country, currency } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!country.length && !currency.length) {
      dispatch(fetchCurrencyRates());
      dispatch(fetchAsyncCountry());
    }
  }, [dispatch]);

  return (
    <section id="currencies">
      <Top sx={{ m: 4 }} />
      <div id="base">Base currency: USD</div>
      <CurrencyListing />
    </section>
  );
};

export default Currencies;
