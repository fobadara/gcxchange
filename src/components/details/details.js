import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailsListing from './detailsListing';

import { getCountry } from '../../redux/countries/countries';
import { getCurrency, getSortedData } from '../../redux/currencies/currencies';
import getRestructuredObject from '../../common/dataLogic';

const Details = () => {
  const currencyCode = useParams();
  const renderObjects = getRestructuredObject();
  // console.log('hello:', renderObject)
  // const sortedData = useSelector(getSortedData);
  // const country = useSelector(getCountry);
  const { details } = currencyCode;
  const data = [];
  console.log(details)
  if (renderObjects) {
    for (let i = 0; i < renderObjects.length; i += 1) {
      // if(i === 1) {
      //   console.log(renderObjects[i])
      // }
      // let list;
      if (renderObjects[i].currencyCode === details) {
        const list = {};
        console.log(renderObjects[i], details)
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
        data.push(list);
      }

      // data = list;
      // break;
    }
  }
  // renderObjects.map((current) => {
  // let list = {};
  // console.log(renderObjects)
  // if (current.currencyCode === currencyCode.details) {
  // return current.currencyCode == details;
  // }

  // let list = {
  //   code: current.currencyCode,
  //   coat: current.coat,
  //   currentRate: current.currentRate,
  //   baseCode: current.base_Code,
  //   currencyName: current.currencyName,
  //   country: current.country,
  //   languages: current.languages,
  //   timeZones: current.timezones,
  //   region: current.region,
  // };
  // return list
  // return list;
  // });
  // const top = renderObjects.map((current) => {
  // console.log(current.currencyCode, currencyCode)
  // if (current.currencyCode === currencyCode.details) {
  // return (
  console.log(data)
  const top = (
    <div>
      <img src={data[0].coat} alt="Coat of arms" width="50" />
      <div>{data[0].currencyCode}</div>
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
