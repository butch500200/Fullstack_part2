import axios from "axios";

const api_key = import.meta.env.VITE_SOME_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiEnd = `&appid=${api_key}`;

const getWeatherForContry = (contry) => {
  const lat = contry.latlng[0];
  const lon = contry.latlng[1];

  const request = axios.get(`${baseUrl}lat=${lat}&lon=${lon}${apiEnd}`);
  return request.then((response) => response.data);
};

export default { getWeatherForContry };
