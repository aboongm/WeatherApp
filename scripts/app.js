const cityForm = document.querySelector("form");
const details = document.querySelector(".details");

// update the city and weather information
const updateUI = async (data) => {
  const { cityDetails, weather } = data;

  details.innerHTML = `
  <h1 class="my-4">${cityDetails.EnglishName}</h1>
  <my-4>${weather.WeatherText}</my-4>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
  `;
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  return {
    cityDetails,
    weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get the city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with the new city
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
