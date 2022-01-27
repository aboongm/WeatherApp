const key = "FQhDhttKGhz2VTiKYKN3WP6RSAT6qEcs";

const getWeather = async (id) => {
  const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`);
  const data = await response.json();
  return data[0];
};

const getCity = async (city) => {
  const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`);
  const data = await response.json();

  return data[0];
};

// getCity("imphal")
//   .then((data) => getWeather(data.Key))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
