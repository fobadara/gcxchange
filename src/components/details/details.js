import { useParams } from 'react-router-dom';

const Details = () => {
  const currencyCode = useParams();
  console.log(currencyCode.details);
  return (
    <div>Details</div>
  )
};

export default Details;
