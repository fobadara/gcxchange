import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

const DetailsList = (props) => {
  // const {currencyCode, currentRate, baseCode,
  //   currencyName, coat, languages, timeZones, region
  // } =
  console.log('asscbgggg')
  // const data = dataArray;
  // const data = useEffect(() => {
  const { dataArray } = props;
  // return dataArray;
  // }, [props]);

  // let list;
  // if (dataArray) {
  // console.log(data)
  // list = (
  // <>
  {/* <Grid>
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
  // </> */}
  // );
  // }

  return (
    <Box sx={{ width: '100%' }}>
      <Grid>
        <div>Currency</div>
        <div>{dataArray.currencyName}</div>
      </Grid>
      <Grid key="base">
        <div>Base Code</div>
        <div>{dataArray.baseCode}</div>
      </Grid>
      <Grid>
        <div>Rate</div>
        <div>{dataArray.currentRate}</div>
      </Grid>
      <Grid>
        <div>Last Updated</div>
        <div>{dataArray.lastUpdated}</div>
      </Grid>
      <Grid>
        <div>Country</div>
        <div>{dataArray.country}</div>
      </Grid>
      <Grid>
        <div>Continent</div>
        <div>{dataArray.region}</div>
      </Grid>
    </Box>
  );
};

export default DetailsList;
