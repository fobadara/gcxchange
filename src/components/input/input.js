import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

import getRestructuredObject from '../../common/dataLogic';

const theme = createTheme({
  palette: {
    background: {
      paper: 'green',
    },
    text: {
      primary: '#fff',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    // success: {
    //   dark: '#009688',
    // },
  },
});

const Input = ({ type }) => {
  const currencies = getRestructuredObject();
  // const SuccessButton = (props) => {
  const history = useHistory();

  const [inputValue, setInputValue] = useState('');

  // const [currencyLink, setCurrencyLink] = useState('');

  // let currencyLink = '';

  const handleInputChange = (event, newInputValue) => {
    console.log(newInputValue)
    const sliced = newInputValue.slice(0, 4);
    setInputValue(sliced);

    // setCurrencyLink(inputValue);
    // if (type === 'search') {
    // console.log(currencyLink);
    // } else {
    // currencyLink = ' ';
    // }
  };

  const handleClick = () => {
    // currencyLink = `/details/${inputValue}`;
    // if (type === 'search') {
    // setCurrencyLink(`/details/${inputValue}`);
    // history.push(`/details/${inputValue}`);
    // setInputValue('Choose a currency');
    // window.location.reload(false);
    // }
  };
  // const a = 1;
  // let test;
  // if (a) {
  //   test = "/details/NGN";
  // } else {
  //   a = '';
  // }

  return (
    <>
      {currencies && (
        <>
          <ThemeProvider theme={theme}>
            <Autocomplete
              id="currency-Input"
              sx={{ width: 300, backgroundColor: 'green', color: 'text.primary' }}
              options={currencies}
              onInputChange={handleInputChange}
              autoHighlight
              getOptionLabel={(option) => {
                const parameter = `${option.currencyCode} ${option.currencyName}`;
                return parameter;
              }}
              // Soltion fo @MUI equality error between value selected and options
              isOptionEqualToValue={(option, value) => option.currencyCode === value.currencyCode}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0, backgroundColor: 'background.paper' }, color: 'text.primary' }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    src={option.flag}
                    // srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  <span>
                    (
                    {option.currencyCode}
                    )
                  </span>
                  <span>
                    {' '}
                    {option.currencyName}
                  </span>
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a currency"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </ThemeProvider>
          {/* <Link to={test}><div>abc</div></Link> */}
          <Link to={`/details/${inputValue}`}>
            <Button color="success" variant="outlined" size="small" onClick={handleClick}> Go</Button>
          </Link>
        </>
      )}
    </>
  );
};

export default Input;
