import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import './detailsListing.scss';

const DetailsList = (props) => {
  const {
    dataArray: {
      currencyCode,
      currencyName,
      currentRate,
      baseCode,
      lastUpdated,
      country,
      region,
    },
  } = props;

  return (
    <Box sx={{ width: '100%' }}>
      <div id="about">
        About
        {' '}
        {currencyCode}
      </div>
      <Grid container className="details" justifyContent="space-between">
        <Grid item xs={6}>Currency</Grid>
        <Grid item xs={6}>{currencyName}</Grid>
      </Grid>
      <Grid container className="details" justifyContent="space-between" key="base">
        <Grid item xs={6}>Base Code</Grid>
        <Grid item xs={6}>{baseCode}</Grid>
      </Grid>
      <Grid container className="details" justifyContent="space-between">
        <Grid item xs={6}>Rate</Grid>
        <Grid item xs={6}>{currentRate}</Grid>
      </Grid>
      <Grid container className="details" justifyContent="space-between">
        <Grid item xs={6}>Last Updated</Grid>
        <Grid item xs={6}>{lastUpdated}</Grid>
      </Grid>
      <Grid container className="details" justifyContent="space-between">
        <Grid item xs={6}>Country</Grid>
        <Grid item xs={6}>{country}</Grid>
      </Grid>
      <Grid container className="details" justifyContent="space-between">
        <Grid item xs={6}>Continent</Grid>
        <Grid item xs={6}>{region}</Grid>
      </Grid>
    </Box>
  );
};

DetailsList.propTypes = {
  dataArray: PropTypes.shape({
    currencyCode: PropTypes.string,
    currencyName: PropTypes.string,
    currentRate: PropTypes.number,
    baseCode: PropTypes.string,
    lastUpdated: PropTypes.string,
    country: PropTypes.string,
    region: PropTypes.string,
  }).isRequired,
};

export default DetailsList;
