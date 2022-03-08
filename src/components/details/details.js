import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCountry } from '../../redux/countries/countries';
import { getCurrency, getSortedData } from '../../redux/currencies/currencies';
// import renderObject from '../../common/dataLogic';
const Details = () => {
  const currencyCode = useParams();
  // console.log('hello:', renderObject)
  const sortedData = useSelector(getSortedData);
  // const country = useSelector(getCountry);

  console.log(sortedData);
  return (
    <div>Details</div>
  )
};

export default Details;
