import store from '../redux/configureStore';

// Get  and restructure items to render from data
const getRestructuredObject = async () => {
  const data = await store.getState();
  console.log(data)
  let renderObject;
  const object = [];

  if (data) {
    const { currency } = data.currency;
    console.log(currency.conversion_rates)

    const rates = currency.conversion_rates;
    const { country } = data.country;
    console.log(currency);
    console.log(country);
    if (rates && country) {
      // for (let i = 0; i < rates; i += 1) {
      console.log(rates)
      renderObject = Object.keys(rates).map((rateCode) => {
        // const object = [];
        // const rateCode = Object.keys(rate)[0];
        for (let k = 0; k < country.length; k += 1) {
          if (country[k].currencies) {
            // Go into countries API and get the currency code
            const currencyCode = Object.keys(country[k].currencies)[0];
            if (rateCode === currencyCode) {
              const cardObject = {};
              cardObject.currencyCode = rateCode;
              cardObject.currentRate = rates[rateCode];
              cardObject.lastUpdated = currency.time_last_update_utc;
              cardObject.baseCode = currency.base_code;
              cardObject.currencyName = country[k].currencies[currencyCode].name;
              cardObject.coat = country[k].coatOfArms.png;
              cardObject.languages = country[k].languages;
              cardObject.timeZones = country[k].timeZones;
              cardObject.region = country[k].region;
              object.push(cardObject);
              // console.log(object)
            }
          }
          // console.log('good:', object)
        }
      });
      renderObject = object;
    }
  }
  console.log(renderObject)
  return renderObject;
};

export default getRestructuredObject;
// // import { useSelector } from 'react-redux';

// // import { getCountry } from '../redux/countries/countries';
// // import { getHistory } from '../redux/currencies/currencies';
// // import { country, data } from '../App';
// // // const data = useSelector(getHistory);
// // // const country = useSelector(getCountry);
// // console.log(data);
// // console.log(country);

// // const getCurrentRate = (params) => {
// //   const allRates = data.history;
// //   console.log('All rates:', allRates)
// //   let currentRateArray;
// //   if (allRates) {
// //     // convert allRates to array
// //     const years = Object.keys(allRates);
// //     // get present day
// //     const currentDay = years[years.length - 1];
// //     const currentRate = allRates[currentDay];
// //     console.log(currentRate);
// //     currentRateArray = Object.entries(currentRate);
// //   }
// //   return currentRateArray;
// // };
// // const currentRate = getCurrentRate();
// // // console.log(currentRate);

// // const createcardObject = (second) => {
// //   const cardObjects = [];

// //   // console.log('COUNTRY:', country)
// //   if (currentRate && country) {
// //     for (let i = 0; i < currentRate.length; i += 1) {
// //       for (let k = 0; k < country.length; k += 1) {
// //         if (country[k].currencies) {
// //           // console.log(currentRate[i][0])
// //           // console.log(Object.keys(country[k].currencies)[0])
// //           // Go into countries API and get the currency code
// //           const currencyCode = Object.keys(country[k].currencies)[0];
// //           // if( k < 4) {
// //           //   console.log(currentRate)
// //           // console.log('hello:',currencyCode, currentRate[i][0])
// //           // }
// //           // console.log(`${k}`,cardObject)
// //           // console.log('aaaa');
// //           if (currentRate[i][0] === currencyCode) {
// //             // console.log(currencyCode)
// //             console.log('bbbbbcccc');

// //             const cardObject = {};
// //             // console.log('rate:',currentRate[i][0])
// //             // console.log('currency:',currencyCode)
// //             cardObject.currencyCode = currentRate[i][0];
// //             cardObject.currentRate = currentRate[i][1];
// //             cardObject.currencyName = country[k].currencies[currencyCode].name;
// //             cardObject.coat = country[k].coatOfArms.png;
// //             cardObjects.push(cardObject);
// //             // console.log(`${k}`,cardObject)
// //             // console.log(`${k}`,cardObjects)
// //           }
// //         }
// //       }
// //     }
// //   }
// //   // console.log(cardObjects)
// //   return cardObjects;
// // };

// // const objValue = createcardObject();
// // // console.log(objValue);

// // const RemoveDuplicates = (params) => {
// //   const unique = new Set();
// //   const filtered = objValue.filter((obj) => {
// //     const isPresentInSet = unique.has(obj.currencyCode);

// //     unique.add(obj.currencyCode);

// //     return !isPresentInSet;
// //   });

// //   return filtered;
// // };

// // const uniqueRates = RemoveDuplicates();

// // const sortedRates = uniqueRates.sort((a, b) => {
// //   if (a.currencyCode < b.currencyCode) {
// //     return -1;
// //   } if (a.currencyCode > b.currencyCode) {
// //     return 1;
// //   }
// //   return 0;
// // });

// // export default sortedRates;
