async function printCountryDetails() {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countries = await response.json();
      countries.forEach(country => {
        const name = country.name.common;
        const capital = country.capital;
        const flag = country.flag
        console.log(`Country: ${name}, Capital: ${capital}, Flag: ${flag}`);
      });
    }

  printCountryDetails();