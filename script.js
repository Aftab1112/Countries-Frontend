const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector(".filter-by-region");
const searchInput = document.querySelector(".search-container input");
let allCountriesData;

async function fetchCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  countriesContainer.innerHTML = "";
  renderCountries(data);
  allCountriesData = data;
}

fetchCountries();

filterByRegion.addEventListener("change", (e) => {
  async function fetchCountries() {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${filterByRegion.value}`
    );
    const data = await response.json();
    countriesContainer.innerHTML = "";
    renderCountries(data);
  }
  fetchCountries();
});

function renderCountries(data) {
  data.forEach((country) => {
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

searchInput.addEventListener("input", (e) => {
  const filteredCountries = allCountriesData.filter((country) =>
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  );
  countriesContainer.innerHTML = "";
  renderCountries(filteredCountries);
});
