const cityForm = document.querySelector("form");
const details = document.querySelector(".details");
const time = document.querySelector(".time");
const weatherIcon = document.querySelector(".icon img");

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

  // update the weather icons
  let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  weatherIcon.setAttribute("src", iconSrc);

  // update the day/night icon
  let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
  time.setAttribute("src", timeSrc);
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
