import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const DetailsList = (props) => {
  // const {currencyCode, currentRate, baseCode,
  //   currencyName, coat, languages, timeZones, region
  // } =
  let { dataArray } = props;
  const data = dataArray[0];
  console.log(data)
  const list = (
    <>
      <Grid>
        <div>Currency</div>
        <div>{data.currencyName}</div>
      </Grid>
      <Grid key="base">
        <div>Base Code</div>
        <div>{data.baseCode}</div>
      </Grid>
      <Grid>
        <div>Rate</div>
        <div>{data.currentRate}</div>
      </Grid>
      <Grid>
        <div>Last Updated</div>
        <div>{data.lastUpdated}</div>
      </Grid>
      <Grid>
        <div>Country</div>
        <div>{data.country}</div>
      </Grid>
      <Grid>
        <div>Continent</div>
        <div>{data.region}</div>
      </Grid>
      {/* <Grid>
        <div>Languages</div>
        <div>
          {data.languages.map((language) => (
            <span key={language}>
              data.languages[language]
              {' '}
            </span>
          ))}
        </div>
      </Grid> */}
      {/* <Grid>
        <div>Timezones</div>
        <div>
          {data.timZones.map((timeZone) => (
            <span key={timeZone}>
              {data.timeZones[timeZone]}
              {' '}
            </span>
          ))}
        </div>
      </Grid> */}
    </>
  );

  return (
    <Box sx={{ width: '100%' }}>
      {list}
    </Box>
  );
};

export default DetailsList;
