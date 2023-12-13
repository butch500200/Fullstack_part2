import React from "react";

export const Contry = ({ contry }) => {
  return (
    <div>
      <h1>{contry.name.common}</h1>
      <h3>Capital : {contry.capital[0]}</h3>
      <h3>Area : {contry.area}</h3>
      <h2>Languages</h2>
      <ul>
        {Object.entries(contry.languages).map(([key, lang]) => {
          return <li>{lang}</li>;
        })}
      </ul>
      <img src={contry.flags.png}></img>
    </div>
  );
};
