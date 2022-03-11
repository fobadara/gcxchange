import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { getCountry } from '../../redux/countries/countries';
import getRestructuredObject from '../../common/dataLogic';
import { saveSorted, getCurrency } from '../../redux/currencies/currencies';
import ActionAreaCard from '../currenciesCard/currenciesCard';
import Paginate from '../paginate/paginate';

const CurrencyListing = () => {
  const renderObjects = getRestructuredObject();

  // Display pages based on paginate
  const [currentPage, setCurrentPage] = useState(1);
  const [currenciesPerPage, setCurrenciesPerPage] = useState(12);

  // Get current currencies on present page
  let handleChange;
  let currentCurrencies;
  let totalPageNumber;
  // console.log(renderObjects)
  if (renderObjects) {
    const indexOfLastCurrency = currentPage * currenciesPerPage;
    const indexOfFirstCurrency = indexOfLastCurrency - currenciesPerPage;
    currentCurrencies = renderObjects.slice(indexOfFirstCurrency, indexOfLastCurrency);
    totalPageNumber = Math.ceil(renderObjects.length / currenciesPerPage);

    handleChange = (event, value) => {
      setCurrentPage(value);
    };
  }
  let renderCards;
  // Render curencies for current page
  console.log(currentCurrencies);
  if (renderObjects) {
    renderCards = currentCurrencies.map((current) => {
      const index = uuidv4();
      let cards;
      if (current.currentRate !== 1) {
        cards = (
          <Grid xs={6} sm={4} md={3}>
            <Link to={`/details/${current.currencyCode}`} key={index}>
              <ActionAreaCard
                code={current.currencyCode}
                coat={current.coat}
                rate={current.currentRate}
              />
            </Link>
          </Grid>
        );
      }
      return cards;
    });
  } else {
    renderCards = (
      <div className="movies-error">
        {/* will make dynamic */}
        <h3>Error</h3>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Grid container spacing={0}>
          {renderCards}
        </Grid>
      </div>
      <Paginate page={currentPage} onChange={handleChange} pageTotal={totalPageNumber} />
    </div>
  );
};

export default CurrencyListing;
