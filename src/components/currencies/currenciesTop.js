import Grid from '@mui/material/Grid';

import getCurrenDateTime from '../../common/currentDateTime';
// import stock from '../../images/stocks.svg';
import './currenciesTop.scss';

const Top = () => {
  const {
    day, numDay, month, year,
  } = getCurrenDateTime();
  return (
    <article id="top">
      <Grid container justifyContent="space-around" alignItems="center" sx={{mx: 'auto', py: '5em', width: '80%'}} >
        <Grid xs={12} sm={6} id="top-left" />
        {/* <img id="top-right" height="50" src={stock} alt="icon" /> */}
        <Grid xs={6}>
          <div style={{ }}>{`Today is: ${day}`}</div>
          <div style={{ }}>{`${numDay}/${month}/${year}`}</div>
        </Grid>
      </Grid>
    </article>
  );
};

export default Top;
