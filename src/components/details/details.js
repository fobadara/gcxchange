import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import DetailsListing from './detailsListing';
import getRestructuredObject from '../../common/dataLogic';

const Details = () => {
  const code = useParams();
  const [currencyCode, setCurrencyCode] = useState(code);
  useEffect(() => {
    setCurrencyCode(code);
  }, [code]);
  const renderObjects = getRestructuredObject();
  // console.log(getRestructuredObject);
  const { details } = currencyCode;
  const [data, setData] = useState({});
  useEffect(() => {
    if (renderObjects) {
      for (let i = 0; i < renderObjects.length; i += 1) {
        if (renderObjects[i].currencyCode === details) {
          const list = {};
          list.currencyCode = renderObjects[i].currencyCode;
          list.coat = renderObjects[i].coat;
          list.currentRate = renderObjects[i].currentRate;
          list.baseCode = renderObjects[i].baseCode;
          list.currencyName = renderObjects[i].currencyName;
          list.country = renderObjects[i].country;
          list.languages = renderObjects[i].languages;
          list.timeZones = renderObjects[i].timezones;
          list.region = renderObjects[i].region;
          list.lastUpdated = renderObjects[i].lastUpdated;
          setData(list);
        }
      }
    }
  }, [currencyCode]);

  const top = (
    <Grid
      container
      className="top"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        mx: 'auto', mt: '1.6em', px: '0.8em', py: '2em',
      }}
    >
      <Grid sx={{ pr: 10 }} item xs={6}>
        <img src={data.coat} alt="Coat of arms" width="80" />
      </Grid>
      <Grid sx={{ pl: 12 }} item xs={6}>
        <h1 style={{ fontSize: 'medium' }}>{data.currencyCode}</h1>
      </Grid>
    </Grid>
  );
  return (
    <div>
      {top}
      <DetailsListing dataArray={data} />
    </div>
  );
};

export default Details;
