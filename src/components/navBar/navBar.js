import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import getRestructuredObject from '../../common/dataLogic';
import './navBar.scss';
import less from '../../images/less-than.png';

const NavBar = () => {
  const currency = useSelector((state) => state);
  const currencies = getRestructuredObject();
  let inputValue = '';

  const handleInputChange = (event, newInputValue) => {
    const sliced = newInputValue.slice(0, 3);
    inputValue = sliced;
  };

  const history = useHistory();
  const handleClick = () => {
    history.push(`/details/${inputValue}`);
  };

  const theme = createTheme({
    palette: {
      background: {
        paper: '#253a7a',
      },
      text: {
        primary: '#fff',
        secondary: 'rgb(81, 118, 228)',
      },
      action: {
        active: 'rgb(81, 118, 228)',
      },
    },
  });

  const [input, setInput] = useState('');

  useEffect(() => {
    if (currencies) {
      const elements = (
        <div className="container-sm mt-5 mt-sm-2 d-md-flex align-items-md-center">
          <div>
            <ThemeProvider theme={theme}>
              <Autocomplete
                id="currency-Input"
                sx={{ width: 300, backgroundColor: '#253a7a', color: 'text.primary' }}
                options={currencies}
                onInputChange={handleInputChange}
                autoHighlight
                getOptionLabel={(option) => {
                  const parameter = `${option.currencyCode} ${option.currencyName}`;
                  return parameter;
                }}
                // Solution for @MUI equality error between value selected and options
                isOptionEqualToValue={
                  (option, value) => option.currencyCode === value.currencyCode
                }
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ '& > img': { mr: 2, flk: 0, backgroundColor: 'background.paper' }, color: 'text.primary' }}
                    // Spreading is necessary for code to work
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={option.flag}
                      alt=""
                    />
                    (
                    {option.currencyCode}
                    )
                    {' '}
                    {option.currencyName}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    // Disabling eslint is necessary for code to work
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...params}
                    label="Search"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </ThemeProvider>
          </div>
          <div>
            <Button className="mx-md-2 mt-1 mt-md-0" color="info" variant="outlined" onClick={handleClick}>Search</Button>
          </div>
        </div>
      );
      setInput(elements);
    }
  }, [currency]);

  return (
    <>
      <Grid container>
        <Grid item md={6}>
          <nav>
            <div className="logo-container">
              <Link to="/">
                <img src={less} alt="back-icon" height="20" width="30" />
              </Link>
              <div className="logo">GC</div>
              <div id="font">xchange</div>
            </div>
          </nav>
        </Grid>
        <Grid item md={6}>
          {input}
        </Grid>
      </Grid>
    </>
  );
};

export default NavBar;
