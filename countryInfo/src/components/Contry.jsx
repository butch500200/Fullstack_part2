import React, { useEffect, useState } from "react";
import weatherService from "../services/weatherService";

const api_key = import.meta.env.VITE_SOME_KEY;

export const Contry = ({ contry }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    weatherService.getWeatherForContry(contry).then((data) => {
      console.log(data);
      setWeather(data);
    });
  }, []);

  return (
    <div>
      <h1>{contry.name.common}</h1>
      <h3>Capital : {contry.capital[0]}</h3>
      <h3>Area : {contry.area}</h3>
      <h2>Languages</h2>
      <ul>
        {Object.entries(contry.languages).map(([key, lang]) => {
          return <li key={key}>{lang}</li>;
        })}
      </ul>
      <img src={contry.flags.png}></img>
      {weather ? (
        <>
          <h2>Weather in {contry.capital[0]} </h2>
          <p>temperature {weather.main.temp}</p>
          <p>wind {weather.wind.speed} m/s</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
