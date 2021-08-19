

const regionAsia = fetch('https://restcountries.eu/rest/v2/region/asia').then(
  (data) => data.json()
);

const regionEurope = fetch(
  'https://restcountries.eu/rest/v2/region/europe'
).then((data) => data.json());

Promise.all([regionAsia, regionEurope]).then((countries) =>
  console.log(...countries[0], ...countries[1])
);
