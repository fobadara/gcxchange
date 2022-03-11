import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DetailsListing from './detailsListing';

import { getCountry } from '../../redux/countries/countries';
import { getCurrency, getSortedData } from '../../redux/currencies/currencies';
import getRestructuredObject from '../../common/dataLogic';

const Details = () => {
  const currencyCode = useParams();
  console.log(currencyCode)
  const renderObjects = getRestructuredObject();
  const { details } = currencyCode;
  const [data, setData] = useState('');
  // let img;


  useEffect(() => {
    console.log(renderObjects);
    if (renderObjects) {
      for (let i = 0; i < renderObjects.length; i += 1) {
        if (i === 1) {
          console.log(renderObjects[i].currencyCode)
        }
        if (renderObjects[i].currencyCode === details) {
          console.log(renderObjects[i].currencyCode)
          console.log('zzzz')
          const list = {};
          console.log(renderObjects[i], details);
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
          // useEffect(() => {
          // handler = (list) => {
          setData(list);
          // };
          // }, []);
          console.log(data)
          // return;
        }
      }
    }
  }, []);

  const top = (
    <div>
      <img src={data.coat} alt="Coat of arms" width="50" />
      <div>{data.currencyCode}</div>
    </div>
  );
  // }
  // });

  // console.log(sortedData);
  return (
    <div>
      {top}
      <DetailsListing dataArray={data} />
    </div>
  );
};

export default Details;
