import Pagination from '@mui/material/Pagination';

const Paginate = ({ page, onChange, pageTotal }) => {
  // const totalPageNumber = Math.ceil(totalCurrencies.length / currenciesPerPage);
  // console.log('total:', totalCurrencies.length)
  return (
    <Pagination count={pageTotal} page={page} onChange={onChange} color="secondary" />
  );
};

// const propTypes.Pagination = {
//   currenciesPer
// };

export default Paginate;
