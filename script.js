async function fetchAsiaCountriesNames() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    const asiaCountriesNames = countries.filter(country => country.region && country.region.includes('Asia')).map(country => country.name.common);
    console.log(asiaCountriesNames);
}
fetchAsiaCountriesNames();