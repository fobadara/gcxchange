import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { getCountry } from '../../redux/countries/countries';
import { getHistory } from '../../redux/currencies/currencies';
import ActionAreaCard from '../currenciesCard/currenciesCard';
import Paginate from '../paginate/paginate';

const CurrencyListing = () => {
  const data = useSelector(getHistory);
  const country = useSelector(getCountry);
  console.log(data);
  console.log(country);

  const getCurrentRate = (params) => {
    const allRates = data.history;
    console.log('All rates:', allRates)
    let currentRateArray;
    if (allRates) {
      // convert allRates to array
      const years = Object.keys(allRates);
      // get present day
      const currentDay = years[years.length - 1];
      const currentRate = allRates[currentDay];
      console.log(currentRate)
      currentRateArray = Object.entries(currentRate);
    }
    return currentRateArray;
  };
  const currentRate = getCurrentRate();
  // console.log(currentRate);

  const createcardObject = (second) => {
    const cardObjects = [];

    // console.log('COUNTRY:', country)
    if (currentRate && country) {
      for (let i = 0; i < currentRate.length; i += 1) {
        for (let k = 0; k < country.length; k += 1) {
          if (country[k].currencies) {
            // console.log(currentRate[i][0])
            // console.log(Object.keys(country[k].currencies)[0])
            // Go into countries API and get the currency code
            const currencyCode = Object.keys(country[k].currencies)[0];
            // if( k < 4) {
            //   console.log(currentRate)
            // console.log('hello:',currencyCode, currentRate[i][0])
            // }
            // console.log(`${k}`,cardObject)
            // console.log('aaaa');
            if (currentRate[i][0] === currencyCode) {
              // console.log(currencyCode)
              console.log('bbbbbcccc');

              const cardObject = {};
              // console.log('rate:',currentRate[i][0])
              // console.log('currency:',currencyCode)
              cardObject.currencyCode = currentRate[i][0];
              cardObject.currentRate = currentRate[i][1];
              cardObject.currencyName = country[k].currencies[currencyCode].name;
              cardObject.coat = country[k].coatOfArms.png;
              cardObjects.push(cardObject);
              // console.log(`${k}`,cardObject)
              // console.log(`${k}`,cardObjects)
            }
          }
        }
      }
    }
    // console.log(cardObjects)
    return cardObjects;
  };

  const objValue = createcardObject();
  // console.log(objValue);

  const RemoveDuplicates = (params) => {
    const unique = new Set();
    const filtered = objValue.filter((obj) => {
      const isPresentInSet = unique.has(obj.currencyCode);

      unique.add(obj.currencyCode);

      return !isPresentInSet;
    });

    return filtered;
  };

  const uniqueRates = RemoveDuplicates();

  const sortedRates = uniqueRates.sort((a, b) => {
    if (a.currencyCode < b.currencyCode) {
      return -1;
    } if (a.currencyCode > b.currencyCode) {
      return 1;
    }
    return 0;
  });

  // Display pages based on paginate
  const currencies = uniqueRates;
  const [currentPage, setCurrentPage] = useState(1);
  const [currenciesPerPage, setCurrenciesPerPage] = useState(10);

  console.log(currencies);

  // Get current currencies on present page
  const indexOfLastCurrency = currentPage * currenciesPerPage;
  const indexOfFirstCurrency = indexOfLastCurrency - currenciesPerPage;
  const currentCurrencies = currencies.slice(indexOfFirstCurrency, indexOfLastCurrency);
  const totalPageNumber = Math.ceil(currencies.length / currenciesPerPage);

  // console.log(indexOfLastCurrency)

  let renderCards;
  // Render curencies for current page
  console.log(currentCurrencies);
  if (currentCurrencies) {
    renderCards = currentCurrencies.map((obj) => {
      const index = uuidv4();
      return (
        <Link to={`/${obj.currencyCode}`} key={index}>
          <ActionAreaCard data={obj} />
        </Link>
      );
    });
  } else {
    renderCards = (
      <div className="movies-error">
        {/* will make dynamic */}
        <h3>Error</h3>
      </div>
    );
  }

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div>{renderCards}</div>
      <Paginate page={currentPage} onChange={handleChange} pageTotal={totalPageNumber} />
    </>
  );
};

export default CurrencyListing;
