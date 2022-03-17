import store from '../redux/configureStore';

// Get  and restructure items to render from data
function getRestructuredObject() {
  const data = store.getState();
  let renderObject;
  const object = [];

  if (data) {
    const { currency } = data.currency;

    const rates = currency.conversion_rates;
    const { country } = data.country;
    if (rates && country) {
      renderObject = Object.keys(rates).map((rateCode) => {
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
              cardObject.coat = country[k].coatOfArms.svg;
              cardObject.languages = country[k].languages;
              cardObject.timeZones = country[k].timezones;
              cardObject.country = country[k].name.common;
              cardObject.region = country[k].region;
              cardObject.flag = country[k].flags.svg;
              object.push(cardObject);
            }
          }
        }
        return null;
      });
      renderObject = object;
    }
  }

  function RemoveDuplicates() {
    const unique = new Set();
    let filtered;
    if (renderObject) {
      filtered = renderObject.filter((obj) => {
        const isPresentInSet = unique.has(obj.currencyCode);

        unique.add(obj.currencyCode);

        return !isPresentInSet;
      });
    }
    return filtered;
  }

  const uniqueRates = RemoveDuplicates();

  // Sort object
  let sortedRates;
  if (uniqueRates) {
    sortedRates = uniqueRates.sort((a, b) => {
      if (a.currencyCode < b.currencyCode) {
        return -1;
      } if (a.currencyCode > b.currencyCode) {
        return 1;
      }
      return 0;
    });
  }
  return sortedRates;
}

export default getRestructuredObject;
