import PropTypes from 'prop-types';
import Pagination from '@mui/material/Pagination';

const Paginate = (props) => {
  const { page, onChange, pageTotal } = props;
  return (
    <>
      {pageTotal && (
        <Pagination count={pageTotal} page={page} onChange={onChange} color="secondary" />
      )}
    </>
  );
};

Paginate.propTypes = {
  page: PropTypes.number.isRequired,
  pageTotal: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Paginate;
