import Grid from '@mui/material/Grid';

import getCurrenDateTime from '../../common/currentDateTime';
// import stock from '../../images/stocks.svg';
import './currenciesTop.scss';

const Top = () => {
  const {
    day, numDay, month, year,
  } = getCurrenDateTime();
  return (
    <article className="top">
      <Grid container justifyContent="center" alignItems="center" sx={{ mx: 'auto', py: '2em', width: '80%' }}>
        <Grid sx={{ pr: 8 }} item xs={6} id="container">
          <div id="top-left" />
        </Grid>
        <Grid sx={{ pl: 4 }} item xs={6}>
          <h3 style={{}}>Today is:</h3>
          <div style={{}}>{`${day} ${numDay}/${month}/${year}`}</div>
        </Grid>
      </Grid>
    </article>
  );
};

export default Top;
