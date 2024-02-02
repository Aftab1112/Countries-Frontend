const countriesContainer = document.querySelector(".countries-container");

async function fetchCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  data.forEach((country) => {
    console.log(country);
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `country.html?name=${country.name.common}`;

    countryCard.innerHTML = `
    <img src=${country.flags.svg} alt="${country.name.common}flag" />
    <div class="card-text">
      <h3 class="card-tittle">${country.name.common}</h3>
      <p><b>Population: </b>${country.population.toLocaleString("en-IN")}</p>
      <p><b>Region: </b>${country.region}</p>
      <p><b>Capital: </b>${country.capital ? country.capital[0] : "None"}</p>
    </div>
`;

    countriesContainer.append(countryCard);
  });
}

fetchCountries();
