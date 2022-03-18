import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';

import getRestructuredObject from '../../common/dataLogic';
import ActionAreaCard from '../currenciesCard/currenciesCard';
import Paginate from '../paginate/paginate';

const CurrencyListing = () => {
  const renderObjects = getRestructuredObject();
  // Display pages based on paginate
  const [currentPage, setCurrentPage] = useState(1);
  const currenciesPerPage = 12;

  // Get current currencies on present page
  let handleChange = () => true;
  let currentCurrencies = 0;
  let totalPageNumber = 0;
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
  if (renderObjects) {
    renderCards = currentCurrencies.map((current) => {
      const index = uuidv4();
      let cards;
      if (current.currentRate !== 1) {
        cards = (
          <Grid item xs={6} id="card" sm={4} md={3} key={current.currencyCode}>
            <Link to={`/details/${current.currencyCode}`} style={{ textDecoration: 'none' }} key={index}>
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
  }
  return (
    <div>
      <div>
        <Link to="/details/AMD">
          ALL
        </Link>
        <Grid container spacing={0}>
          {renderCards && renderCards}
        </Grid>
      </div>
      <Paginate page={currentPage} onChange={handleChange} pageTotal={totalPageNumber} />
    </div>
  );
};

export default CurrencyListing;
