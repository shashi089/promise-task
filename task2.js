fetch('https://restcountries.eu/rest/v2/lang/es')
  .then((data) => data.json())
  .then((countries) =>
    console.log(countries.filter((val) => val.region === 'Europe'))
  );
