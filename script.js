// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((country) => {
//       console.log(country);
//     });
//   });

// async function fetchCountries() {
//   const response = await fetch("https://restcountries.com/v3.1/all");
//   const data = await response.json();
//   data.forEach((country) => {
//     console.log(country);
//   });
// }

// fetchCountries();

const countryCard = document.createElement("a");
countryCard.classList.add("countryCard");

const cardImg = document.createElement("img");
cardImg.src = "https://flagcdn.com/is.svg";
