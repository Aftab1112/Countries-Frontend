const countryName = new URLSearchParams(location.search).get("name");
const flagImage = document.querySelector(".country-details img");
const countryNameHeading = document.querySelector(".country-name");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const topLevelDomain = document.querySelector(".top-level-domain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
const borderCountries = document.querySelector(".border-countries");

async function fetchCountry() {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const [country] = await response.json();

  flagImage.src = country.flags.svg;
  countryNameHeading.innerHTML = country.name.common;

  if (country.name.nativeName) {
    nativeName.innerText = Object.values(country.name.nativeName)[0].common;
  } else {
    nativeName.innerText = country.name.common;
  }

  population.innerText = country.population;

  region.innerText = country.region;

  if (country.subregion) {
    subRegion.innerText = country.subregion;
  }

  if (country.capital) {
    capital.innerText = country.capital.join(", ");
  }

  topLevelDomain.innerText = country.tld.join(", ");

  if (country.currencies) {
    currencies.innerText = Object.values(country.currencies)
      .map((currencies) => currencies.name)
      .join(", ");
  }

  if (country.languages) {
    languages.innerText = Object.values(country.languages).join(", ");
  }

  if (country.borders) {
    country.borders.forEach((border) => {
      async function borderCountriesAll() {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${border}`
        );
        const [borderCountry] = await response.json();
        const borderCountryTag = document.createElement("a");
        borderCountryTag.innerText = borderCountry.name.common;
        borderCountryTag.href = `country.html?name=${borderCountry.name.common}`;
        borderCountries.append(borderCountryTag);
      }
      borderCountriesAll();
    });
  }
}

fetchCountry();
