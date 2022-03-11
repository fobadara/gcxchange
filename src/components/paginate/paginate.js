import Pagination from '@mui/material/Pagination';

const Paginate = ({ page, onChange, pageTotal }) =>
// const totalPageNumber = Math.ceil(totalCurrencies.length / currenciesPerPage);
// console.log('total:', totalCurrencies.length)
{
  /* const totalPageNumber = Math.ceil(totalCurrencies.length / currenciesPerPage);*/
  /* console.log('total:', totalCurrencies.length)*/
  return (
  // const totalPageNumber = Math.ceil(totalCurrencies.length / currenciesPerPage);
  // console.log('total:', totalCurrencies.length)
    <>
      {pageTotal && (
        <Pagination count={pageTotal} page={page} onChange={onChange} color="secondary" />
      )}
    </>
  );
};

// const propTypes.Pagination = {
//   currenciesPer
// };

export default Paginate;
